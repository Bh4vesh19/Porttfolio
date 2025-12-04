import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-orbitron text-neonPurple mb-16 text-center tracking-widest text-glow-purple">PROJECTS</h2>

                <div className="flex justify-center items-center relative">
                    {/* Tron arrows (decorative since 1 item) */}
                    <div className="hidden md:block absolute left-4 md:left-20 text-6xl text-neonPurple opacity-30 font-orbitron cursor-pointer hover:text-neonPurple hover:opacity-100 transition-all">❮</div>
                    <div className="hidden md:block absolute right-4 md:right-20 text-6xl text-neonPurple opacity-30 font-orbitron cursor-pointer hover:text-neonPurple hover:opacity-100 transition-all">❯</div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.02, rotateX: 2, rotateY: 2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative w-full max-w-3xl bg-black/80 border border-neonPurple p-10 rounded-sm shadow-[0_0_30px_rgba(180,0,255,0.2)] group"
                    >
                        {/* Neon Grid Overlay */}
                        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(180, 0, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(180, 0, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-1">
                                <h3 className="text-3xl font-orbitron text-white mb-4 group-hover:text-neonPurple transition-colors text-shadow-sm">Portfolio Website</h3>
                                <p className="text-xl text-gray-300 font-rajdhani mb-6 leading-relaxed">
                                    Built using HTML, CSS, and JS to showcase my work. A fully responsive personal portfolio featuring neon aesthetics and interactive elements.
                                </p>

                                <div className="flex gap-4 flex-wrap">
                                    <span className="px-4 py-1 border border-neonBlue text-neonBlue text-sm font-orbitron tracking-wider bg-neonBlue/5">HTML</span>
                                    <span className="px-4 py-1 border border-neonBlue text-neonBlue text-sm font-orbitron tracking-wider bg-neonBlue/5">CSS</span>
                                    <span className="px-4 py-1 border border-neonBlue text-neonBlue text-sm font-orbitron tracking-wider bg-neonBlue/5">JS</span>
                                </div>
                            </div>

                            {/* Decorative Hologram Element */}
                            <div className="w-32 h-32 border-2 border-neonPurple rounded-full flex items-center justify-center animate-pulse shadow-[0_0_20px_rgba(180,0,255,0.5)]">
                                <div className="w-24 h-24 border border-neonBlue rounded-full flex items-center justify-center animate-spin-slow">
                                    <div className="w-16 h-16 border border-white rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Glow effect */}
                        <div className="absolute -inset-0.5 bg-neonPurple opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300 -z-10"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
