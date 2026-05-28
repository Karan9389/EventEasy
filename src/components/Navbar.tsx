import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User, Heart, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { useAppContext } from '../context/AppContext';

export default function Navbar() {
  const location = useLocation();
  const { cart, user, wishlist } = useAppContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  // Function to close mobile menu
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md w-full sticky top-0 z-[100] shadow-sm flex border-b border-gray-200 justify-between items-center h-[72px] px-4 md:px-8 lg:px-12">
      <Link to="/" onClick={closeMenu} className="font-display-lg text-2xl md:text-display-lg text-red-600 font-bold tracking-tighter hover:scale-105 transition-transform duration-200 z-[110]">
        EasyEvent
      </Link>

      <div className="hidden md:flex items-center gap-8 h-full">
        {['Home', 'Photographers', 'Catering', 'Music', 'Makeup'].map((item) => {
          const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
          return (
            <Link
              key={item}
              to={path}
              className={cn(
                "font-label-caps text-xs font-bold uppercase tracking-wider h-full flex items-center transition-colors hover:scale-105 duration-200",
                isActive(path) 
                  ? "text-red-600 border-b-2 border-red-600" 
                  : "text-gray-600 hover:text-red-600"
              )}
            >
              {item}
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-2 sm:gap-4 z-[110]">
        <Link to="/wishlist" onClick={closeMenu} className="hidden lg:flex items-center gap-1 font-label-caps text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-red-600 transition-colors relative">
          Wishlist
          {wishlist.length > 0 && <span className="absolute -top-2 -right-4 w-4 h-4 bg-red-600 text-white rounded-full text-[10px] font-bold flex items-center justify-center">{wishlist.length}</span>}
        </Link>
        {!user ? (
          <Link to="/login" onClick={closeMenu} className="hidden lg:block font-label-caps text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-red-600 transition-colors">
            Login
          </Link>
        ) : (
          <Link to="/profile" onClick={closeMenu} aria-label="person" className="p-2 text-gray-900 hover:text-red-600 transition-colors hover:scale-105 duration-200 flex items-center gap-2">
            <span className="hidden md:inline font-label-caps text-xs font-bold uppercase tracking-wider">{user.name}</span>
            <User size={20} strokeWidth={1.5} />
          </Link>
        )}
        <Link to="/cart" onClick={closeMenu} aria-label="shopping_bag" className="p-2 text-gray-900 hover:text-red-600 transition-colors hover:scale-105 duration-200 relative">
          <ShoppingBag size={20} strokeWidth={1.5} />
          {cart.length > 0 && (
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-600 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </Link>
        <button 
          aria-label="menu" 
          onClick={(e) => {
            e.stopPropagation();
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
          className="md:hidden p-2 text-gray-900 hover:text-red-600 transition-colors cursor-pointer relative z-[120]"
        >
          {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[72px] left-0 w-full bg-white border-b border-gray-200 shadow-xl flex flex-col items-center py-8 gap-6 md:hidden z-[90]">
           {['Home', 'Photographers', 'Catering', 'Music', 'Makeup'].map((item) => {
            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            return (
              <Link
                key={item}
                to={path}
                onClick={closeMenu}
                className={cn(
                  "font-label-caps text-lg uppercase tracking-widest transition-colors font-bold",
                  isActive(path) 
                    ? "text-red-600" 
                    : "text-gray-600 hover:text-red-600"
                )}
              >
                {item}
              </Link>
            );
          })}
          <div className="w-[80%] h-px bg-gray-200 my-4" />
          <Link to="/wishlist" onClick={closeMenu} className="font-label-caps font-bold text-lg text-gray-600 hover:text-red-600 transition-colors flex items-center gap-2">
            <Heart size={20} /> Wishlist ({wishlist.length})
          </Link>
          {!user ? (
            <Link to="/login" onClick={closeMenu} className="font-label-caps font-bold text-lg text-gray-600 hover:text-red-600 transition-colors">
              Login
            </Link>
          ) : (
            <Link to="/profile" onClick={closeMenu} className="font-label-caps font-bold text-lg text-gray-600 hover:text-red-600 transition-colors flex items-center gap-2">
              <User size={20} /> My Profile
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
