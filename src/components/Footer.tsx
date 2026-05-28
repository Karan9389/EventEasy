import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-background-warm border-t border-outline-hairline w-full relative mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-lg px-margin-mobile md:px-margin-desktop py-xl max-w-7xl mx-auto">
        <div className="flex flex-col gap-sm">
          <Link to="/" className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary tracking-tighter">
            EasyEvent
          </Link>
          <p className="font-body-base text-body-base text-text-muted">
            Your personal digital concierge for unforgettable milestone celebrations.
          </p>
        </div>
        
        <div className="flex flex-col gap-sm">
          <h3 className="font-label-caps text-label-caps text-secondary mb-xs">Services</h3>
          <Link to="/photographers" className="font-body-base text-body-base text-text-muted hover:text-primary transition-colors hover:underline decoration-primary/30">Photographers</Link>
          <Link to="/catering" className="font-body-base text-body-base text-text-muted hover:text-primary transition-colors hover:underline decoration-primary/30">Catering</Link>
          <Link to="/music" className="font-body-base text-body-base text-text-muted hover:text-primary transition-colors hover:underline decoration-primary/30">Music</Link>
          <Link to="/makeup" className="font-body-base text-body-base text-text-muted hover:text-primary transition-colors hover:underline decoration-primary/30">Makeup</Link>
        </div>
        
        <div className="flex flex-col gap-sm">
          <h3 className="font-label-caps text-label-caps text-secondary mb-xs">Company</h3>
          <Link to="#" className="font-body-base text-body-base text-text-muted hover:text-primary transition-colors hover:underline decoration-primary/30">About Us</Link>
          <Link to="#" className="font-body-base text-body-base text-text-muted hover:text-primary transition-colors hover:underline decoration-primary/30">Contact Us</Link>
          <Link to="#" className="font-body-base text-body-base text-text-muted hover:text-primary transition-colors hover:underline decoration-primary/30">Careers</Link>
        </div>

        <div className="flex flex-col gap-sm">
          <h3 className="font-label-caps text-label-caps text-secondary mb-xs">Legal</h3>
          <Link to="#" className="font-body-base text-body-base text-text-muted hover:text-primary transition-colors hover:underline decoration-primary/30">Privacy Policy</Link>
          <Link to="#" className="font-body-base text-body-base text-text-muted hover:text-primary transition-colors hover:underline decoration-primary/30">Terms of Service</Link>
        </div>
      </div>
      <div className="w-full text-center py-md border-t border-outline-hairline/50 font-label-caps text-label-caps text-text-muted">
        © 2024 EasyEvent. All rights reserved.
      </div>
    </footer>
  );
}
