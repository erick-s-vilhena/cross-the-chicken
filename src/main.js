import * as THREE from 'three';
import { Renderer } from './components/Renderer'; 
import { Camera } from './components/Camera';
import { jogador } from './components/Jogador';
import './style.css'
import { arrayTronco, iniciarMapa, mapa } from './components/Mapa';
import { LuzDirecional } from './components/LuzDirecional';
import { animacaoVeiculos } from './animacaoVeiculos';
import './entradaJogador';
import { animacaoJogador } from './animacaoJogador';
import { colisao } from './colisao';
import { animacaoTronco } from './components/Tronco';

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

iniciarJogo();

function iniciarJogo(){
  iniciarMapa()
}

const renderer = Renderer();
renderer.setAnimationLoop(animate);

function animate(){
  animacaoVeiculos();
  animacaoJogador();
  animacaoTronco(arrayTronco)
  colisao();

  renderer.render(cena, camera)
}