import * as THREE from 'three';
import { Renderer } from './components/Renderer'; 
import { Camera } from './components/Camera';
import { jogador } from './components/Jogador';
import './style.css'
import { iniciarMapa, mapa } from './components/Mapa';
import { LuzDirecional } from './components/LuzDirecional';
import { animacaoVeiculos } from './animacaoVeiculos';
import './entradaJogador';
import { animacaoJogador } from './animacaoJogador';

const cena = new THREE.Scene();
cena.add(jogador)
cena.add(mapa)

const luzAmbiente = new THREE.AmbientLight();
cena.add(luzAmbiente)

const luzDirecionada = LuzDirecional();
cena.add(luzDirecionada);


const camera = Camera();
cena.add(camera)

iniciarJogo();

function iniciarJogo(){
  iniciarMapa()
}

const renderer = Renderer();
renderer.setAnimationLoop(animate);

function animate(){
  animacaoVeiculos();
  animacaoJogador();

  renderer.render(cena, camera)
}