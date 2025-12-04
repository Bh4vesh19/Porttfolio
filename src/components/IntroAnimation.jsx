import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, Torus } from '@react-three/drei';
import { motion } from 'framer-motion';

const HologramObject = () => {
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.5;
            meshRef.current.rotation.y += delta * 0.5;
        }
    });

    return (
        <Float speed={5} rotationIntensity={2} floatIntensity={2}>
            <group>
                {/* Core Object */}
                <Icosahedron args={[1, 1]} ref={meshRef}>
                    <meshStandardMaterial color="#00eaff" wireframe />
                </Icosahedron>

                {/* Outer Ring */}
                <Torus args={[1.6, 0.1, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
                    <meshStandardMaterial color="#b400ff" wireframe transparent opacity={0.5} />
                </Torus>
            </group>
        </Float>
    );
};

const IntroAnimation = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 2000);

        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 2.5;
            });
        }, 50);

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
            <div className="w-full h-full absolute top-0 left-0">
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <color attach="background" args={['#000000']} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <HologramObject />
                </Canvas>
            </div>

            {/* Loading Bar & Text */}
            <div className="absolute bottom-20 w-64 h-1 bg-gray-800 rounded-full overflow-hidden border border-neonBlue/30">
                <motion.div
                    className="h-full bg-neonBlue shadow-[0_0_10px_#00eaff]"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, ease: "linear" }}
                />
            </div>

            <div className="absolute bottom-10 text-neonBlue font-orbitron text-xl animate-pulse tracking-widest">
                INITIALIZING SYSTEM... {Math.floor(progress)}%
            </div>
        </motion.div>
    );
};

export default IntroAnimation;
