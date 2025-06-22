import * as THREE from 'three';
import { metaData as rows } from './components/Mapa';
import { minTileIndex, maxTileIndex, tileSize } from './constantes';

const clock = new THREE.Clock();

export function animacaoVeiculos(){
    const delta = clock.getDelta();

    //animaçao dos veiculos
    rows.forEach((rowData)=>{
        if(rowData.type === 'carro' || rowData.type === 'caminhao' || rowData.type === 'tronco'){
            const inicioDaLinha = (minTileIndex - 2) * tileSize;

            const finalDaLinha = (maxTileIndex + 2) * tileSize;

            rowData.veiculos.forEach(({ ref }) =>{
                if(!ref){
                    throw Error ('Veiculos nao existe')
                }

                if(rowData.direcao){
                    if(ref.position.x > finalDaLinha){
                        ref.position.x = inicioDaLinha
                    }else{
                        ref.position.x = ref.position.x + rowData.velocidade * delta;
                    }
                }
                else{
                    if(ref.position.x < inicioDaLinha){
                        ref.position.x = finalDaLinha
                    }else{
                        ref.position.x = ref.position.x - rowData.velocidade * delta;
                    }
                }
            })
        }
    })
}