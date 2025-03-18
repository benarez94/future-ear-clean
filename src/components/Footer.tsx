
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube, CreditCard, ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="text-2xl font-semibold text-white mb-4 inline-block">VisioEar</Link>
            <p className="text-gray-400 mb-4">
              L'innovation au service de votre hygiène auriculaire.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook className="h-5 w-5" />, href: "https://facebook.com" },
                { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com" },
                { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com" },
                { icon: <Youtube className="h-5 w-5" />, href: "https://youtube.com" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-medical transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {['Accueil', 'Produit', 'Témoignages', 'FAQ'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-medical transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Informations légales</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/mentions-legales"
                  className="text-gray-400 hover:text-medical transition-colors duration-300"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link 
                  to="/politique-confidentialite"
                  className="text-gray-400 hover:text-medical transition-colors duration-300"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link 
                  to="/conditions-generales-vente"
                  className="text-gray-400 hover:text-medical transition-colors duration-300"
                >
                  CGV
                </Link>
              </li>
              <li>
                <Link 
                  to="/politique-retour"
                  className="text-gray-400 hover:text-medical transition-colors duration-300"
                >
                  Politique de retour
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>support@visioear.com</li>
              <li>01 23 45 67 89</li>
              <li>123 Avenue des Champs-Élysées, 75008 Paris</li>
            </ul>
            
            <div className="mt-6 flex space-x-3">
              <div className="bg-gray-800 p-2 rounded-lg flex items-center">
                <CreditCard className="h-5 w-5 text-medical mr-2" />
                <span className="text-xs">Paiement sécurisé</span>
              </div>
              <div className="bg-gray-800 p-2 rounded-lg flex items-center">
                <ShieldCheck className="h-5 w-5 text-medical mr-2" />
                <span className="text-xs">Livraison assurée</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} VisioEar. Tous droits réservés. SIRET: 123 456 789 00012
            </p>
            
            <div>
              <img src="/images/payment-methods.png" alt="Méthodes de paiement" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
