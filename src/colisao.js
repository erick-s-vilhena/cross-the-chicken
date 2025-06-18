import * as THREE from 'three';
import { metaData as rows } from './components/Mapa';
import { jogador, posicao } from './components/Jogador';

const result = document.querySelector('.result-container');
const score_final = document.querySelector('.score-final');

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

            if(jogadorBox.intersectsBox(veiculoBox)){
                if(!result || !score_final){ return }

                result.style.visibility = 'visible';
                score_final.innerHTML = posicao.atualRow.toString();
            }
        })
    }
}
