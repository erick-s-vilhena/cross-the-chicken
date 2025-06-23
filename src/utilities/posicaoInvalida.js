import { calcularPosicao } from "./calcularPosicao";
import { minTileIndex, maxTileIndex } from '../constantes';
import { metaData as rows } from '../components/Mapa';

export function posicaoInvalida(atualPosicao, moves){
    
    const posicaoFinal = calcularPosicao(atualPosicao, moves);

    if(
        posicaoFinal.rowIndex === -1 ||
        posicaoFinal.tileIndex === minTileIndex + 10 ||
        posicaoFinal.tileIndex === maxTileIndex - 10
    ) {
        return false
    }

    const finalRow = rows[posicaoFinal.rowIndex - 1];

    if(
        finalRow &&
        finalRow.type === 'floresta' &&
        finalRow.arvores.some(
            (arvore) => arvore.tileIndex === posicaoFinal.tileIndex
        ) 
        ||
        finalRow &&
        finalRow.type === 'cerca'
    ) {
        return false
    }

    return true
}