
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const LegalNotice = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      
      <div className="py-20 pt-32 max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Mentions Légales</h1>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">1. Informations légales</h2>
          <p className="mb-4">
            Le site VisioEar est édité par la société Course-Flash, SAS au capital de 10 000€,
            immatriculée au registre du commerce et des sociétés sous le numéro SIRET 123 456 789 00012.
          </p>
          <p className="mb-4">
            Siège social : 123 Avenue des Champs-Élysées, 75008 Paris, France<br />
            Numéro de TVA intracommunautaire : FR 12 123456789<br />
            Directeur de la publication : [Votre Nom]
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">2. Hébergement</h2>
          <p>
            Le site VisioEar est hébergé par la société Vercel Inc.,
            située au 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">3. Propriété intellectuelle</h2>
          <p className="mb-4">
            L'ensemble des éléments constituant le site VisioEar (textes, graphismes, logiciels, photographies, images, vidéos, sons, plans, logos, marques, etc.) 
            est la propriété exclusive de Course-Flash ou de ses partenaires. Ces éléments sont protégés par les lois relatives à la propriété intellectuelle.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, 
            est interdite, sauf autorisation écrite préalable de Course-Flash.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">4. Données personnelles</h2>
          <p>
            Les informations concernant la collecte et le traitement des données personnelles sont détaillées dans notre 
            <a href="/politique-confidentialite" className="text-medical hover:underline ml-1">Politique de Confidentialité</a>.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-4">5. Contact</h2>
          <p>
            Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à l'adresse email : 
            contact@visioear.com
          </p>
        </section>
      </div>
      
      <Footer />
    </motion.div>
  );
};

export default LegalNotice;
