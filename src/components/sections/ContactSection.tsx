
import React from 'react';
import ContactForm from '@/components/ui/ContactForm';
import { Mail, Phone, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50/30 to-accent-blue/5 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contactez-nous dès aujourd'hui</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Prenez rendez-vous pour un diagnostic gratuit de 30 minutes et découvrez 
            vos leviers d'automatisation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h3>
            <ContactForm />
            <div className="mt-6 text-sm text-gray-500">
              <p>* Vos données restent confidentielles et ne seront jamais partagées avec des tiers.</p>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
              <h3 className="text-xl font-semibold mb-4">Nos coordonnées</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Mail className="mr-3 text-primary-600" />
                  <span>contact@connectio.fr</span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-3 text-primary-600" />
                  <span>+33 (0)6 13 14 41 43</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-primary-600 to-accent-purple rounded-lg shadow-lg p-6 md:p-8 text-white">
              <h3 className="text-xl font-semibold mb-4">Horaires d'ouverture</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    Lundi - Vendredi:
                  </span>
                  <span>9h - 18h</span>
                </li>
                <li className="flex justify-between">
                  <span className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    Samedi - Dimanche:
                  </span>
                  <span>Fermé</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
