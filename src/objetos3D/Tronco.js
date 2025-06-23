import * as THREE from 'three';
import { maxTileIndex, minTileIndex, tileSize } from '../constantes';

export function Tronco(inicialTileIndex, direcao){
    const caminhao = new THREE.Group();
    caminhao.position.x = inicialTileIndex * tileSize;

    if(!direcao){
        caminhao.rotation.z = Math.PI;
    }

    const carga = new THREE.Mesh(
        new THREE.BoxGeometry(100, 34, 10),
        new THREE.MeshLambertMaterial({
            color: '#ac4d31',
            flatShading: true,
        })
    );
    carga.position.x = -15;
    carga.position.z = 0;

    carga.castShadow = true;
    carga.receiveShadow = true;

    caminhao.add(carga)

    return caminhao;
}


const clock = new THREE.Clock();
const velocidadeTronco = 50;

export function animacaoTronco(array){
    const delta = clock.getDelta();

    //animaçao dos veiculos
    array.forEach((rowData)=>{
      
        const inicioDaLinha = (minTileIndex - 2) * tileSize;

        const finalDaLinha = (maxTileIndex + 2) * tileSize;

        if(rowData.position){
            if(rowData.position.x > finalDaLinha){
                rowData.position.x = inicioDaLinha
            }else{
                rowData.position.x = rowData.position.x +  velocidadeTronco * delta;
            }
        }
        else{
            if(rowData.position.x < inicioDaLinha){
                rowData.position.x = finalDaLinha
            }else{
                rowData.position.x = rowData.position.x - velocidadeTronco * delta;
            }
        }
    })
}