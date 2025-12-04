import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <section className="py-20 relative container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Education Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative p-8 border border-neonBlue/30 bg-black/40 backdrop-blur-sm overflow-hidden"
                >
                    {/* Blueprint Grid Background */}
                    <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                        style={{ backgroundImage: 'linear-gradient(#00eaff 1px, transparent 1px), linear-gradient(90deg, #00eaff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-3xl font-orbitron text-neonBlue mb-8 text-glow-blue flex items-center gap-3">
                            <span className="text-4xl">🎓</span> EDUCATION
                        </h2>
                        <div className="p-6 border-l-4 border-neonBlue bg-neonBlue/5 relative group hover:bg-neonBlue/10 transition-colors duration-300">
                            <div className="absolute -left-1 top-0 w-1 h-0 bg-white group-hover:h-full transition-all duration-500"></div>
                            <h3 className="text-2xl font-bold text-white font-orbitron">BCA</h3>
                            <p className="text-xl text-neonBlue font-rajdhani mt-2">Tilak Vidyapeth University</p>
                            <p className="text-gray-400 font-rajdhani mt-1">2nd Year</p>
                        </div>
                    </div>

                    {/* Circuit Decorations */}
                    <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-neonBlue rounded-tr-xl opacity-60"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-neonBlue rounded-bl-xl opacity-60"></div>
                </motion.div>

                {/* Current Learning Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative p-8 border border-neonPurple/30 bg-black/40 backdrop-blur-sm"
                >
                    <h2 className="text-3xl font-orbitron text-neonPurple mb-8 text-glow-purple flex items-center gap-3">
                        <span className="text-4xl">⚡</span> CURRENT LEARNING
                    </h2>
                    <ul className="space-y-4">
                        {[
                            'Strengthening programming fundamentals',
                            'Building hands-on projects',
                            'Learning full-stack development concepts',
                            'Exploring databases and backend logic',
                            'Practicing clean UI layout structure'
                        ].map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-3 text-lg font-rajdhani text-gray-200 group"
                            >
                                <span className="w-2 h-2 bg-neonPurple rounded-full shadow-neon-purple group-hover:scale-150 transition-transform duration-300"></span>
                                <span className="group-hover:text-neonPurple transition-colors duration-300">{item}</span>
                            </motion.li>
                        ))}
                    </ul>

                    {/* Divider lines */}
                    <div className="absolute bottom-8 right-8 w-32 h-1 bg-gradient-to-r from-neonPurple to-transparent opacity-50"></div>
                </motion.div>

            </div>
        </section>
    );
};

export default Education;
