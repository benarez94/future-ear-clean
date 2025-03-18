
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter } from '@/components/ui/drawer';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const MessageButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!message.trim() || !name.trim()) {
      toast({
        title: "Information manquante",
        description: "Veuillez renseigner votre nom et votre message.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulons l'envoi du message
      // Dans un environnement de production, ceci enverrait les données à une API
      const messageData = {
        id: Date.now().toString(),
        name,
        message,
        timestamp: new Date().toISOString(),
        read: false
      };
      
      // Enregistrer dans localStorage pour simuler une base de données
      const existingMessages = JSON.parse(localStorage.getItem('clientMessages') || '[]');
      existingMessages.push(messageData);
      localStorage.setItem('clientMessages', JSON.stringify(existingMessages));
      
      // Simuler un délai réseau
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message envoyé",
        description: "Nous avons bien reçu votre message et vous répondrons dès que possible.",
      });
      
      // Réinitialiser le formulaire
      setMessage('');
      setName('');
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Un problème est survenu lors de l'envoi de votre message. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 rounded-full w-12 h-12 shadow-lg z-50 p-0"
        aria-label="Ouvrir la messagerie"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerContent className="max-h-[85vh]">
          <DrawerHeader className="border-b">
            <DrawerTitle className="text-xl">Envoyez-nous un message</DrawerTitle>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-4 top-4"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </DrawerHeader>
          
          <div className="p-4 space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Votre nom
              </label>
              <input
                id="name"
                className="w-full p-2 border rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Entrez votre nom"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Votre message
              </label>
              <Textarea
                id="message"
                className="min-h-[150px]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Comment pouvons-nous vous aider ?"
              />
            </div>
          </div>

          <DrawerFooter className="border-t pt-4">
            <Button 
              onClick={handleSubmit} 
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer"}
            </Button>
            <p className="text-xs text-center text-gray-500 mt-2">
              Nous ne partageons jamais vos informations avec des tiers.
            </p>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MessageButton;
