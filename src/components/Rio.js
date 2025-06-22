import * as THREE from 'three'
import { tilesPerRow, tileSize } from '../constantes';

export function Rio(rowIndex){
    const grama = new THREE.Group();
    grama.position.y = rowIndex * tileSize;

    const fundacao = new THREE.Mesh(
        new THREE.BoxGeometry(tilesPerRow * tileSize, tileSize),
        new THREE.MeshLambertMaterial({
            color: '#5bc2ec'
        })
    )
    fundacao.receiveShadow = true;

    grama.add(fundacao)

    return grama
}