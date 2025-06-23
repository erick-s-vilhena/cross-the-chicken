import * as THREE from 'three'
import { tileSize } from '../constantes'

export function Maca(){
    const maca = new THREE.Group();
    maca.position.x = 0;

    const massa = new THREE.Mesh(
        new THREE.BoxGeometry(10, 10, 10),
        new THREE.MeshLambertMaterial({
            color: 'red',
            flatShading: true,
        })
    );
    massa.position.z = 5;

    massa.castShadow = true;
    massa.receiveShadow = true

    maca.add(massa);


    const folha = new THREE.Mesh(
        new THREE.BoxGeometry(2, 2, 4),
        new THREE.MeshLambertMaterial({
            color: 'green',
            flatShading: true,
        })
    );
    folha.position.z = 10;

    folha.castShadow = true;
    folha.receiveShadow = true

    maca.add(folha);

    return maca
}