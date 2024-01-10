import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';

const RotatingCube = () => {
  const containerRef = useRef();
  const [isInitialized, setIsInitialized] = useState();

  useEffect(() => {
    console.log('isInitialized', isInitialized);
    if (!isInitialized) {
      // Set up scene
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      // Create cube
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      // Position camera
      camera.position.z = 5;

      // Add animation
      const animate = function () {
        requestAnimationFrame(animate);

        // Rotate the cube
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
      };

      animate();

      // Handle window resize
      const handleResize = () => {
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;

        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(newWidth, newHeight);
      };

      window.addEventListener('resize', handleResize);

      // Cleanup on component unmount
      setIsInitialized(true);
      return () => {
        window.removeEventListener('resize', handleResize);
        // You might want to clean up scene objects and event listeners here
      };

    }
  }, [isInitialized]);

  return <div ref={containerRef} />;
};

const VrLearning = () => {
  return (
    <div>
      <Link
        to="/"
        style={{ position: 'absolute', top: 10, left: 10 }}
        className='text-white bg-purple-600 py-[2px] px-[4px] ml-4 rounded-md'
      >
        Back
      </Link>
      <div className='flex justify-center items-center'>
        <RotatingCube />
      </div>
    </div>
  );
};

export default VrLearning;
