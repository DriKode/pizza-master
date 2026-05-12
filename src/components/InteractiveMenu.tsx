'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Plus, Flame } from 'lucide-react';

const pizzas = [
  {
    id: 1,
    name: 'Diavola Inferno',
    price: '$24',
    description: 'Salami picante, Nduja, miel infusionada con chile.',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80',
    tags: ['Picante', 'Popular'],
  },
  {
    id: 2,
    name: 'Truffle Regale',
    price: '$32',
    description: 'Carpaccio de trufa negra, porcini, fior di latte.',
    image: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&q=80',
    tags: ['Lujo'],
  },
  {
    id: 3,
    name: 'The Masterpiece',
    price: '$28',
    description: 'Mortadela, pesto de pistacho, corazón de burrata.',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80',
    tags: ['Artesanal'],
  },
  {
    id: 4,
    name: 'Forest Umami',
    price: '$26',
    description: 'Hongos silvestres, gorgonzola, nueces.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80',
    tags: ['Vegetariano'],
  },
];

const InteractiveMenu = () => {
  return (
    <section id="menu" className="py-24 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-[#FF4500] uppercase tracking-[0.3em] text-sm font-bold mb-4">Menú Curado</h2>
            <h3 className="text-4xl md:text-6xl font-playfair font-bold text-[#FAF9F6]">LA COLECCIÓN DE TEMPORADA</h3>
          </div>
          <p className="text-[#FAF9F6]/60 max-w-sm font-light text-right">
            Descubre nuestra rotación de obras maestras de edición limitada, cada una definida por los ingredientes más frescos de la temporada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pizzas.map((pizza) => (
            <motion.div
              key={pizza.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: pizza.id * 0.1 }}
              className="group relative flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] mb-6">
                <Image
                  src={pizza.image}
                  alt={pizza.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                
                {/* Quick Add Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute bottom-6 right-6 w-14 h-14 bg-[#FF4500] text-[#FAF9F6] rounded-full flex items-center justify-center shadow-2xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-10"
                >
                  <Plus size={24} />
                </motion.button>

                {/* Tags */}
                <div className="absolute top-6 left-6 flex gap-2">
                  {pizza.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-black/50 backdrop-blur-md text-[10px] uppercase tracking-widest text-[#FAF9F6] border border-white/10 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-start mb-2">
                <h4 className="text-2xl font-playfair font-bold text-[#FAF9F6]">{pizza.name}</h4>
                <span className="text-[#FF4500] font-bold font-inter">{pizza.price}</span>
              </div>
              <p className="text-[#FAF9F6]/50 text-sm font-light leading-relaxed">
                {pizza.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 flex justify-center">
          <button className="flex items-center gap-4 text-[#FAF9F6]/40 hover:text-[#FF4500] transition-colors group">
            <span className="uppercase tracking-[0.4em] text-xs font-bold">Explorar Menú Completo</span>
            <div className="w-12 h-[1px] bg-[#FAF9F6]/20 group-hover:bg-[#FF4500] transition-all group-hover:w-20"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMenu;
