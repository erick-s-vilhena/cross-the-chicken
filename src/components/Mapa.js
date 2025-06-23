import * as THREE from 'three'

import { Grama } from './Grama';
import { Arvore } from '../objetos3D/Arvore';

import { Estrada } from './Estrada';
import { Carro } from '../objetos3D/Carro';
import { Caminhao } from '../objetos3D/Caminhao';
import { Maca } from '../objetos3D/Maca';

import { Rio } from './Rio';
import { Tronco } from '../objetos3D/Tronco';

import { jogador } from '../objetos3D/Jogador';
import { Cerca } from '../objetos3D/Cerca';

import { maxTileIndex, minTileIndex } from '../constantes';
import { gerarRows } from '../utilities/gerarRows';



export const metaData = [];
export const arrayTronco = []

export const mapa = new THREE.Group();

export function iniciarMapa(){
    //limpar o mapar
    metaData.length = 0;
    mapa.remove(...mapa.children);

    //addionar linhas
    addTronco();
    addLimites();

    const grama = Grama(0);
    mapa.add(grama);

    addRows();
}

function addTronco(){
    for(let i = -2; i >= -10; i--){
        const rio = Rio(i);

        if(i % 2 !== 0){
            const tronco = Tronco(Math.floor(Math.random() * 21) - 10, false)
            rio.add(tronco)

            arrayTronco.push(tronco)
        }
        mapa.add(rio)
    }
}

export function addLimites(){

    const row = Grama(-1);

    for(let i = minTileIndex; i <= maxTileIndex; i++){
        const cerca = Cerca(i);

        row.add(cerca)
    }

    mapa.add(row)  
}

export function addRows(){
    const newMetaData = gerarRows();

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

            if(rowData.maca && jogador.children[0].grande === false){
                const maca = Maca();

                rowData.maca.ref = maca
                row.add(maca)
            }

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

            if(rowData.maca){
                const maca = Maca();
                rowData.maca.ref = maca
                row.add(maca)
            }
            mapa.add(row)
        }




    })
}