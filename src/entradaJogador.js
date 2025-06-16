import { MoveJogador } from "./components/Jogador";

document.querySelector('.forward')?.addEventListener('click', ()=> { 
    MoveJogador('forward')
})

document.querySelector('.backward')?.addEventListener('click', ()=> { 
    MoveJogador('backward')
})

document.querySelector('.left')?.addEventListener('click', ()=> { 
    MoveJogador('left')
})

document.querySelector('.right')?.addEventListener('click', ()=> { 
    MoveJogador('right')
})

window.addEventListener('keydown', (e) => {
    if(e.code === 'KeyW'){
        e.preventDefault();
        MoveJogador('forward')
    }

    if(e.code === 'KeyS'){
        e.preventDefault();
        MoveJogador('backward')
    }

    if(e.code === 'KeyA'){
        e.preventDefault();
        MoveJogador('left')
    }

    if(e.code === 'KeyD'){
        e.preventDefault();
        MoveJogador('right')
    }
})