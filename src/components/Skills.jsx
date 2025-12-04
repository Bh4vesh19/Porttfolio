import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Text, Float, Torus } from '@react-three/drei';

const SkillRing = ({ position, color, label, speed, rotation }) => {
    return (
        <group position={position} rotation={rotation}>
            <Float speed={speed} rotationIntensity={2} floatIntensity={1}>
                <Torus args={[1.8, 0.02, 16, 100]}>
                    <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1} wireframe />
                </Torus>
                <Torus args={[1.6, 0.05, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
                    <meshStandardMaterial color={color} transparent opacity={0.3} />
                </Torus>
                <Text
                    position={[0, 0, 0]}
                    fontSize={0.6}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                    font="https://fonts.gstatic.com/s/orbitron/v25/yMJRMI86Z20JvTV1EqKg.woff"
                >
                    {label}
                </Text>
            </Float>
        </group>
    );
};

const SkillsScene = () => {
    return (
        <Canvas className="absolute inset-0 pointer-events-none">
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <SkillRing position={[-5, 2, -5]} color="#00eaff" label="PYTHON" speed={2} rotation={[0, 0.5, 0]} />
            <SkillRing position={[5, -2, -5]} color="#b400ff" label="JAVA" speed={3} rotation={[0, -0.5, 0]} />
            <SkillRing position={[0, 3, -8]} color="#03f4f4" label="C" speed={2.5} rotation={[0.2, 0, 0]} />
        </Canvas>
    );
};

const Skills = () => {
    const skills = [
        'Python', 'C', 'Java', 'HTML', 'CSS', 'JavaScript', 'Git', 'Problem-solving', 'Continuous learning'
    ];

    return (
        <section id="skills" className="py-24 relative min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
                <SkillsScene />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-4xl md:text-5xl font-orbitron text-white mb-16 text-center tracking-widest text-glow-blue">
                    SKILLS & EXPERTISE
                </h2>

                <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.1, boxShadow: "0 0 25px #00eaff", borderColor: "#00eaff" }}
                            className="px-8 py-4 bg-black/60 border border-neonBlue/30 rounded-sm backdrop-blur-md cursor-pointer group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-neonBlue/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            <span className="relative z-10 text-xl font-rajdhani text-neonBlue group-hover:text-white transition-colors duration-300 font-bold tracking-wide">
                                {skill}
                            </span>

                            {/* Corner accents */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neonBlue opacity-50"></div>
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neonBlue opacity-50"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
