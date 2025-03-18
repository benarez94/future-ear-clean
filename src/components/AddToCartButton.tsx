
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useToast } from '@/hooks/use-toast';

// Remplacez cette clé par votre clé publique Stripe de test
const stripePromise = loadStripe('pk_test_51XYZabcdefghijklmnopqrstuvwxyz');

interface AddToCartButtonProps {
  className?: string;
  productId?: string;
  price?: number;
}

const AddToCartButton = ({ 
  className = '', 
  productId = 'visioear-standard', 
  price = 3990 
}: AddToCartButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleCheckout = async () => {
    setIsLoading(true);
    
    try {
      // Dans un environnement de production, ceci serait une API serverless
      // Pour l'instant, simulons une redirection vers Stripe
      const stripe = await stripePromise;
      
      if (!stripe) {
        throw new Error("Erreur de connexion à Stripe");
      }
      
      toast({
        title: "Redirection vers la page de paiement",
        description: "Vous allez être redirigé vers la page de paiement sécurisée."
      });
      
      // Dans une vraie implémentation, nous appellerions une API serverless ici
      // Pour créer une session Stripe checkout
      // Exemple de code (à remplacer par votre API):
      /*
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId,
          price,
        }),
      });
      
      const session = await response.json();
      await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      */
      
      // Simulation pour la demo
      setTimeout(() => {
        toast({
          title: "Simulation",
          description: "Dans un environnement de production, vous seriez redirigé vers Stripe"
        });
        setIsLoading(false);
      }, 2000);
      
    } catch (error) {
      console.error('Erreur:', error);
      toast({
        title: "Erreur",
        description: "Un problème est survenu lors de la connexion à Stripe",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <motion.button
      className={`button-shine flex items-center justify-center px-6 py-3 bg-medical text-white rounded-xl font-medium transition-all duration-300 ${className} ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
      whileHover={{ scale: isLoading ? 1 : 1.05 }}
      whileTap={{ scale: isLoading ? 1 : 0.95 }}
      onClick={handleCheckout}
      disabled={isLoading}
    >
      {isLoading ? (
        <span className="flex items-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Traitement...
        </span>
      ) : (
        <>
          <ShoppingCart className="w-5 h-5 mr-2" />
          Ajouter au panier
        </>
      )}
    </motion.button>
  );
};

export default AddToCartButton;
