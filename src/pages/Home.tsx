import React from 'react';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';

const categories = [
  { name: 'Photographers', path: '/photographers', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop' },
  { name: 'Catering', path: '/catering', image: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1000&auto=format&fit=crop' },
  { name: 'Music', path: '/music', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop' },
  { name: 'Makeup', path: '/makeup', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000&auto=format&fit=crop' }
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-surface-container-low -z-10">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeuYHUFoEuajuUpyVVeCEqik3ySVAQFysW084lC3QczJ5ZUY97MLdCFx4jY1AoPmraxhKD7QMEv-T4TqUAW5650ilv__LjzoNATNgHXk6XprCJOOTD_02gOSmC64pFm_gaCSDJli2iw3UzP-8HyIrEfWTe9raNt3W5RjSp9-82IzzqI6GObbxzNFo9eknAKRGRR22rox2xorKeBSq7sc6FcxcH4u-3Cvwl1S8_Y_74s9DmcAdHuIlyTZHmRe2RCaCx65SFx1MPoSFQ" 
              alt="Event Celebration Abstract" 
              className="w-full h-full object-cover opacity-60 blur-md scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>
          
          <div className="text-center px-lg flex flex-col items-center w-full max-w-7xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display-lg text-display-lg-mobile md:text-[6rem] leading-[1.1] md:leading-[1.1] tracking-tighter text-on-surface mb-md max-w-4xl"
            >
              Curate Your Perfect <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Celebration.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-body-base text-[1.25rem] text-text-muted mb-xl max-w-2xl text-center"
            >
              EasyEvent connects you with elite event professionals. From breathtaking photography to exquisite catering, find everything you need in one place.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-full max-w-3xl bg-surface p-2 rounded-full shadow-lg border border-outline-hairline flex items-center mb-md"
            >
              <div className="flex-grow items-center pl-4 pr-2 border-r border-outline-hairline hidden md:flex">
                <Search size={20} className="text-text-muted mr-2 flex-shrink-0" />
                <input 
                  type="text" 
                  placeholder="What are you looking for? (e.g. DJ, Catering)" 
                  className="w-full bg-transparent focus:outline-none text-body-base text-on-surface"
                />
              </div>
              <div className="flex-grow flex items-center pl-4 md:pl-4 pr-2">
                <MapPin size={20} className="text-text-muted mr-2 flex-shrink-0" />
                <input 
                  type="text" 
                  placeholder="Location (e.g. New York)" 
                  className="w-full bg-transparent focus:outline-none text-body-base text-on-surface"
                />
              </div>
              <button className="bg-primary text-on-primary px-6 py-3 rounded-full text-body-bold hover:bg-primary-hover transition-colors whitespace-nowrap ml-2">
                Search
              </button>
            </motion.div>
          </div>
        </section>

        <section className="py-2xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <h2 className="font-display-md text-display-md text-on-surface mb-xl text-center">Explore Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
            {categories.map((category, index) => (
              <motion.div 
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={category.path} className="group block relative h-80 rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  <img src={category.image} alt={category.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 p-lg">
                    <h3 className="font-headline-md text-headline-sm text-white">{category.name}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
