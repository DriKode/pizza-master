'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';

const Hero = () => {
  const container = useRef(null);
  const headlineRef = useRef(null);

  useGSAP(() => {
    const chars = headlineRef.current.innerText.split('');
    headlineRef.current.innerHTML = chars
      .map((char: string) => `<span class="inline-block char">${char === ' ' ? '&nbsp;' : char}</span>`)
      .join('');

    const tl = gsap.timeline();

    tl.from('.char', {
      opacity: 0,
      y: 100,
      rotateX: -90,
      stagger: 0.05,
      duration: 1,
      ease: 'expo.out',
    })
    .from('.hero-sub', {
      opacity: 0,
      y: 20,
      duration: 0.8,
    }, '-=0.5')
    .from('.hero-image', {
      opacity: 0,
      scale: 0.8,
      rotate: -10,
      duration: 1.5,
      ease: 'elastic.out(1, 0.5)',
    }, '-=1');

    // Subtle floating animation for the pizza
    gsap.to('.hero-image', {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    gsap.to('.hero-image', {
      rotate: 360,
      duration: 20,
      repeat: -1,
      ease: 'none',
    });
  }, { scope: container });

  return (
    <section 
      ref={container}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <div className="z-10 text-center lg:text-left">
          <h1 
            ref={headlineRef}
            className="text-6xl md:text-8xl font-playfair font-bold tracking-tighter leading-[0.9] text-[#FAF9F6] mb-8"
          >
            EL ARTE DE LA MASA
          </h1>
          <p className="hero-sub text-xl md:text-2xl text-[#FAF9F6]/60 max-w-xl mx-auto lg:mx-0 mb-10 font-light">
            Creada con pasión, horneada con precisión. Vive la cumbre de la gastronomía artesanal en cada rebanada.
          </p>
          <div className="hero-sub flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-4 bg-[#FF4500] text-[#FAF9F6] font-bold uppercase tracking-widest text-sm hover:bg-[#e03e00] transition-all transform hover:scale-105 active:scale-95">
              Ordena la Perfección
            </button>
            <button className="px-8 py-4 border border-[#FAF9F6]/20 text-[#FAF9F6] font-bold uppercase tracking-widest text-sm hover:bg-[#FAF9F6]/5 transition-all">
              Nuestra Filosofía
            </button>
          </div>
        </div>

        {/* Right: Floating Pizza */}
        <div className="relative flex justify-center items-center">
          <div className="hero-image relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
            <div className="absolute inset-0 bg-[#FF4500]/20 blur-[100px] rounded-full"></div>
            <Image
              src="/hero_pizza.png"
              alt="Gourmet Pizza"
              fill
              priority
              sizes="(max-width: 768px) 300px, 500px"
              className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-[#FF4500]/5 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#FF4500]/10 blur-[120px] rounded-full"></div>
    </section>
  );
};

export default Hero;
