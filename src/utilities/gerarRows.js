import * as THREE from 'three'
import { minTileIndex, maxTileIndex } from '../constantes'

export function gerarRows(){
    const rows = []

    for(let i = 0; i < 3; i++){
        const rowData = gerarFloresta();

        rows.push(rowData);
    }
    

    for(let i = 0; i < 10; i++){
        const rowData = Linha();

        rows.push(rowData);
    }
    
    return rows;
}

function randomElemento(array){
    return array[Math.floor(Math.random() * array.length)];
}

function Linha(){
    const type =  randomElemento(['carro', 'caminhao'])

    if(type === 'carro') {
        return gerarCarro();
    }
    else if(type === 'caminhao') {
        return gerarCaminhao();
    }
    else{
        return gerarFloresta();
    } 
}

function gerarFloresta(){
    const tileOcupada = new Set();

    const arvores = Array.from({ length: 4 }, ()=>{
        let tileIndex;

        do{
            tileIndex = THREE.MathUtils.randInt(minTileIndex, maxTileIndex);
        } 
        while (tileOcupada.has(tileIndex));

        const height = randomElemento([20, 45, 60]);

        return { tileIndex, height}
    })

    return{
        type: 'floresta',
        arvores
    }
}


function gerarCarro(){
    const direcao = randomElemento([true, false])
    const velocidade = randomElemento([125, 150, 175]);

    const tileOcupada = new Set();

    const veiculos = Array.from({ length: 3 }, ()=>{
        let inicialTileIndex;

        do{
            inicialTileIndex = THREE.MathUtils.randInt(minTileIndex, maxTileIndex)
        }
        while(tileOcupada.has(inicialTileIndex))

        tileOcupada.add(inicialTileIndex - 1);
        tileOcupada.add(inicialTileIndex);
        tileOcupada.add(inicialTileIndex + 1);

        const color = randomElemento([0xa52523, 0xbdb638, 0x78b14b]);

        return {inicialTileIndex, color}
    })

    return {
        type: 'carro',
        direcao,
        velocidade,
        veiculos
    }
}

function gerarCaminhao(){
    const direcao = randomElemento([true, false])
    const velocidade = randomElemento([125, 150, 175]);

    const tileOcupada = new Set();

    const veiculos = Array.from({ length: 2 }, ()=>{
        let inicialTileIndex;

        do{
            inicialTileIndex = THREE.MathUtils.randInt(minTileIndex, maxTileIndex)
        }
        while(tileOcupada.has(inicialTileIndex))

        tileOcupada.add(inicialTileIndex - 2);
        tileOcupada.add(inicialTileIndex - 1);
        tileOcupada.add(inicialTileIndex);
        tileOcupada.add(inicialTileIndex + 1);
        tileOcupada.add(inicialTileIndex + 2);

        const color = randomElemento([0xa52523, 0xbdb638, 0x78b14b]);

        return {inicialTileIndex, color}
    })

    return {
        type: 'caminhao',
        direcao,
        velocidade,
        veiculos
    }
}


