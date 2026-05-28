import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VendorCard from '../components/VendorCard';
import { mockVendors } from '../lib/data';

export default function Music() {
  const musicians = mockVendors.filter(v => v.category === 'music');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto w-full">
        <h1 className="font-display-lg text-display-md-mobile md:text-display-md text-on-surface mb-sm">Live Music & DJs</h1>
        <p className="font-body-base text-body-base text-text-muted mb-xl max-w-3xl">Set the perfect mood and keep the dance floor alive. Explore our roster of talented bands, solo artists, and premier DJs to soundtrack your celebration.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {musicians.map(vendor => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
