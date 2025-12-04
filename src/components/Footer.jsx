import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full py-8 bg-black border-t border-neonBlue/20 relative z-10">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
                <p className="text-neonBlue font-rajdhani text-lg tracking-widest flex items-center gap-2">
                    <span className="text-xl">©</span>
                    {new Date().getFullYear()} BHAVESH SUTHAR. ALL RIGHTS RESERVED.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-neonPurple to-transparent mt-4 opacity-50"></div>
            </div>
        </footer>
    );
};

export default Footer;
