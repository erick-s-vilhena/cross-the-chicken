import * as THREE from 'three'
import { tilesPerRow, tileSize } from '../constantes';

export function Grama(rowIndex){
    const grama = new THREE.Group();
    grama.position.y = rowIndex * tileSize;

    const fundacao = new THREE.Mesh(
        new THREE.BoxGeometry(tilesPerRow * tileSize, tileSize, 3),
        new THREE.MeshLambertMaterial({
            color: 0xbaf455
        })
    )

    fundacao.position.z = 1.5;
    fundacao.receiveShadow = true;

    grama.add(fundacao)

    return grama
}