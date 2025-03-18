
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';
import { Lock, CreditCard, ChevronRight, ExternalLink, MessageCircle } from 'lucide-react';
import ClientMessages from '@/components/admin/ClientMessages';

// Schéma de validation pour le formulaire
const stripeFormSchema = z.object({
  apiKey: z.string().min(1, "La clé API est requise"),
  webhookSecret: z.string().min(1, "Le secret du webhook est requis"),
  accountId: z.string().min(1, "L'ID du compte est requis"),
});

const Admin = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeSection, setActiveSection] = useState<'stripe' | 'messages'>('stripe');
  
  const form = useForm<z.infer<typeof stripeFormSchema>>({
    resolver: zodResolver(stripeFormSchema),
    defaultValues: {
      apiKey: '',
      webhookSecret: '',
      accountId: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof stripeFormSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Simulons une sauvegarde de configuration
      // Dans un environnement de production, ceci enverrait les données à une API sécurisée
      console.log('Configuration Stripe:', data);
      
      // Simulons un délai de traitement
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Configuration enregistrée",
        description: "Vos paramètres Stripe ont été mis à jour avec succès.",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Un problème est survenu lors de l'enregistrement de la configuration.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      
      <div className="py-20 pt-32 max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Administration</h1>
          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            Accès sécurisé
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-1">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h2 className="font-semibold text-lg mb-4">Menu</h2>
              <ul className="space-y-2">
                <li>
                  <Button 
                    variant={activeSection === 'stripe' ? "default" : "ghost"} 
                    className="w-full justify-start"
                    onClick={() => setActiveSection('stripe')}
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Configuration Stripe
                  </Button>
                </li>
                <li>
                  <Button 
                    variant={activeSection === 'messages' ? "default" : "ghost"} 
                    className="w-full justify-start"
                    onClick={() => setActiveSection('messages')}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Messages clients
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start">
                    Commandes
                    <ChevronRight className="ml-auto h-4 w-4" />
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start">
                    Produits
                    <ChevronRight className="ml-auto h-4 w-4" />
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start">
                    Utilisateurs
                    <ChevronRight className="ml-auto h-4 w-4" />
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="col-span-2">
            {activeSection === 'stripe' && (
              <div className="bg-white border rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-6">
                  <Lock className="h-5 w-5 text-gray-600 mr-2" />
                  <h2 className="text-xl font-semibold">Configuration Stripe</h2>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-600 mb-4">
                    Connectez votre compte Stripe pour activer les paiements sur votre site VisioEar.
                    Ces informations sont stockées de manière sécurisée et ne sont jamais partagées.
                  </p>
                  
                  <a 
                    href="https://dashboard.stripe.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-medical hover:underline flex items-center text-sm mb-6"
                  >
                    Accéder au dashboard Stripe
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="apiKey"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Clé API Stripe</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="sk_test_..." 
                              {...field} 
                              type="password"
                            />
                          </FormControl>
                          <FormDescription>
                            Vous trouverez votre clé API dans les paramètres de votre compte Stripe.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="webhookSecret"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Secret du Webhook</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="whsec_..." 
                              {...field}
                              type="password"
                            />
                          </FormControl>
                          <FormDescription>
                            Utilisé pour vérifier les événements provenant de Stripe.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="accountId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>ID du compte Stripe</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="acct_..." 
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Identifiant unique de votre compte Stripe.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full sm:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Enregistrement...' : 'Enregistrer la configuration'}
                    </Button>
                  </form>
                </Form>
              </div>
            )}
            
            {activeSection === 'messages' && <ClientMessages />}
          </div>
        </div>
      </div>
      
      <Footer />
    </motion.div>
  );
};

export default Admin;
