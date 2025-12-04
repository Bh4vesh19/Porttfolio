import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Octahedron } from '@react-three/drei';

const Hero3D = () => {
    return (
        <Canvas className="absolute inset-0 z-0">
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Float speed={4} rotationIntensity={1} floatIntensity={2}>
                <Torus position={[4, 2, 0]} args={[1, 0.05, 16, 100]}>
                    <meshStandardMaterial color="#00eaff" wireframe />
                </Torus>
            </Float>
            <Float speed={2} rotationIntensity={2} floatIntensity={1}>
                <Octahedron position={[-4, -2, 0]} args={[1.5]}>
                    <meshStandardMaterial color="#b400ff" wireframe />
                </Octahedron>
            </Float>
        </Canvas>
    );
};

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center py-20 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                <Hero3D />
            </div>

            {/* HUD Brackets */}
            <div className="absolute top-1/4 left-4 md:left-20 text-6xl text-neonBlue opacity-50 font-orbitron hidden md:block">❮</div>
            <div className="absolute top-1/4 right-4 md:right-20 text-6xl text-neonBlue opacity-50 font-orbitron hidden md:block">❯</div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="z-10 max-w-4xl px-4 relative"
            >
                <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-neonBlue opacity-70"></div>
                <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-2 border-r-2 border-neonBlue opacity-70"></div>

                <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold text-white mb-6 tracking-wider text-glow-blue font-orbitron">
                    BHAVESH SUTHAR
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-10 font-rajdhani leading-relaxed">
                    Programming basics learner with interests in <span className="text-neonBlue font-bold">Python</span>, <span className="text-neonBlue font-bold">C</span>, and <span className="text-neonBlue font-bold">Java</span>.<br />
                    Exploring mini-projects and looking forward to internships, MCA, or certifications to boost career readiness.
                </p>

                <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                    <a
                        href="/resume.bhavesh.pdf"
                        download
                        className="relative px-8 py-3 bg-transparent border border-neonBlue text-neonBlue font-orbitron font-bold tracking-widest hover:bg-neonBlue hover:text-black transition-all duration-300 shadow-neon-blue group overflow-hidden"
                    >
                        <span className="relative z-10">DOWNLOAD RESUME</span>
                        <div className="absolute inset-0 bg-neonBlue opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </a>
                    <button
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        className="relative px-8 py-3 bg-transparent border border-neonPurple text-neonPurple font-orbitron font-bold tracking-widest hover:bg-neonPurple hover:text-black transition-all duration-300 shadow-neon-purple group overflow-hidden"
                    >
                        <span className="relative z-10">CONTACT ME</span>
                        <div className="absolute inset-0 bg-neonPurple opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
