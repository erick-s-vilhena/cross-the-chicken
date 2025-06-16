import * as THREE from 'three';
import { tileSize } from '../constantes';
import { Roda } from './Roda';

export function Caminhao(inicialTileIndex, direcao, color){
    const caminhao = new THREE.Group();
    caminhao.position.x = inicialTileIndex * tileSize;

    if(!direcao){
        caminhao.rotation.z = Math.PI;
    }

    const carga = new THREE.Mesh(
        new THREE.BoxGeometry(70, 34, 34),
        new THREE.MeshLambertMaterial({
            color: 0xb4c6fc,
            flatShading: true,
        })
    );
    carga.position.x = -15;
    carga.position.z = 25;

    carga.castShadow = true;
    carga.receiveShadow = true;

    caminhao.add(carga)


    const cabine = new THREE.Mesh(
        new THREE.BoxGeometry(30, 30, 30),
        new THREE.MeshLambertMaterial({
            color: color,
            flatShading: true,
        })
    );
    cabine.position.x = 35;
    cabine.position.z = 20;

    cabine.castShadow = true;
    cabine.receiveShadow = true;

    caminhao.add(cabine)

    const parabrisa = new THREE.Mesh(
        new THREE.BoxGeometry(2, 24, 10),
        new THREE.MeshLambertMaterial({
            color: '#0bb5e3',
            flatShading: true,
        })
    );
    parabrisa.position.x = 50;
    parabrisa.position.z = 26;
    caminhao.add(parabrisa)

    const janela = new THREE.Mesh(
        new THREE.BoxGeometry(20, 32, 10),
        new THREE.MeshLambertMaterial({
            color: '#0bb5e3',
            flatShading: true,
        })
    );
    janela.position.x = 36;
    janela.position.z = 26;
    caminhao.add(janela)


    const rodaFrontal = Roda(36);
    caminhao.add(rodaFrontal);

    const rodaMeio = Roda(5);
    caminhao.add(rodaMeio);

    const rodaTraseira = Roda(-36);
    caminhao.add(rodaTraseira);

    return caminhao;
}