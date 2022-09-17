import "./App.css";
import * as THREE from "three";

function App() {
  const scene = new THREE.Scene();
  const gemoetry = new THREE.TorusGeometry(10, 3, 15, 100);
  const material = new THREE.MeshBasicMaterial({
    color: 0xff6347,
    wireframe: true,
  });
  const torus = new THREE.Mesh(gemoetry, material);

  scene.add(torus);

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"),
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.setZ(30);

  return (
    <div>
      {renderer.render(scene, camera)} {animate()}
    </div>
  );
}

export default App;
