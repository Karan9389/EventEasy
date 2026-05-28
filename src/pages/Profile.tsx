import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAppContext } from '../context/AppContext';
import { useNavigate, Navigate } from 'react-router-dom';
import { User, Settings, Calendar, LogOut } from 'lucide-react';

export default function Profile() {
  const { user, logout } = useAppContext();
  const navigate = useNavigate();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow py-xl px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto w-full">
        <h1 className="font-display-md text-display-md text-on-surface mb-xl">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          <div className="md:col-span-1">
            <div className="bg-surface-container-low p-lg rounded-3xl border border-outline-variant flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-surface-variant rounded-full flex items-center justify-center mb-md text-on-surface-variant">
                 <User size={40} />
              </div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">{user.name}</h2>
              <p className="font-body-base text-body-base text-text-muted mb-lg">{user.email}</p>
              
              <div className="w-full space-y-sm">
                <button className="w-full flex items-center gap-sm p-4 rounded-xl hover:bg-surface-variant bg-surface transition-colors font-body-bold text-on-surface">
                  <Settings size={20} /> Settings
                </button>
                <button onClick={handleLogout} className="w-full flex items-center gap-sm p-4 rounded-xl hover:bg-error/10 text-error transition-colors font-body-bold">
                  <LogOut size={20} /> Sign Out
                </button>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-lg">
             <div className="bg-surface-container-lowest p-xl rounded-3xl border border-outline-hairline">
               <div className="flex items-center gap-md mb-md">
                 <div className="p-3 bg-primary/10 rounded-xl text-primary">
                   <Calendar size={28} />
                 </div>
                 <h2 className="font-headline-sm text-headline-sm text-on-surface">Upcoming Events</h2>
               </div>
               
               <div className="bg-surface-container-low p-md rounded-2xl flex justify-between items-center border border-outline-variant">
                 <div>
                   <h3 className="font-body-bold text-on-surface">Summer Wedding</h3>
                   <p className="font-body-base text-text-muted">August 15, 2024</p>
                 </div>
                 <div className="px-3 py-1 bg-surface-rose text-primary-container rounded-full font-label-caps text-xs">Planning</div>
               </div>
               
               <button className="mt-md font-body-bold text-primary hover:underline">Create New Event +</button>
             </div>
             
             <div className="bg-surface-container-lowest p-xl rounded-3xl border border-outline-hairline">
                <h2 className="font-headline-sm text-headline-sm text-on-surface mb-md">Recent Activity</h2>
                <div className="space-y-md">
                  <p className="font-body-base text-text-muted border-b border-outline-variant pb-xs">Added <strong>Luna Rhythms</strong> to Wishlist</p>
                  <p className="font-body-base text-text-muted border-b border-outline-variant pb-xs">Viewed <strong>Gourmet Delights</strong> catering options</p>
                </div>
             </div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
