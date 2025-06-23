import * as THREE from 'three';
import { metaData as rows } from './components/Mapa';
import { jogador, posicao } from './components/Jogador';

const result = document.querySelector('.result-container');
const score_final = document.querySelector('.score-final');
const score = document.querySelector('.score');

export function colisao(){
    const row = rows[posicao.atualRow -1];
 
    if(!row){ return }

    if(row.type === 'carro' || row.type === 'caminhao'){
        const jogadorBox = new THREE.Box3();
        jogadorBox.setFromObject(jogador)

        row.veiculos.forEach(({ ref }) => {
            if(!ref){
                throw Error ('Veiculo não encontrado');
            }

            const veiculoBox = new THREE.Box3();
            veiculoBox.setFromObject(ref)

            if (jogador.children[0].semColisao) return;

            if(jogadorBox.intersectsBox(veiculoBox) && jogador.children[0].grande === false){
                if(!result || !score_final){ return }

                result.style.visibility = 'visible';
                score.style.visibility = 'hidden'
                score_final.innerHTML = jogador.children[0].contador;

                jogador.children[0].vivo = false
            }
            else if(jogadorBox.intersectsBox(veiculoBox) && jogador.children[0].grande === true){

                // Desativa a colisão por 2 segundos
                jogador.children[0].semColisao = true;
                jogador.children[0].grande = false

                // Reativa a colisão após 2 segundos
                setTimeout(() => {
                    jogador.children[0].semColisao = false;
                }, 2000);
            }
        })
    }

    if(row.maca){
        const jogadorBox = new THREE.Box3();
        jogadorBox.setFromObject(jogador)

        const macaBox = new THREE.Box3();
        macaBox.setFromObject(row.maca.ref)
        
        if(jogadorBox.intersectsBox(macaBox)){
            jogador.children[0].grande = true

            rows[posicao.atualRow - 1].maca.ref.position.z = -14

        }
        
    }
    
}
