import * as THREE from 'three';

export function Roda(x){
    const roda = new THREE.Mesh(
        new THREE.BoxGeometry(12, 32, 12),
        new THREE.MeshLambertMaterial({
            color: 0x333333,
            flatShading: true,
        })
    );
    roda.position.x = x;
    roda.position.z = 6;

    return roda;
}