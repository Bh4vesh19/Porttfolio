import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-4 flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative max-w-3xl w-full bg-black/40 backdrop-blur-sm border border-neonPurple/50 p-8 md:p-12 rounded-sm"
                >
                    {/* Pulsating border effect */}
                    <div className="absolute inset-0 border border-neonPurple opacity-50 animate-pulse rounded-sm"></div>

                    {/* Holographic corners */}
                    <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-neonBlue"></div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-neonBlue"></div>
                    <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-neonBlue"></div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-neonBlue"></div>

                    <h2 className="text-4xl font-orbitron text-neonPurple mb-8 text-center tracking-widest text-glow-purple">ABOUT ME</h2>
                    <p className="text-lg md:text-xl text-gray-200 font-rajdhani leading-relaxed text-center">
                        I am Bhavesh Suthar, a passionate programming learner focused on building strong fundamentals.
                        I enjoy exploring <span className="text-neonBlue font-semibold">Python</span>, <span className="text-neonBlue font-semibold">C</span>, <span className="text-neonBlue font-semibold">Java</span>,
                        and creating small projects that help me grow as a developer. My long-term goal is to become a full-stack developer
                        and work on impactful real-world applications.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
