import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VendorCard from '../components/VendorCard';
import { mockVendors } from '../lib/data';

export default function Makeup() {
  const makeupArtists = mockVendors.filter(v => v.category === 'makeup');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto w-full">
        <h1 className="font-display-lg text-display-md-mobile md:text-display-md text-on-surface mb-sm">Professional Makeup Artists</h1>
        <p className="font-body-base text-body-base text-text-muted mb-xl max-w-3xl">Look and feel your absolute best. Book experienced makeup artists and hair stylists specializing in bridal, editorial, and special occasion glamour.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {makeupArtists.map(vendor => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
