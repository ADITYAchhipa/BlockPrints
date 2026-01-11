import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart, Product } from '@/context/CartContext';
import { useState } from 'react';

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-foreground/30 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-4xl md:w-full bg-background rounded-2xl shadow-large z-50 overflow-hidden"
          >
            <div className="grid md:grid-cols-2 h-full md:h-auto">
              {/* Image */}
              <div className="relative aspect-square md:aspect-[3/4]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm md:hidden"
                  onClick={onClose}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 hidden md:flex"
                  onClick={onClose}
                >
                  <X className="h-5 w-5" />
                </Button>

                <span className="text-sm font-medium text-primary mb-2">
                  {product.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
                  {product.name}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="mt-auto space-y-4">
                  <p className="text-2xl font-display font-semibold text-primary">
                    ₹{product.price.toLocaleString()}
                  </p>

                  <Button
                    variant="hero"
                    className="w-full"
                    onClick={handleAddToCart}
                  >
                    {added ? (
                      <>
                        <Check className="h-5 w-5" />
                        Added to Cart
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="h-5 w-5" />
                        Add to Cart
                      </>
                    )}
                  </Button>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>✨ Handcrafted</span>
                    <span>🌿 Natural Dyes</span>
                    <span>🇮🇳 Made in India</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
