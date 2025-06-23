import * as THREE from 'three';
import { Renderer } from './components/Renderer'; 
import { Camera } from './components/Camera';
import { iniciarJogador, jogador } from './objetos3D/Jogador';
import './style.css'
import { arrayTronco, iniciarMapa, mapa } from './components/Mapa';
import { LuzDirecional } from './components/LuzDirecional';
import { animacaoVeiculos } from './animacaoVeiculos';
import './entradaJogador';
import { animacaoJogador } from './animacaoJogador';
import { colisao } from './colisao';
import { animacaoTronco } from './objetos3D/Tronco';

const cena = new THREE.Scene();
cena.add(jogador)
cena.add(mapa)

const luzAmbiente = new THREE.AmbientLight();
cena.add(luzAmbiente)

const luzDirecionada = LuzDirecional();
luzDirecionada.target = jogador;
jogador.add(luzDirecionada);


const camera = Camera();
jogador.add(camera);

const scoreDOM = document.querySelector('.score');
const resultDOM = document.querySelector('.result-container');

iniciarJogo();

document.querySelector('.recomecar')?.addEventListener('click', iniciarJogo);

function iniciarJogo(){
  iniciarJogador()
  iniciarMapa()

  if(scoreDOM){ 
      scoreDOM.innerHTML = `0` 
      scoreDOM.style.visibility = 'visible'
  }
  if(resultDOM){ resultDOM.style.visibility = 'hidden' }

}

const renderer = Renderer();
renderer.setAnimationLoop(animate);

function animate(){
  animacaoVeiculos();
  animacaoJogador();
  animacaoTronco(arrayTronco)
  colisao();

  if(jogador.children[0].grande){
    jogador.children[0].scale.set(1.5, 1.5, 1.5)
  }else{
    jogador.children[0].scale.set(1, 1, 1)
  }

  renderer.render(cena, camera)
}