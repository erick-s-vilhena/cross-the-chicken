import * as THREE from 'three';
import { tileSize } from '../constantes';

export function Limites(x, rowIndex, pos){
    const limites = new THREE.Mesh(
        new THREE.BoxGeometry(1, tileSize, 20),
        new THREE.MeshLambertMaterial({
            color: 'rgba(8, 197, 251, 0.1)',
            flatShading: true,
        })
    );
    limites.position.y = rowIndex * tileSize
    limites.position.x = x * tileSize - (pos)
    limites.position.z = 10;

    return limites;
}