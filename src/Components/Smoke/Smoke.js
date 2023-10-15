import { useTexture } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { Suspense, useMemo, useRef } from "react";
import { Object3D } from "three";
import cloudImg from "./assets/smoke.png";
// import { editable as e, SheetProvider } from '@theatre/r3f'

export function Cloud1() {
  const { width /* , height */ } = useThree((state) => state.viewport);

  const tempObject = useMemo(() => new Object3D(), []);
  const ref = useRef();
  const texture = useTexture(cloudImg);

  const particles = useMemo(() => {
    const cloudParticles = [];
    for (let p = 0; p < 500; p++) {
      const positionX = Math.random() * (width + 900);
      const positionY = Math.random() * 300;
      const positionZ = Math.random() * 500 - 800;
      const rotationZ = Math.random();
      const rotationY = Math.random();
      const rotationX = Math.random();

      cloudParticles.push({
        positionX,
        positionZ,
        positionY,
        rotationX,
        rotationZ,
        rotationY,
      });
    }
    return cloudParticles;
  }, []);

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { positionX, positionZ, rotationZ, positionY, rotationY, rotationX } =
        particle;
      tempObject.position.set(positionX, positionY, positionZ);
      tempObject.rotation.set(rotationX, rotationY, rotationZ);
      tempObject.updateMatrix();
      ref.current.setMatrixAt(i, tempObject.matrix);
    });
    particles.forEach((particle) => (particle.rotationZ += 0.002));
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[null, null, 40]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshLambertMaterial
        attach="material"
        color="#E65C00"
        position={[0, 0, -10]}
        map={texture}
        depthWrite={false}
        transparent
        opacity={0.25}
      />
    </instancedMesh>
  );
}

export function Cloud2() {
  const { width /* , height */ } = useThree((state) => state.viewport);

  const tempObject = useMemo(() => new Object3D(), []);
  const ref = useRef();
  const texture = useTexture(cloudImg);

  const particles = useMemo(() => {
    const cloudParticles = [];
    for (let p = 0; p < 500; p++) {
      const positionX = -Math.random() * (width + 800);
      const positionY = -Math.random() * 900;
      const positionZ = Math.random() * 500 - 800;
      const rotationZ = Math.random();
      const rotationY = Math.random();
      const rotationX = Math.random();

      cloudParticles.push({
        positionX,
        positionZ,
        positionY,
        rotationX,
        rotationZ,
        rotationY,
      });
    }
    return cloudParticles;
  }, []);

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { positionX, positionZ, rotationZ, positionY, rotationY, rotationX } =
        particle;
      tempObject.position.set(positionX, positionY, positionZ);
      tempObject.rotation.set(rotationX, rotationY, rotationZ);
      tempObject.updateMatrix();
      ref.current.setMatrixAt(i, tempObject.matrix);
    });
    particles.forEach((particle) => (particle.rotationZ += 0.002));
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[null, null, 40]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshLambertMaterial
        attach="material"
        color="#E65C00"
        position={[0, 0, -10]}
        map={texture}
        depthWrite={false}
        transparent
        opacity={0.25}
      />
    </instancedMesh>
  );
}
//revolving dibba for test
// function Dibba() {
//   const mesh = useRef();
//   useFrame(
//     () =>
//       (mesh.current.rotation.x = mesh.current.rotation.y = mesh.current.rotation.z += 0.01)
//   );
//   return (
//     <mesh ref={mesh}>
//       <boxBufferGeometry attach="geometry" args={[20, 20, 20]} />
//       <meshLambertMaterial attach="material" />
//     </mesh>
//   );
// }

function Smoke() {
  return (
    <>
      {/* <div className="head">NoobSaiyan</div> */}
      <Canvas camera={{ fov: 60, position: [0, 0, 250], far: 6000 }}>
        <directionalLight
          color="#ff1100"
          intensity={1.2}
          position={[0, 0, 200]}
        />
        <directionalLight
          color="#ff1100"
          intensity={0.2}
          position={[0, 0, -200]}
          rotation={[1, 0, 0]}
        />
        <ambientLight color="#555555" intensity={0.5} />
        <pointLight
          color="#d40027"
          intensity={30}
          position={[-200, 0, -40]}
          distance={500}
          decay={1.5}
        />
        <pointLight
          color="#d8547e"
          intensity={30}
          position={[100, 0, -40]}
          distance={500}
          decay={1}
        />
        <pointLight
          color="#ff0048"
          intensity={30}
          position={[300, 0, -50]}
          distance={500}
          decay={1.5}
        />
        <Suspense fallback={null}>{/* <Cloud /> */}</Suspense>
      </Canvas>
    </>
  );
}
