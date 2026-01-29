'use client';

import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Highlight from './components/Highlight';
import About from './components/About';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Highlight />
      <About />
      <Journey />
      <Contact />
      <Footer />
    </main>
  );
}