'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const BentoGrid = () => {
  const container = useRef(null);

  const secrets = [
    {
      title: 'Herencia San Marzano',
      description: 'Cosechados a mano en las laderas volcánicas del Monte Vesubio, nuestros tomates ofrecen el equilibrio ácido perfecto.',
      image: '/secrets_tomato.png',
      size: 'col-span-1 md:col-span-2 row-span-2',
    },
    {
      title: 'Masa de 48 Horas',
      description: 'Fermentada lentamente para una digestibilidad superior y una corteza ligera que cruje al primer contacto.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80',
      size: 'col-span-1 md:col-span-2 row-span-1',
    },
    {
      title: 'Bufala Campana',
      description: 'Mozzarella cremosa y blanca como la porcelana, traída fresca desde la región de Campania.',
      image: 'https://images.pexels.com/photos/28841111/pexels-photo-28841111.jpeg?auto=compress&cs=tinysrgb&w=800',
      size: 'col-span-1 row-span-1',
    },
    {
      title: 'Roble e Hicoria',
      description: 'El ahumado distintivo de nuestro horno de leña crea un perfil de sabor inconfundible.',
      image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&q=80',
      size: 'col-span-1 row-span-1',
    },
  ];

  useGSAP(() => {
    gsap.from('.bento-card', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
    });

    // Tilt effect logic
    const cards = document.querySelectorAll('.bento-card');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (mouseEvent.clientX - left) / width - 0.5;
        const y = (mouseEvent.clientY - top) / height - 0.5;
        
        gsap.to(card, {
          rotateY: x * 10,
          rotateX: -y * 10,
          transformPerspective: 1000,
          duration: 0.5,
          ease: 'power2.out',
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          rotateY: 0,
          rotateX: 0,
          duration: 0.5,
          ease: 'power2.out',
        });
      });
    });
  }, { scope: container });

  return (
    <section 
      id="secrets"
      ref={container}
      className="py-24 bg-[#0A0A0A] px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#FF4500] uppercase tracking-[0.3em] text-sm font-bold mb-4">Nuestros Secretos</h2>
          <h3 className="text-4xl md:text-6xl font-playfair font-bold text-[#FAF9F6]">LA ALQUIMIA DEL SABOR</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-[800px]">
          {secrets.map((secret, index) => (
            <div
              key={index}
              className={`bento-card group relative overflow-hidden rounded-3xl bg-[#1A1A1A] border border-white/5 ${secret.size}`}
            >
              <Image
                src={secret.image}
                alt={secret.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h4 className="text-2xl font-playfair font-bold text-[#FAF9F6] mb-2">{secret.title}</h4>
                <p className="text-[#FAF9F6]/60 text-sm leading-relaxed max-w-sm">
                  {secret.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
