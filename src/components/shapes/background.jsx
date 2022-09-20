import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function Donut() {
  // Scene and background
  const scene = new THREE.Scene();

  const spaceTexture = new THREE.TextureLoader().load(
    "../src/assets/space.jpg"
  );
  scene.background = spaceTexture;

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

  /// Stars

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

  // Lights

  const pointLight = new THREE.PointLight(0xffffff);
  pointLight.position.set(20, 20, 20);
  const ambientLight = new THREE.AmbientLight(0xffffff);

  scene.add(ambientLight, pointLight);

  /// Moon Instantiaion
  const moonTexture = new THREE.TextureLoader().load("../src/assets/moon.jpg");
  const normalTexture = new THREE.TextureLoader().load(
    "../src/assets/normal.jpg"
  );

  const moon = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial({
      map: moonTexture,
      normalMap: normalTexture,
    })
  );
  scene.add(moon);

  moon.position.z = 30;
  moon.position.setX(-25);

  // Controls for movement
  const controls = new OrbitControls(camera, renderer.domElement);

  // Animation for donut
  function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.001;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    controls.update();

    renderer.render(scene, camera);
  }

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.setZ(10);

  // Scroll function

  function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    moon.rotation.x += 0.05;
    moon.rotation.y += 0.075;
    moon.rotation.z += 0.05;

    camera.position.z = t * -0.01;
    camera.position.x = t * -0.000002;
    camera.rotation.y = t * -0.000002;
  }

  document.body.onscroll = moveCamera;

  return (
    <div>
      {renderer.render(scene, camera)} {animate()}
    </div>
  );
}
export default Donut;
