
import React from 'react';
import CTAButton from '@/components/ui/CTAButton';
import { ArrowDownIcon, LightbulbIcon, SparklesIcon } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 animated-bg bg-gradient-to-br from-primary-50 via-accent-purple/5 to-primary-100/20 z-0"></div>
      
      {/* Cercles décoratifs */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/2 -left-20 w-72 h-72 bg-accent-purple rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      
      {/* Éléments graphiques */}
      <div className="absolute right-0 top-20 w-full md:w-1/2 h-full opacity-10 md:opacity-20">
        <div className="relative w-full h-full">
          <div className="absolute right-10 top-10 w-20 h-20 md:w-32 md:h-32 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute right-40 top-40 w-24 h-24 md:w-40 md:h-40 bg-accent-purple rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute right-20 top-80 w-16 h-16 md:w-24 md:h-24 bg-accent-cyan rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>
      </div>
      
      {/* Icônes flottantes */}
      <div className="hidden md:block absolute right-1/4 top-20 text-primary-500 animate-bounce">
        <SparklesIcon className="w-12 h-12 opacity-20" />
      </div>
      <div className="hidden md:block absolute left-1/4 bottom-20 text-accent-purple animate-pulse">
        <LightbulbIcon className="w-10 h-10 opacity-20" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-block">
            <span className="bg-primary-50 text-primary-700 font-medium px-4 py-2 rounded-full text-sm inline-flex items-center">
              <SparklesIcon className="h-4 w-4 mr-2" />
              Solutions IA pour entreprises
            </span>
          </div>
          
          <h1 className="gradient-text font-bold mb-6 max-w-4xl text-appear animation-delay-200">
            Boostez votre performance grâce à l'IA
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl text-appear animation-delay-400">
            Des solutions concrètes, mesurables, et pensées pour les dirigeants.
            Avec Connectio, vous disposez de la plus grande offre de services d'automatisation et 
            d'optimisation en IA pour les PME, ETI et particuliers.
          </p>
          
          <p className="text-lg md:text-xl font-medium text-gray-800 mb-10 max-w-2xl text-appear animation-delay-600">
            Chaque solution est personnalisée, adaptée à vos enjeux.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 text-appear animation-delay-800">
            <CTAButton href="#contact" className="bg-gradient-to-r from-primary-600 to-accent-purple">
              Diagnostic gratuit en 30 min
            </CTAButton>
            <CTAButton href="#services" variant="outline">
              Découvrez nos services
            </CTAButton>
          </div>
          
          <div className="mt-16 text-center">
            <a href="#services" className="inline-flex flex-col items-center text-gray-500 hover:text-primary-600 transition-colors">
              <span className="mb-2 text-sm">Découvrir</span>
              <ArrowDownIcon className="h-5 w-5 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
