import * as THREE from 'three'
import { tileSize } from '../constantes'

export function Cerca(tileIndex){
    const cerca = new THREE.Group();
    cerca.position.x = tileIndex * tileSize;

    const tronco = new THREE.Mesh(
        new THREE.BoxGeometry(10, 10, 24),
        new THREE.MeshLambertMaterial({
            color: '#823902',
            flatShading: true,
        })
    );
    tronco.position.z = 12;

    tronco.castShadow = true;
    tronco.receiveShadow = true;

    cerca.add(tronco);


    const corrente = new THREE.Mesh(
        new THREE.BoxGeometry(tileSize, 4, 4),
        new THREE.MeshLambertMaterial({
            color: '#aaaaaa',
            flatShading: true,
        })
    );
    corrente.position.z = 16;

    corrente.castShadow = true;
    corrente.receiveShadow = true;

    cerca.add(corrente);


    return cerca
}