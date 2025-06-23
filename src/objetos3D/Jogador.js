import * as THREE from 'three'
import { posicaoInvalida } from '../utilities/posicaoInvalida';
import { metaData as rows, addRows } from '../components/Mapa';

export const jogador = Jogador();

const linhaPassada = new Set();

function Jogador(){
    const jogador = new THREE.Group();

    jogador.vivo = true
    jogador.contador = 0
    jogador.grande = true 

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
    
    const jogadorContainer = new THREE.Group();
    jogadorContainer.add(jogador);

    return jogadorContainer
}

export const posicao = {
    atualRow: 0,
    atualTile: 0
}

export const moves = [];

export function MoveJogador(direcao){
    const moveValido = posicaoInvalida({
        rowIndex: posicao.atualRow,
        tileIndex: posicao.atualTile
    },
    [...moves, direcao]);

    if(!moveValido) { return }

    moves.push(direcao)
}

export function stepCompleta(){
    const direcao = moves.shift();

    if(direcao === 'front'){ posicao.atualRow += 1 };
    if(direcao === 'back'){ posicao.atualRow -= 1 };
    if(direcao === 'left'){ posicao.atualTile -= 1 };
    if(direcao === 'right'){ posicao.atualTile += 1 };


    if(posicao.atualRow > rows.length - 10){
        addRows();
    }


    //controle de pontuação 
    const score = document.querySelector('.score');

    if( posicao.atualRow > 5 &&
        (posicao.atualRow - 1 ) % 12 == 0 && 
        !linhaPassada.has(posicao.atualRow)
    ){
        jogador.children[0].contador += 1;
        linhaPassada.add(posicao.atualRow)
    }

    if(score){
        score.innerHTML = jogador.children[0].contador;
    }
}

//reinicia as mtricas do jogador
export function iniciarJogador(){
    jogador.position.x = 0;
    jogador.position.y = 0;
    jogador.children[0].position.z = 0;
    jogador.children[0].vivo = true
    jogador.children[0].grande = false

    posicao.atualRow = 0;
    posicao.atualTile = 0;

    linhaPassada.clear();
    jogador.children[0].contador = 0;

    moves.length = 0
}