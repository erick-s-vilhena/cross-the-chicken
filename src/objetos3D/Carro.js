import * as THREE from 'three';
import { tileSize } from '../constantes';
import { Roda } from '../objetos3D/Roda';

export function Carro(inicialTileIndex, direcao, color){
    const carro = new THREE.Group();
    carro.position.x = inicialTileIndex * tileSize;

    if(!direcao){
        carro.rotation.z = Math.PI;
    }

    const chassi = new THREE.Mesh(
        new THREE.BoxGeometry(60, 30, 15),
        new THREE.MeshLambertMaterial({
            color,
            flatShading: true
        })
    );
    chassi.position.z = 12;

    chassi.castShadow = true;
    chassi.receiveShadow = true;

    carro.add(chassi)

    const cabine = new THREE.Mesh(
        new THREE.BoxGeometry(32, 24, 12),
        new THREE.MeshLambertMaterial({
            color: 'white',
            flatShading: true
        })
    );
    cabine.position.x = -6;
    cabine.position.z = 25.5;

    cabine.castShadow = true;
    cabine.receiveShadow = true;

    carro.add(cabine)

    const parabrisa = new THREE.Mesh(
        new THREE.BoxGeometry(34, 20, 8),
        new THREE.MeshLambertMaterial({
            color: '#0bb5e3',
            flatShading: true,
        })
    );
    parabrisa.position.x = -6;
    parabrisa.position.z = 26;
    carro.add(parabrisa)

    const janela = new THREE.Mesh(
        new THREE.BoxGeometry(26, 26, 8),
        new THREE.MeshLambertMaterial({
            color: '#0bb5e3',
            flatShading: true,
        })
    );
    janela.position.x = -6;
    janela.position.z = 26;
    carro.add(janela)


    const rodaFrontal = Roda(18);
    carro.add(rodaFrontal);

    const rodaTraseira = Roda(-18);
    carro.add(rodaTraseira);

    return carro;
}