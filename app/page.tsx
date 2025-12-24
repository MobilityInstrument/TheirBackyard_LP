'use client';

import Hero from './components/Hero';
import About from './components/About';
import Feature from './components/Feature';
import UseCase from './components/UseCase';
import Function from './components/Function';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Feature />
      <UseCase />
      <Function />
      <Contact />
      <Footer />
    </div>
  );
}
