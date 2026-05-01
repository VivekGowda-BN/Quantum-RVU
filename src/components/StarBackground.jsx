import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function StarBackground({ density = 1 }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    
    // 1. Setup Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap pixel ratio for performance
    
    if (currentMount) {
      // Clear any existing children (solves React strict mode double-mount edge cases)
      currentMount.innerHTML = '';
      currentMount.appendChild(renderer.domElement);
    }

    // 2. Create Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const baseCount = 1200;
    const particlesCount = Math.floor(baseCount * density);
    
    // x, y, z for each particle
    const posArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      // Spread randomly from -150 to 150
      posArray[i] = (Math.random() - 0.5) * 300;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.15,
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // 3. Animation Loop
    let animationFrameId;

    const animate = () => {
      // Subtle movement/rotation
      particlesMesh.rotation.y += 0.0005;
      particlesMesh.rotation.x += 0.0002;
      
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();

    // 4. Handle Window Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);

    // 5. Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      
      if (currentMount && renderer.domElement) {
        try {
          currentMount.removeChild(renderer.domElement);
        } catch (e) {
          // Ignore if already removed
        }
      }
      
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed -top-[5%] left-0 w-full h-[110%] -z-10 pointer-events-none star-background-mount"
    />
  );
}
