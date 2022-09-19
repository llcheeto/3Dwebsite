import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stars from "./stars/Stars";

function Donut() {
  const scene = new THREE.Scene();
  const gemoetry = new THREE.TorusGeometry(10, 3, 15, 100);
  const material = new THREE.MeshStandardMaterial({
    color: 0xff6347,
  });

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"),
  });

  // Camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  function addStar() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3)
      .fill()
      .map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    scene.add(star);
  }
  Array(200).fill().forEach(addStar);

  // Donut instantiation
  const torus = new THREE.Mesh(gemoetry, material);

  scene.add(torus);

  const pointLight = new THREE.PointLight(0xffffff);
  pointLight.position.set(20, 20, 20);
  const ambientLight = new THREE.AmbientLight(0xffffff);

  scene.add(ambientLight, pointLight);

  const lightHelper = new THREE.PointLightHelper(pointLight);
  const gridHelper = new THREE.GridHelper(200, 50);

  scene.add(lightHelper, gridHelper);

  // Controls for movement
  const controls = new OrbitControls(camera, renderer.domElement);

  // Animation for donut
  function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    controls.update();

    renderer.render(scene, camera);
  }

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.setZ(30);

  return (
    <div>
      {renderer.render(scene, camera)} {animate()}
      <Stars />
    </div>
  );
}
export default Donut;
