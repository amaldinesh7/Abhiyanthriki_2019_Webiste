if (WEBGL.isWebGLAvailable() === false) {
    document.body.appendChild(WEBGL.getWebGLErrorMessage());
}
var container, controls;
var camera, scene, renderer, light, composer;
var glitchPass;
var clock;
var gltfscene;

init();
animate();

function init() {
    container = document.createElement('div');
    document.body.appendChild(container);
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.25, 20);
    camera.position.set(2, 0.9, 2.7);

    // Skybox
    scene = new THREE.Scene();
    clock = new THREE.Clock();
    scene.fog = new THREE.Fog(0x000000, 1, 1000);

    renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.gammaOutput = true;
    container.appendChild(renderer.domElement);
    window.addEventListener('resize', onWindowResize, false);

    composer = new THREE.EffectComposer(renderer);
    composer.addPass(new THREE.RenderPass(scene, camera));
    glitchPass = new THREE.GlitchPass();
    glitchPass.renderToScreen = true;
    composer.addPass(glitchPass);

}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
    render();
    composer.render();

}

function render() {
    var delta = clock.getDelta();
    if (gltfscene !== undefined) {
        gltfscene.rotation.y += delta * 0.05;
    }
    renderer.render(scene, camera);
}