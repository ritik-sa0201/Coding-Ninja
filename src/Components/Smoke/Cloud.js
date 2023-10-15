import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
// import cloudImg from "./assets/smoke.png";
const SmokeBackground = () => {
    const containerRef = useRef();

    useEffect(() => {
        let scene, camera, renderer;
        const container = containerRef.current;

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;
        renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        // const smokeTexture = new THREE.TextureLoader().load(cloudImg);
        // const smokeMaterial = new THREE.MeshLambertMaterial({ color: 0x622E0C, map: smokeTexture, transparent: true });
        // const smokeGeo = new THREE.PlaneBufferGeometry(10, 10);

        const ambientLight = new THREE.AmbientLight(0x622E0C);
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0x622E0C);
        pointLight.position.set(0, 0, 10);
        scene.add(pointLight);

        const animate = () => {
            requestAnimationFrame(animate);
            scene.children.forEach((particle) => {

                particle.position.y += Math.random() * 0.01;

                if (particle.position.y > 5) {
                    particle.position.y = -Math.random() * 2;
                }
            });
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            container.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default SmokeBackground;
