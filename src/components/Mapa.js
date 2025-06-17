import * as THREE from 'three'

import { Grama } from './Grama';
import { Arvore } from './Arvore';

import { Estrada } from './Estrada';
import { Carro } from './Carro';
import { Caminhao } from './Caminhao'

export const metaData = [
    {
        type: 'floresta',
        arvores: [
            { tileIndex: -4, height: 50 },
            { tileIndex: 2, height: 30 },
            { tileIndex: 5, height: 50 },
        ],
    },

    {
        type: 'carro',
        direcao: true,
        velocidade: 200,
        veiculos: [{
            inicialTileIndex: 0,
            color: 0xff0000,
        }]
    },

    {
        type: 'caminhao',
        direcao: true,
        velocidade: 80,
        veiculos: [{
            inicialTileIndex: -4,
            color: 0x00ff00,
        }]
    },

    {
        type: 'cerca',
        cerca: [{
            inicialTileIndex: 0,
            color: 0x00ff00,
        }]
    }
];

export const mapa = new THREE.Group();

export function iniciarMapa(){
    addLimites();

    for(let rowIndex = 0; rowIndex > -4; rowIndex--){
        const grama = Grama(rowIndex);
        mapa.add(grama);
    }
    // const grama = Grama(0);
    // mapa.add(grama);
    addRows();
}

export function addLimites(){
    metaData.forEach((rowData, index) => {
        const rowIndex = index + 1;


    })
}

export function addRows(){
    metaData.forEach((rowData, index) => {
        const rowIndex = index + 1;
        
        console.log(rowIndex)
        if(rowData.type === 'floresta'){
            const row = Grama(rowIndex);

            rowData.arvores.forEach(({ tileIndex, height}) =>{
                const arv = Arvore(tileIndex, height);

                row.add(arv)
            });

            mapa.add(row)
        }

        if(rowData.type === 'carro'){
            const row = Estrada(rowIndex);

            rowData.veiculos.forEach((veiculo) =>{
                const carro = Carro(
                    veiculo.inicialTileIndex,
                    rowData.direcao,
                    veiculo.color
                );

                veiculo.ref = carro;

                row.add(carro);
            });

            mapa.add(row)
        }

        if(rowData.type === 'caminhao'){
            const row = Estrada(rowIndex);

            rowData.veiculos.forEach((veiculo) =>{
                const caminhao = Caminhao(
                    veiculo.inicialTileIndex,
                    rowData.direcao,
                    veiculo.color
                );

                veiculo.ref = caminhao

                row.add(caminhao);
            });

            mapa.add(row)
        }
    })
}