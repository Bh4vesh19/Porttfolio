import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

const MovingGraphShader = () => {
    const materialRef = useRef();

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uColor1: { value: new THREE.Color('#00eaff') }, // Cyan
            uColor2: { value: new THREE.Color('#b400ff') }, // Purple
        }),
        []
    );

    useFrame((state) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
        }
    });

    const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

    const fragmentShader = `
    uniform float uTime;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    varying vec2 vUv;

    void main() {
      // Scale UVs for grid density
      vec2 uv = vUv * 10.0;
      
      // Create diagonal movement
      float move = uTime * 0.5;
      
      // Diagonal coordinate system (x + y)
      float diagonal = uv.x + uv.y;
      
      // Primary Lines (Cyan) - Moving
      float line1 = smoothstep(0.0, 0.05, abs(fract((diagonal - move) * 0.5) - 0.5));
      line1 = 1.0 - line1; // Invert to get line
      line1 = pow(line1, 20.0); // Sharpen
      
      // Secondary Lines (Purple) - Offset and Moving
      float line2 = smoothstep(0.0, 0.05, abs(fract((diagonal - move + 0.5) * 0.5) - 0.5));
      line2 = 1.0 - line2;
      line2 = pow(line2, 20.0);

      // Horizontal faint grid lines (Static-ish)
      float gridY = smoothstep(0.0, 0.02, abs(fract(uv.y * 2.0) - 0.5));
      gridY = 1.0 - gridY;
      gridY = pow(gridY, 50.0) * 0.2; // Faint

      // Combine colors
      vec3 finalColor = uColor1 * line1 + uColor2 * line2 + vec3(1.0) * gridY;
      
      // Alpha mask to fade out at edges if needed, or keep full screen
      float alpha = (line1 + line2 + gridY);
      
      // Add a dark background tint
      gl_FragColor = vec4(finalColor, alpha * 0.8); 
    }
  `;

    return (
        <mesh rotation={[-Math.PI / 6, 0, 0]} position={[0, 0, -10]} scale={[2, 2, 1]}>
            <planeGeometry args={[50, 50]} />
            <shaderMaterial
                ref={materialRef}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                transparent={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </mesh>
    );
};

const Background = () => {
    const [starCount, setStarCount] = React.useState(3000);

    React.useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setStarCount(1000); // Mobile
            } else if (width < 1024) {
                setStarCount(2000); // Tablet
            } else {
                setStarCount(3000); // Desktop
            }
        };

        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none bg-black">
            <Canvas camera={{ position: [0, 0, 10], fov: 60 }} dpr={[1, 2]}>
                <color attach="background" args={['#000000']} />

                {/* The Moving Graph Layer */}
                <MovingGraphShader />

                {/* Stars for depth (matching the uploaded image's dots) */}
                <Stars radius={100} depth={50} count={starCount} factor={4} saturation={0} fade speed={1} />

                <ambientLight intensity={0.5} />
            </Canvas>
        </div>
    );
};

export default Background;
