
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ReturnPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      
      <div className="py-20 pt-32 max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Politique de Retour et Remboursement</h1>
        
        <section className="mb-10">
          <p className="italic mb-6">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
          
          <p className="mb-4">
            Chez VisioEar, notre priorité est votre satisfaction. Nous avons mis en place cette politique de retour et de remboursement pour vous offrir une expérience d'achat sereine.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">1. Délai de rétractation</h2>
          <p className="mb-4">
            Vous disposez d'un délai de 30 jours à compter de la réception de votre produit pour exercer votre droit de rétractation, sans avoir à justifier de motifs ni à payer de pénalités (à l'exception des frais de retour).
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">2. Conditions de retour</h2>
          <p className="mb-4">Pour être éligible à un retour, votre article doit être :</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Dans son emballage d'origine</li>
            <li>Complet (tous les accessoires, notices, etc.)</li>
            <li>Non utilisé (sauf pour un test raisonnable)</li>
            <li>Non endommagé</li>
          </ul>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">3. Procédure de retour</h2>
          <p className="mb-4">Pour retourner un produit, veuillez suivre ces étapes :</p>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li>Contactez notre service client à l'adresse retours@visioear.com pour nous informer de votre décision de retourner le produit</li>
            <li>Nous vous enverrons un formulaire de retour par email</li>
            <li>Emballez soigneusement le produit avec tous ses accessoires et joignez le formulaire de retour</li>
            <li>Expédiez le colis à l'adresse indiquée sur le formulaire</li>
          </ol>
          <p className="mb-4">
            Les frais de retour sont à votre charge. Nous vous recommandons d'utiliser un service de livraison suivi.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">4. Remboursements</h2>
          <p className="mb-4">
            Une fois votre retour reçu et inspecté, nous vous enverrons un email pour vous notifier la réception de votre produit retourné. 
            Nous vous informerons également de l'approbation ou du rejet de votre demande de remboursement.
          </p>
          <p className="mb-4">
            Si votre retour est approuvé, votre remboursement sera traité, et un crédit sera automatiquement appliqué à votre carte de crédit 
            ou méthode de paiement originale, dans un délai de 14 jours suivant l'approbation de votre demande.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">5. Produits défectueux</h2>
          <p className="mb-4">
            Si vous recevez un produit défectueux ou endommagé, veuillez nous contacter dans les 48 heures suivant la réception. 
            Nous organiserons le retour et le remplacement du produit à nos frais.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-4">6. Contact</h2>
          <p className="mb-4">
            Pour toute question concernant notre politique de retour et de remboursement, n'hésitez pas à nous contacter :
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Email : retours@visioear.com</li>
            <li>Téléphone : 01 23 45 67 89 (du lundi au vendredi, 9h-18h)</li>
          </ul>
        </section>
      </div>
      
      <Footer />
    </motion.div>
  );
};

export default ReturnPolicy;
