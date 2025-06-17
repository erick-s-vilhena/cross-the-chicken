export function calcularPosicao(atualPosicao, moves){

    return moves.reduce((posicao, direcao) =>{
        if(direcao === 'front') return{
            rowIndex: posicao.rowIndex + 1,
            tileIndex: posicao.tileIndex,
        }

        if(direcao === 'back') return{
            rowIndex: posicao.rowIndex - 1,
            tileIndex: posicao.tileIndex,
        }

        if(direcao === 'left') return{
            rowIndex: posicao.rowIndex ,
            tileIndex: posicao.tileIndex - 1,
        }

        if(direcao === 'right') return{
            rowIndex: posicao.rowIndex,
            tileIndex: posicao.tileIndex + 1,
        }

        return posicao;

    }, atualPosicao);
}