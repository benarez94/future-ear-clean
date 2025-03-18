
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      
      <div className="py-20 pt-32 max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Politique de Confidentialité</h1>
        
        <section className="mb-10">
          <p className="italic mb-6">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
          
          <p className="mb-4">
            La société Course-Flash, exploitant le site VisioEar, s'engage à protéger votre vie privée et vos données personnelles. 
            Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons vos informations personnelles.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">1. Collecte des données personnelles</h2>
          <p className="mb-4">
            Nous collectons les informations suivantes lorsque vous utilisez notre site ou passez une commande :
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Adresse postale</li>
            <li>Numéro de téléphone</li>
            <li>Informations de paiement (traitées sécurisement par Stripe)</li>
            <li>Données de navigation et d'utilisation du site</li>
          </ul>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">2. Utilisation des données</h2>
          <p className="mb-4">Nous utilisons vos données personnelles pour :</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Traiter et expédier vos commandes</li>
            <li>Vous informer sur l'état de votre commande</li>
            <li>Vous fournir un service client</li>
            <li>Améliorer notre site et nos produits</li>
            <li>Vous envoyer des communications marketing (avec votre consentement)</li>
            <li>Respecter nos obligations légales</li>
          </ul>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">3. Protection des données</h2>
          <p className="mb-4">
            Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre tout accès 
            non autorisé, modification, divulgation ou destruction. Les transactions de paiement sont sécurisées par Stripe, 
            un prestataire de services de paiement conforme aux normes PCI-DSS.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">4. Cookies</h2>
          <p className="mb-4">
            Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez désactiver les cookies dans 
            les paramètres de votre navigateur, mais cela pourrait affecter certaines fonctionnalités du site.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">5. Partage des données</h2>
          <p className="mb-4">
            Nous ne vendons pas vos données personnelles à des tiers. Nous pouvons partager vos informations avec :
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Nos partenaires logistiques pour la livraison des commandes</li>
            <li>Stripe pour le traitement des paiements</li>
            <li>Des prestataires de services qui nous aident à exploiter notre site</li>
            <li>Les autorités publiques lorsque la loi l'exige</li>
          </ul>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">6. Vos droits</h2>
          <p className="mb-4">
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Droit d'accès à vos données personnelles</li>
            <li>Droit de rectification des données inexactes</li>
            <li>Droit à l'effacement (droit à l'oubli)</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité des données</li>
            <li>Droit d'opposition au traitement</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous à l'adresse suivante : privacy@visioear.com
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-4">7. Modifications de la politique de confidentialité</h2>
          <p>
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page.
          </p>
        </section>
      </div>
      
      <Footer />
    </motion.div>
  );
};

export default PrivacyPolicy;
