import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import emailjs from 'emailjs-com';
import { Loader2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Ces informations doivent être remplacées par vos propres identifiants EmailJS
      const serviceId = "service_ja3m2oa"; // Remplacez par votre Service ID d'EmailJS
      const templateId = "template_r2z1vcq"; // Remplacez par votre Template ID d'EmailJS
      const userId = "qtPL8IQbj96XPIi33"; // Remplacez par votre User ID d'EmailJS
      
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,
        to_email: "nicolas59255@gmail.com", // Remplacez par votre adresse e-mail personnelle
      };
      
      await emailjs.send(serviceId, templateId, templateParams, userId);
      
      toast({
        title: "Formulaire envoyé !",
        description: "Nous vous contacterons très bientôt.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      toast({
        title: "Erreur",
        description: `Une erreur s'est produite lors de l'envoi du formulaire. Détails : ${JSON.stringify(error)}`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Nom complet
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom"
            required
            className="w-full"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="votre@email.com"
            required
            className="w-full"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Téléphone
          </label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Votre numéro de téléphone"
            className="w-full"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2">
            Entreprise
          </label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Nom de votre entreprise"
            className="w-full"
            disabled={isSubmitting}
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Comment pouvons-nous vous aider ?"
          rows={4}
          required
          className="w-full"
          disabled={isSubmitting}
        />
      </div>
      <Button 
        type="submit" 
        className="w-full md:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Envoi en cours...
          </>
        ) : "Envoyer le message"}
      </Button>
    </form>
  );
};

export default ContactForm;
