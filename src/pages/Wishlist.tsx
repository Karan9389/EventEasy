import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VendorCard from '../components/VendorCard';
import { useAppContext } from '../context/AppContext';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Wishlist() {
  const { wishlist } = useAppContext();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto w-full">
        <h1 className="font-display-lg text-display-md-mobile md:text-display-md text-on-surface mb-sm flex items-center gap-sm">
          <Heart size={40} className="text-primary fill-primary/20" /> My Wishlist
        </h1>
        
        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-24 h-24 bg-surface-container-low rounded-full flex items-center justify-center mb-md">
              <Heart size={48} className="text-outline border-outline" strokeWidth={1} />
            </div>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-xs">Your wishlist is empty</h2>
            <p className="font-body-base text-body-base text-text-muted mb-lg">Save your favorite vendors here to find them quickly later.</p>
            <Link to="/" className="font-body-bold text-on-primary bg-primary rounded-full px-8 py-3 hover:bg-primary-hover transition-colors">Start Browsing</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg mt-xl">
             {wishlist.map(vendor => (
              <VendorCard key={vendor.id} vendor={vendor} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
