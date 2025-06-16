import * as THREE from 'three'
import { tileSize } from '../constantes'

export function Arvore(tileIndex, height){
    const arvore = new THREE.Group();
    arvore.position.x = tileIndex * tileSize;

    const tronco = new THREE.Mesh(
        new THREE.BoxGeometry(15, 15, 20),
        new THREE.MeshLambertMaterial({
            color: 0x4d2926,
            flatShading: true,
        })
    );
    tronco.position.z = 10;

    arvore.add(tronco);

    const folha = new THREE.Mesh(
        new THREE.BoxGeometry(30, 30, height),
        new THREE.MeshLambertMaterial({
            color: 0x7aa21d,
            flatShading: true,
        })
    );
    folha.position.z = height / 2 + 20;

    folha.castShadow = true;
    folha.receiveShadow = true

    arvore.add(folha);

    return arvore
}