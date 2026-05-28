import React from 'react';
import { Star, Heart } from 'lucide-react';
import { Vendor, formatCurrency } from '../lib/data';
import { useAppContext } from '../context/AppContext';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

interface VendorCardProps {
  vendor: Vendor;
}

export default function VendorCard({ vendor }: VendorCardProps) {
  const { addToCart, isInCart, toggleWishlist, isInWishlist } = useAppContext();
  
  const discount = vendor.originalPrice 
    ? Math.round(((vendor.originalPrice - vendor.price) / vendor.originalPrice) * 100) 
    : 0;

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-surface-container-lowest rounded-[16px] border border-outline-hairline overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col group relative"
    >
      <button 
        onClick={() => toggleWishlist(vendor)}
        className="absolute top-4 right-4 z-10 bg-surface/80 backdrop-blur-md p-2 rounded-full text-on-surface-variant hover:text-primary transition-colors shadow-sm"
      >
        <Heart 
          size={20} 
          className={cn(isInWishlist(vendor.id) ? "fill-primary text-primary" : "text-on-surface-variant")} 
          strokeWidth={isInWishlist(vendor.id) ? 0 : 1.5}
        />
      </button>

      <div className="relative h-64 overflow-hidden rounded-t-[16px]">
        <img 
          src={vendor.image} 
          alt={vendor.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute top-4 left-4 bg-surface-rose text-primary-container px-3 py-1 rounded-full font-label-caps text-label-caps flex items-center gap-xs shadow-sm">
          <Star size={14} className="fill-primary" strokeWidth={0} /> {vendor.rating} ({vendor.reviewCount})
        </div>
      </div>
      
      <div className="p-md flex flex-col flex-grow">
        <div className="mb-sm">
          <h2 className="font-headline-sm text-headline-sm text-on-surface mb-xs">{vendor.name}</h2>
          <p className="font-body-base text-body-base text-text-muted">{vendor.description}</p>
        </div>
        
        <div className="mt-auto pt-sm flex items-end justify-between">
          <div>
            <div className="flex items-center gap-xs">
              <span className="font-body-bold text-body-bold text-primary">{formatCurrency(vendor.price)}</span>
              {vendor.originalPrice && (
                <span className="font-body-base text-label-sm text-text-muted line-through">{formatCurrency(vendor.originalPrice)}</span>
              )}
            </div>
            {discount > 0 && <span className="font-label-caps text-label-caps text-tertiary-container">{discount}% OFF</span>}
            {vendor.priceUnit && <span className="font-body-base text-body-base text-text-muted">{vendor.priceUnit}</span>}
          </div>
          
          <button 
            onClick={() => addToCart(vendor)}
            disabled={isInCart(vendor.id)}
            className={cn(
              "font-body-bold text-body-bold py-2 px-6 rounded-full hover:scale-[1.02] transition-transform shadow-sm",
              isInCart(vendor.id) 
                ? "bg-surface-variant text-text-muted cursor-not-allowed" 
                : "bg-gradient-to-r from-primary to-secondary text-on-primary"
            )}
          >
            {isInCart(vendor.id) ? 'Added' : 'Book'}
          </button>
        </div>
      </div>
    </motion.article>
  );
}
