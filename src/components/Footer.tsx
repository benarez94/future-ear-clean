
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
              Innovation for your ear hygiene.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook className="h-5 w-5" aria-hidden="true" />, href: "https://facebook.com", label: "Facebook" },
                { icon: <Instagram className="h-5 w-5" aria-hidden="true" />, href: "https://instagram.com", label: "Instagram" },
                { icon: <Twitter className="h-5 w-5" aria-hidden="true" />, href: "https://twitter.com", label: "Twitter" },
                { icon: <Youtube className="h-5 w-5" aria-hidden="true" />, href: "https://youtube.com", label: "Youtube" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
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
              {['Home', 'Product', 'Testimonials', 'FAQ'].map((item) => (
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
            <h3 className="text-lg font-semibold mb-4">Legal Information</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/mentions-legales"
                  className="text-gray-400 hover:text-medical transition-colors duration-300"
                >
                  Legal Notices
                </Link>
              </li>
              <li>
                <Link 
                  to="/politique-confidentialite"
                  className="text-gray-400 hover:text-medical transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/conditions-generales-vente"
                  className="text-gray-400 hover:text-medical transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  to="/politique-retour"
                  className="text-gray-400 hover:text-medical transition-colors duration-300"
                >
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>support@visioear.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Medical Drive, San Francisco, CA 94103</li>
            </ul>
            
            <div className="mt-6 flex space-x-3">
              <div className="bg-gray-800 p-2 rounded-lg flex items-center">
                <CreditCard className="h-5 w-5 text-medical mr-2" aria-hidden="true" />
                <span className="text-xs">Secure payment</span>
              </div>
              <div className="bg-gray-800 p-2 rounded-lg flex items-center">
                <ShieldCheck className="h-5 w-5 text-medical mr-2" aria-hidden="true" />
                <span className="text-xs">Insured delivery</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} VisioEar. All rights reserved. EIN: 123 456 789
            </p>
            
            <div>
              <img src="/images/payment-methods.png" alt="Payment methods" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
