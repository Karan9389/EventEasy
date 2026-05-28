import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAppContext } from '../context/AppContext';
import { formatCurrency } from '../lib/data';
import { Trash2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cart, removeFromCart } = useAppContext();

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.08; // 8% fake tax
  const total = subtotal + tax;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto w-full">
        <h1 className="font-display-md text-display-md text-on-surface mb-xl">Your Booking Cart</h1>
        
        {cart.length === 0 ? (
           <div className="flex flex-col items-center justify-center py-24 text-center bg-surface-container-lowest rounded-3xl border border-outline-hairline">
            <div className="w-24 h-24 bg-surface-variant flex items-center justify-center rounded-full mb-md">
              <ShoppingBag size={48} className="text-on-surface-variant" strokeWidth={1} />
            </div>
             <h2 className="font-headline-md text-headline-md text-on-surface mb-xs">Your cart is empty</h2>
             <p className="font-body-base text-body-base text-text-muted mb-lg">Looks like you haven't added any vendors to your event yet.</p>
             <Link to="/" className="font-body-bold text-on-primary bg-primary rounded-full px-8 py-3 hover:bg-primary-hover transition-colors">Find Vendors</Link>
           </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
            <div className="lg:col-span-2 space-y-md">
              {cart.map(item => (
                <div key={item.id} className="flex gap-md bg-surface-container-lowest p-md rounded-2xl border border-outline-hairline relative">
                   <button 
                      onClick={() => removeFromCart(item.id)}
                      className="absolute top-4 right-4 p-2 text-on-surface-variant hover:text-error transition-colors hover:bg-error/10 rounded-full"
                      aria-label="Remove item"
                    >
                      <Trash2 size={20} />
                    </button>
                  <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-xl" />
                  <div className="flex flex-col justify-center">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">{item.name}</h3>
                    <p className="font-body-base text-body-base text-text-muted capitalize">{item.category}</p>
                    <div className="mt-md font-body-bold text-lg text-primary">{formatCurrency(item.price)}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-surface-container border border-outline-variant p-xl rounded-3xl h-fit sticky top-24">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-lg">Order Summary</h2>
              
              <div className="space-y-sm mb-lg">
                <div className="flex justify-between font-body-base text-body-base text-on-surface">
                  <span>Subtotal ({cart.length} items)</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between font-body-base text-body-base text-on-surface">
                  <span>Estimated Tax</span>
                  <span>{formatCurrency(tax)}</span>
                </div>
              </div>
              
              <div className="border-t border-outline-variant pt-lg mb-xl flex justify-between items-center font-headline-sm text-headline-sm text-on-surface">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
              
              <button className="w-full bg-primary text-on-primary font-body-bold py-4 rounded-full hover:bg-primary-hover transition-colors text-lg shadow-sm">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
