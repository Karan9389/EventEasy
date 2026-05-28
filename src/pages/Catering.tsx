import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VendorCard from '../components/VendorCard';
import { mockVendors } from '../lib/data';

export default function Catering() {
  const caterers = mockVendors.filter(v => v.category === 'catering');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto w-full">
        <h1 className="font-display-lg text-display-md-mobile md:text-display-md text-on-surface mb-sm">Gourmet Catering</h1>
        <p className="font-body-base text-body-base text-text-muted mb-xl max-w-3xl">Delight your guests with exquisite culinary experiences. From elegant plated dinners to vibrant buffet stations, find the perfect taste for your event.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {caterers.map(vendor => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
