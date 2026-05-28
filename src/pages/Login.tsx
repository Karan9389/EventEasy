import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { login } = useAppContext();
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    login({ id: 'u1', name: 'Eleanor R.', email: 'eleanor@example.com' });
    navigate('/profile');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-8 bg-surface-container-low">
        <div className="bg-surface p-8 sm:p-12 rounded-3xl border border-outline-hairline shadow-lg w-full max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-display-sm text-display-sm text-primary mb-4">EasyEvent</h1>
            <p className="font-body-base text-body-base text-text-muted">
              {isSignUp ? 'Create your account to start curating' : 'Welcome back to your event workspace'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {isSignUp && (
              <div>
                <label className="block text-label-sm font-label-sm text-on-surface mb-2" htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full bg-surface-container-lowest border border-outline rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-on-surface"
                  placeholder="Eleanor R."
                />
              </div>
            )}
            <div>
              <label className="block text-label-sm font-label-sm text-on-surface mb-2" htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email"
                required
                className="w-full bg-surface-container-lowest border border-outline rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-on-surface"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-label-sm font-label-sm text-on-surface mb-2" htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password"
                required
                className="w-full bg-surface-container-lowest border border-outline rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-on-surface"
                placeholder="••••••••"
              />
            </div>

            <button type="submit" className="w-full bg-primary text-on-primary font-body-bold py-3 mt-8 rounded-full hover:bg-primary-hover transition-colors shadow-sm hover:scale-[1.02]">
              {isSignUp ? 'Create Account' : 'Sign In'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="font-body-base text-body-base text-text-muted">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}
              <button 
                onClick={() => setIsSignUp(!isSignUp)}
                className="ml-2 font-body-bold text-primary hover:underline"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
