'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  const container = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const button = buttonRef.current;
    const text = textRef.current;

    if (!button || !text) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!button) return;
      const { left, top, width, height } = button.getBoundingClientRect();
      const x = e.clientX - (left + width / 2);
      const y = e.clientY - (top + height / 2);

      gsap.to(button, {
        x: x * 0.4,
        y: y * 0.4,
        duration: 0.5,
        ease: 'power2.out',
      });

      gsap.to(text, {
        x: x * 0.2,
        y: y * 0.2,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to([button, text], {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, { scope: container });

  return (
    <section 
      id="contact"
      ref={container}
      className="py-32 bg-[#FF4500] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-8xl font-playfair font-bold text-[#0A0A0A] mb-12 leading-tight">
          ¿LISTO PARA PROBAR <br /> LO EXTRAORDINARIO?
        </h2>
        
        <div className="flex justify-center items-center py-10">
          <button
            ref={buttonRef}
            className="group relative w-48 h-48 md:w-64 md:h-64 bg-[#0A0A0A] rounded-full flex items-center justify-center transition-shadow hover:shadow-[0_0_50px_rgba(0,0,0,0.3)]"
          >
            <div 
              ref={textRef}
              className="flex flex-col items-center text-[#FAF9F6] z-10"
            >
              <span className="text-xs font-bold uppercase tracking-[0.4em] mb-4">Reserva tu Mesa</span>
              <ArrowRight size={32} className="group-hover:translate-x-3 transition-transform duration-500" />
            </div>
            {/* Magnetic ring effect */}
            <div className="absolute inset-[-10px] border border-[#0A0A0A]/20 rounded-full group-hover:scale-110 transition-transform duration-700"></div>
          </button>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#0A0A0A]/10 pt-20">
          <div className="text-left">
            <h4 className="text-[#0A0A0A] font-bold uppercase tracking-widest text-xs mb-4">Ubicación</h4>
            <p className="text-[#0A0A0A]/70 font-playfair text-xl">
              Calle Gastronomía 123,<br />Nueva York, NY 10001
            </p>
          </div>
          <div className="text-left">
            <h4 className="text-[#0A0A0A] font-bold uppercase tracking-widest text-xs mb-4">Reservas</h4>
            <p className="text-[#0A0A0A]/70 font-playfair text-xl">
              +1 (555) MASTER-PIZZA<br />ciao@pizzamaster.com
            </p>
          </div>
          <div className="text-left">
            <h4 className="text-[#0A0A0A] font-bold uppercase tracking-widest text-xs mb-4">Horarios</h4>
            <p className="text-[#0A0A0A]/70 font-playfair text-xl">
              Lun-Dom: 12:00 — 23:00<br />Noches largas Vie y Sáb
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
