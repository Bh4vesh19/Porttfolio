import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Github, Twitter, Instagram, Send, CheckCircle, Loader2 } from 'lucide-react';

const SuccessAnimation = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-black/95 z-50 backdrop-blur-xl rounded-lg border border-neonBlue"
        >
            {/* Holographic Burst */}
            <div className="relative">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="absolute inset-0 bg-neonBlue rounded-full blur-xl"
                />
                <CheckCircle size={80} className="text-neonBlue relative z-10 drop-shadow-[0_0_15px_#00eaff]" />
            </div>

            <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-orbitron text-white mt-6 text-glow-blue tracking-widest"
            >
                TRANSMISSION SENT
            </motion.h3>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="font-rajdhani text-neonBlue mt-2 text-lg"
            >
                Message redirected to secure server.
            </motion.p>

            {/* Scanning Line Effect */}
            <motion.div
                initial={{ top: "0%" }}
                animate={{ top: "100%" }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-1 bg-neonBlue/50 blur-sm"
            />
        </motion.div>
    );
};

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Safety timeout: If EmailJS hangs for more than 10 seconds, stop it.
        const safetyTimer = setTimeout(() => {
            setStatus('error');
            alert("Request timed out. Please check your internet connection.");
        }, 10000);

        emailjs.sendForm(
            'service_29q28uh',
            'template_0lt5l8u',
            form.current,
            'VGgjG2FUzcAUpbMyr'
        )
            .then((result) => {
                clearTimeout(safetyTimer);
                setStatus('success');
                e.target.reset();
                setTimeout(() => setStatus('idle'), 2000);
            }, (error) => {
                clearTimeout(safetyTimer);
                console.error("EmailJS Error:", error);
                setStatus('error');
                alert("Failed to send message. Error: " + JSON.stringify(error));
                setTimeout(() => setStatus('idle'), 3000);
            });
    };

    return (
        <section id="contact" className="py-24 relative container mx-auto px-4">
            {/* Autofill Style Fix */}
            <style>{`
                input:-webkit-autofill,
                input:-webkit-autofill:hover, 
                input:-webkit-autofill:focus, 
                textarea:-webkit-autofill,
                textarea:-webkit-autofill:hover,
                textarea:-webkit-autofill:focus {
                    -webkit-text-fill-color: #ffffff;
                    -webkit-box-shadow: 0 0 0px 1000px #000000 inset;
                    transition: background-color 5000s ease-in-out 0s;
                }
            `}</style>

            <h2 className="text-4xl font-orbitron text-neonBlue mb-16 text-center tracking-widest text-glow-blue">
                GET CONNECTED
            </h2>

            <div className="max-w-2xl mx-auto relative">
                {/* Form Container */}
                <div className="relative p-[2px] rounded-lg bg-gradient-to-r from-neonBlue via-transparent to-neonPurple animate-gradient-xy">
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="space-y-8 bg-black p-8 rounded-lg relative overflow-hidden"
                    >
                        {/* Background Grid */}
                        <div className="absolute inset-0 opacity-10"
                            style={{ backgroundImage: 'linear-gradient(#00eaff 1px, transparent 1px), linear-gradient(90deg, #00eaff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                        </div>

                        {/* Name */}
                        <div className="relative group z-10">
                            <input type="text" name="user_name" required
                                className="w-full bg-transparent border-b border-gray-700 focus:border-neonBlue outline-none py-3 text-white font-rajdhani text-xl transition-all peer focus:pl-2"
                                placeholder=" "
                            />
                            <label className="absolute left-0 top-3 text-gray-500 font-rajdhani text-lg transition-all peer-focus:-top-6 peer-focus:text-neonBlue peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-neonBlue peer-[:not(:placeholder-shown)]:text-sm pointer-events-none">
                                Name
                            </label>
                        </div>

                        {/* Email */}
                        <div className="relative group z-10">
                            <input type="email" name="user_email" required
                                className="w-full bg-transparent border-b border-gray-700 focus:border-neonBlue outline-none py-3 text-white font-rajdhani text-xl transition-all peer focus:pl-2"
                                placeholder=" "
                            />
                            <label className="absolute left-0 top-3 text-gray-500 font-rajdhani text-lg transition-all peer-focus:-top-6 peer-focus:text-neonBlue peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-neonBlue peer-[:not(:placeholder-shown)]:text-sm pointer-events-none">
                                Email
                            </label>
                        </div>

                        {/* Message */}
                        <div className="relative group z-10">
                            <textarea name="message" required rows="4"
                                className="w-full bg-transparent border-b border-gray-700 focus:border-neonBlue outline-none py-3 text-white font-rajdhani text-xl transition-all peer focus:pl-2 resize-none"
                                placeholder=" "
                            ></textarea>
                            <label className="absolute left-0 top-3 text-gray-500 font-rajdhani text-lg transition-all peer-focus:-top-6 peer-focus:text-neonBlue peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-neonBlue peer-[:not(:placeholder-shown)]:text-sm pointer-events-none">
                                Message
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="w-full h-14 bg-neonBlue/5 border border-neonBlue/50 text-neonBlue font-orbitron font-bold tracking-widest hover:bg-neonBlue hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,234,255,0.3)] hover:shadow-[0_0_25px_#00eaff] relative overflow-hidden group z-10 flex items-center justify-center"
                        >
                            {status === 'sending' ? (
                                <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/50 backdrop-blur-sm">
                                    <Loader2 className="animate-spin" size={20} />
                                    <span>TRANSMITTING...</span>
                                </div>
                            ) : (
                                <span className="flex items-center gap-3 group-hover:gap-4 transition-all">
                                    SEND MESSAGE <Send size={18} />
                                </span>
                            )}

                            <div className="absolute inset-0 bg-neonBlue opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        </button>
                    </form>

                    {/* Success Overlay */}
                    <AnimatePresence>
                        {status === 'success' && <SuccessAnimation />}
                    </AnimatePresence>
                </div>
            </div>

            {/* Social Icons */}
            <div className="mt-20 flex justify-center gap-12">
                <SocialLink href="https://instagram.com/bh4vesh.19" icon={<Instagram size={32} />} color="text-neonPurple" />
                <SocialLink href="https://twitter.com/bh4vesh_19" icon={<Twitter size={32} />} color="text-neonBlue" />
                <SocialLink href="https://github.com/Bh4vesh19" icon={<Github size={32} />} color="text-white" />
            </div>
        </section>
    );
};

const SocialLink = ({ href, icon, color }) => (
    <a href={href} target="_blank" rel="noopener noreferrer"
        className={`${color} hover:scale-125 hover:drop-shadow-[0_0_15px_currentColor] transition-all duration-300`}
    >
        {icon}
    </a>
);

export default Contact;
