import React from 'react';
import CTAButton from '@/components/ui/CTAButton';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              L'IA au cœur de votre stratégie et de la nôtre
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              L'IA est à l'avant-garde de notre époque, générant une productivité améliorée, 
              une optimisation des coûts et des prises de décisions éclairées.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Découvrez comment l'intelligence artificielle peut simplifier et accélérer votre activité, 
              même dans une PME ou une ETI, à travers 5 leviers concrets.
            </p>
            <CTAButton href="/leviers">
              Notre guide pour entreprise
            </CTAButton>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6">À propos de nous</h3>
            <p className="text-gray-700 mb-4">
              Chez Connectio, nous pensons que l'IA ne remplace pas l'humain — elle le libère.
            </p>
            <p className="text-gray-700 mb-6">
              Fondé par Nicolas Pepin, expert DevOps et IA, Connectio est né d'un constat : 
              les PME et ETI sont prêtes pour l'IA, mais manquent de partenaires de confiance pour franchir le cap.
            </p>
            <p className="font-medium text-lg mb-8">
              Faites le pas vers la transformation digitale.
            </p>
            <div className="flex justify-between items-center">
              <CTAButton href="#contact" variant="secondary">
                Contactez-nous
              </CTAButton>
              <CTAButton href="#" variant="outline">
                En savoir plus
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
