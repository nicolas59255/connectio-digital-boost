
import React from 'react';
import CTAButton from '@/components/ui/CTAButton';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-purple/5 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="gradient-text font-bold mb-6 max-w-4xl">
            Boostez votre performance grâce à l'IA
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl">
            Des solutions concrètes, mesurables, et pensées pour les dirigeants.
            Avec Connectio, vous disposez de la plus grande offre de services d'automatisation et 
            d'optimisation en IA pour les PME, ETI et particuliers.
          </p>
          <p className="text-lg md:text-xl font-medium text-gray-800 mb-10 max-w-2xl">
            Chaque solution est personnalisée, adaptée à vos enjeux.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton href="#contact" className="bg-gradient-to-r from-primary-600 to-accent-purple">
              Diagnostic gratuit en 30 min
            </CTAButton>
            <CTAButton href="#services" variant="outline">
              Découvrez nos services
            </CTAButton>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="hidden lg:block absolute top-1/4 -right-20 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="hidden lg:block absolute bottom-1/2 -left-20 w-72 h-72 bg-accent-purple rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
    </section>
  );
};

export default HeroSection;
