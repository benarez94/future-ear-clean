
import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CheckCircle, CircleAlert, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ClientMessage {
  id: string;
  name: string;
  message: string;
  timestamp: string;
  read: boolean;
}

const ClientMessages = () => {
  const [messages, setMessages] = useState<ClientMessage[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<ClientMessage | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Charger les messages du localStorage
    const loadMessages = () => {
      const storedMessages = JSON.parse(localStorage.getItem('clientMessages') || '[]');
      setMessages(storedMessages.sort((a: ClientMessage, b: ClientMessage) => 
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      ));
    };

    loadMessages();
    
    // Rafraîchir les messages toutes les 30 secondes
    const intervalId = setInterval(loadMessages, 30000);
    
    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const handleOpenMessage = (message: ClientMessage) => {
    setSelectedMessage(message);
    setIsDialogOpen(true);
    
    // Marquer comme lu si ce n'est pas déjà le cas
    if (!message.read) {
      const updatedMessages = messages.map(msg => 
        msg.id === message.id ? { ...msg, read: true } : msg
      );
      setMessages(updatedMessages);
      localStorage.setItem('clientMessages', JSON.stringify(updatedMessages));
    }
  };

  const handleDeleteMessage = (id: string) => {
    const updatedMessages = messages.filter(msg => msg.id !== id);
    setMessages(updatedMessages);
    localStorage.setItem('clientMessages', JSON.stringify(updatedMessages));
    setIsDialogOpen(false);
    
    toast({
      title: "Message supprimé",
      description: "Le message a été supprimé avec succès."
    });
  };

  const unreadCount = messages.filter(msg => !msg.read).length;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Messages des clients</h2>
        {unreadCount > 0 && (
          <Badge variant="destructive" className="ml-2">
            {unreadCount} non lu{unreadCount > 1 ? 's' : ''}
          </Badge>
        )}
      </div>

      {messages.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <p>Aucun message reçu pour le moment.</p>
        </div>
      ) : (
        <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
          {messages.map((message) => (
            <div 
              key={message.id}
              className={`p-4 border rounded-lg cursor-pointer transition-colors hover:bg-gray-50 ${!message.read ? 'border-l-4 border-l-primary' : ''}`}
              onClick={() => handleOpenMessage(message)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{message.name}</h3>
                  <p className="text-sm text-gray-500">{formatDate(message.timestamp)}</p>
                </div>
                {!message.read ? (
                  <CircleAlert className="h-5 w-5 text-primary" />
                ) : (
                  <CheckCircle className="h-5 w-5 text-gray-400" />
                )}
              </div>
              <p className="mt-2 text-gray-700 line-clamp-2">{message.message}</p>
            </div>
          ))}
        </div>
      )}

      {selectedMessage && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Message de {selectedMessage.name}</DialogTitle>
            </DialogHeader>
            
            <div className="mt-4">
              <div className="text-sm text-gray-500 mb-2">
                Reçu le {formatDate(selectedMessage.timestamp)}
              </div>
              <div className="bg-gray-50 p-4 rounded-md whitespace-pre-wrap">
                {selectedMessage.message}
              </div>
            </div>
            
            <DialogFooter className="mt-6 flex items-center justify-between">
              <Button 
                variant="destructive" 
                onClick={() => handleDeleteMessage(selectedMessage.id)}
                className="gap-2"
              >
                <Trash2 className="h-4 w-4" />
                Supprimer
              </Button>
              <Button onClick={() => setIsDialogOpen(false)}>
                Fermer
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ClientMessages;
