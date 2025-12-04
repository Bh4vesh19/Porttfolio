import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import IntroAnimation from './components/IntroAnimation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';

import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative w-full min-h-screen bg-bgBlack text-white overflow-hidden">
      <AnimatePresence mode='wait'>
        {loading ? (
          <IntroAnimation key="intro" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <Background />
            <main className="container mx-auto px-4 py-8 relative z-20">
              <Hero />
              <About />
              <Education />
              <Skills />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
