
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Connectio</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Votre partenaire de transformation numérique, spécialiste en solutions d'IA 
              pour PME, ETI et particuliers.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-300 hover:text-white transition-colors">
                  Nos services
                </a>
              </li>
              <li>
                <a href="/#about" className="text-gray-300 hover:text-white transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-gray-300 hover:text-white transition-colors">
                  Nous contacter
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: contact@connectio.fr</li>
              <li>Téléphone: +33 (0)6 13 14 41 43</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} NICOLAS PEPIN. Tous droits réservés.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Connectio, votre partenaire de transformation numérique.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
