import * as THREE from 'three';
import { tilesPerRow, tileSize } from '../constantes';

export function Estrada(rowIndex){
    const estrada = new THREE.Group();
    estrada.position.y = rowIndex * tileSize;

    const fundacao = new THREE.Mesh(
        new THREE.BoxGeometry(tilesPerRow * tileSize, tileSize),
        new THREE.MeshLambertMaterial({
            color: 0x454a59,
        })
    );

    fundacao.receiveShadow = true;
    estrada.add(fundacao);

    return estrada;
}