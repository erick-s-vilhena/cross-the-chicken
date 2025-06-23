import { MoveJogador } from "./components/Jogador";

let click_W = false;
let click_S = false;
let click_A = false;
let click_D = false;

window.addEventListener('keydown', (e) => {
    if(e.code === 'KeyW'){
        e.preventDefault();
        
        if(!click_W){ 
            click_W = true;
            MoveJogador('front') 
        }
    }

    if(e.code === 'KeyS'){
        e.preventDefault();
        
        if(!click_S){ 
            click_S = true;
            MoveJogador('back') 
        }
    }

    if(e.code === 'KeyA'){
        e.preventDefault();
        
        if(!click_A){ 
            click_A = true;
            MoveJogador('left') 
        }
    }

    if(e.code === 'KeyD'){
        e.preventDefault();

        if(!click_D){ 
            click_D = true;
            MoveJogador('right') 
        }
    }
})


window.addEventListener('keyup', (e) => {
    if(e.code === 'KeyW'){
        e.preventDefault();
        click_W = false
    }

    if(e.code === 'KeyS'){
        e.preventDefault();
        click_S = false
    }

    if(e.code === 'KeyA'){
        e.preventDefault();
        click_A = false
    }

    if(e.code === 'KeyD'){
        e.preventDefault();
        click_D = false
    }
})
