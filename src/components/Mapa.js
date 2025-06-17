import * as THREE from 'three'

import { Grama } from './Grama';
import { Arvore } from './Arvore';

import { Estrada } from './Estrada';
import { Carro } from './Carro';
import { Caminhao } from './Caminhao'
import { maxTileIndex, minTileIndex, tilesPerRow } from '../constantes';
import { Cerca } from './Cerca';
import { gerarRows } from '../utilities/gerarRows';

export const metaData = [];

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

            const row = Grama(-3);

            for(let i = minTileIndex; i <= maxTileIndex; i++){
                const cerca = Cerca(i);

                row.add(cerca)
            }

            mapa.add(row)
    
}

export function addRows(){
    const newMetaData = gerarRows(20);

    const inicioIndex = metaData.length; 

    metaData.push(... newMetaData);

    newMetaData.forEach((rowData, index) => {
        const rowIndex = inicioIndex + index + 1;
        
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