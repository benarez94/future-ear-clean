
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsAndConditions = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      
      <div className="py-20 pt-32 max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Conditions Générales de Vente</h1>
        
        <section className="mb-10">
          <p className="italic mb-6">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
          
          <p className="mb-4">
            Les présentes conditions générales de vente (CGV) sont conclues entre :
          </p>
          <ul className="mb-4">
            <li>La société Course-Flash, SAS au capital de 10 000€, immatriculée au RCS sous le numéro SIRET 123 456 789 00012, dont le siège social est situé au 123 Avenue des Champs-Élysées, 75008 Paris, ci-après dénommée "le Vendeur"</li>
            <li>Et toute personne physique ou morale souhaitant procéder à un achat sur le site internet VisioEar, ci-après dénommée "l'Acheteur"</li>
          </ul>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">1. Objet et champ d'application</h2>
          <p className="mb-4">
            Les présentes CGV régissent la vente de produits VisioEar par le Vendeur à l'Acheteur, effectuée à partir du site internet VisioEar.
            Elles s'appliquent à l'exclusion de toutes autres conditions, notamment celles de l'Acheteur.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">2. Caractéristiques des produits</h2>
          <p className="mb-4">
            Les produits proposés à la vente sont présentés sur le site VisioEar avec un descriptif précis de leurs caractéristiques essentielles.
            Les photographies illustrant les produits n'entrent pas dans le champ contractuel et ne sont pas contractuelles.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">3. Prix</h2>
          <p className="mb-4">
            Les prix des produits sont indiqués en euros toutes taxes comprises (TTC), hors frais de livraison.
            Des droits de douane ou autres taxes locales peuvent être exigibles pour les livraisons internationales. Ces droits et taxes sont à la charge de l'Acheteur.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">4. Commande</h2>
          <p className="mb-4">
            L'Acheteur peut passer commande sur le site internet VisioEar. La validation de la commande implique l'acceptation expresse et sans réserve des présentes CGV.
            Le Vendeur se réserve le droit de refuser toute commande pour des motifs légitimes.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">5. Paiement</h2>
          <p className="mb-4">
            Le paiement s'effectue en ligne par carte bancaire via la plateforme sécurisée Stripe.
            Les données de paiement sont cryptées et ne transitent pas par les serveurs du Vendeur.
            La commande est validée après confirmation du paiement par Stripe.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">6. Livraison</h2>
          <p className="mb-4">
            Les délais de livraison sont donnés à titre indicatif. Un dépassement de ces délais ne peut donner lieu à aucune annulation de commande, aucune réduction de prix ou aucun dommages-intérêts.
            Les risques sont transférés à l'Acheteur au moment de la livraison.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">7. Droit de rétractation</h2>
          <p className="mb-4">
            Conformément aux dispositions légales en vigueur, l'Acheteur dispose d'un délai de 14 jours à compter de la réception du produit pour exercer son droit de rétractation, sans avoir à justifier de motifs ni à payer de pénalités.
            Pour exercer ce droit, l'Acheteur doit notifier sa décision au Vendeur par écrit. Les frais de retour sont à la charge de l'Acheteur.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">8. Garanties</h2>
          <p className="mb-4">
            Les produits vendus sont couverts par la garantie légale de conformité (articles L. 217-4 et suivants du Code de la consommation) et par la garantie contre les vices cachés (articles 1641 et suivants du Code civil).
            Le produit VisioEar bénéficie également d'une garantie commerciale de 1 an à compter de la date d'achat.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-4">9. Loi applicable et juridiction compétente</h2>
          <p className="mb-4">
            Les présentes CGV sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
          </p>
        </section>
      </div>
      
      <Footer />
    </motion.div>
  );
};

export default TermsAndConditions;
