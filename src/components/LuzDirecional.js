import * as THREE from 'three'

export function LuzDirecional(){
    const luzDirecionada = new THREE.DirectionalLight();

    luzDirecionada.position.set(-100, -100, 200);
    luzDirecionada.up.set(0, 0, 1);
    luzDirecionada.castShadow = true;

    luzDirecionada.shadow.width = 2048;
    luzDirecionada.shadow.height = 2048;

    luzDirecionada.shadow.camera.up.set(0,0,1)
    luzDirecionada.shadow.camera.left = -400
    luzDirecionada.shadow.camera.right = 400
    luzDirecionada.shadow.camera.top = 400
    luzDirecionada.shadow.camera.bottom = -400
    luzDirecionada.shadow.camera.near = 10
    luzDirecionada.shadow.camera.far = 600

    return luzDirecionada;
}