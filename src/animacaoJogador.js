import * as THREE from 'three';
import { moves, stepCompleta } from './objetos3D/Jogador';
import { jogador, posicao } from './objetos3D/Jogador';
import { tileSize } from './constantes';

const moveClock = new THREE.Clock(false);

export function animacaoJogador(){
    if(!moves.length){
        return;
    }

    if(!moveClock.running){
        moveClock.start();
    }

    const stepTime = 0.2;
    const progresso = Math.min(1, moveClock.getElapsedTime() / stepTime);

    if(jogador.children[0].vivo){
        setPosition(progresso);
        setRotation(progresso);
    }

    if(progresso >= 1){
        stepCompleta();
        moveClock.stop();
    }
}

function setPosition(progresso){
    const startX = posicao.atualTile * tileSize;
    const startY = posicao.atualRow * tileSize;

    let endX = startX;
    let endY = startY;

    if(moves[0] === 'left'){ endX -= tileSize };
    if(moves[0] === 'right'){ endX += tileSize };
    if(moves[0] === 'front'){ endY += tileSize };
    if(moves[0] === 'back'){ endY -= tileSize };

    jogador.position.x = THREE.MathUtils.lerp(startX, endX, progresso);
    jogador.position.y = THREE.MathUtils.lerp(startY, endY, progresso);
    jogador.children[0].position.z = Math.sin(progresso * Math.PI) * 10;
}

function setRotation(progresso){
    let endRotation = 0;

    if(moves[0] === 'front'){ endRotation = 0 };
    if(moves[0] === 'back'){ endRotation = Math.PI * 2 };
    if(moves[0] === 'left'){ endRotation = Math.PI / 2 };
    if(moves[0] === 'right'){ endRotation = Math.PI / -2 };

    jogador.children[0].rotation.z = THREE.MathUtils.lerp(
        jogador.children[0].rotation.z,
        endRotation,
        progresso
    )
}