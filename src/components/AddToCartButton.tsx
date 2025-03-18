
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

interface AddToCartButtonProps {
  className?: string;
}

const AddToCartButton = ({ className = '' }: AddToCartButtonProps) => {
  return (
    <motion.button
      className={`button-shine flex items-center justify-center px-6 py-3 bg-medical text-white rounded-xl font-medium transition-all duration-300 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <ShoppingCart className="w-5 h-5 mr-2" />
      Ajouter au panier
    </motion.button>
  );
};

export default AddToCartButton;
