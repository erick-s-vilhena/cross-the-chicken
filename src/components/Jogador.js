import * as THREE from 'three'

export const jogador = Jogador();

function Jogador(){
    const jogador = new THREE.Group();

    const body = new THREE.Mesh(
        new THREE.BoxGeometry(15, 15, 20),
        new THREE.MeshLambertMaterial({
            color: 'white',
            flatShading: true,
        })
    );

    body.position.z = 10;
    
    body.castShadow = true;
    body.receiveShadow = true;

    jogador.add(body)


    const crista = new THREE.Mesh(
        new THREE.BoxGeometry(2, 4, 2),
        new THREE.MeshLambertMaterial({
            color: 0xf0619a,
            flatShading: true,
        })
    );

    crista.position.z = 21;
    
    crista.castShadow = true;
    crista.receiveShadow = true;

    jogador.add(crista)

    return jogador;
}

export const posicao = {
    atualRow: 0,
    atualTile: 0
}

export const moves = [];

export function MoveJogador(direcao){
    moves.push(direcao)
}

export function stepCompleta(){
    const direcao = moves.shift();

    if(direcao === 'forward'){ posicao.atualRow += 1 };
    if(direcao === 'backward'){ posicao.atualRow -= 1 };
    if(direcao === 'left'){ posicao.atualTile -= 1 };
    if(direcao === 'right'){ posicao.atualTile += 1 };
}