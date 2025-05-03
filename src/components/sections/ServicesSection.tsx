import React from 'react';
import ServiceCard from '@/components/ui/ServiceCard';
import { Search, Settings, Users, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import CTAButton from '@/components/ui/CTAButton';

const servicesData = [
  {
    title: 'Audit IA & Automatisation',
    icon: <Search className="w-6 h-6" />,
    description: [
      'Identification des tâches chronophages',
      'Recommandations à fort ROI immédiat'
    ]
  },
  {
    title: 'Déploiement de solutions IA',
    icon: <Settings className="w-6 h-6" />,
    description: [
      'Intégration à vos outils (CRM, ERP, etc.)',
      'Automatisation sans code'
    ]
  },
  {
    title: 'Formation & accompagnement',
    icon: <Users className="w-6 h-6" />,
    description: [
      'Ateliers sur mesure pour vos équipes',
      'Sensibilisation et adoption rapide'
    ]
  },
  {
    title: 'Stratégie & Roadmap IA',
    icon: <FileText className="w-6 h-6" />,
    description: [
      'Feuille de route claire sur 6 à 24 mois',
      'Conformité RGPD & gouvernance IA'
    ]
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/5 via-transparent to-primary-50/20 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nos services s'adressent à diverses catégories d'entreprises, et reposent sur notre modèle 
            éprouvé de cartographie des processus.
          </p>
        </div>
        
        {/* Services Carousel */}
        <div className="mb-16">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="py-4">
              {servicesData.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                  <ServiceCard
                    title={service.title}
                    icon={service.icon}
                    description={service.description}
                    className="h-full"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative static mx-0 translate-y-0" />
              <CarouselNext className="relative static mx-0 translate-y-0" />
            </div>
          </Carousel>
        </div>
        
        <div className="mt-16 md:mt-24 bg-white rounded-lg shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          {/* Image à gauche */}
          <div className="flex-shrink-0">
            <img
              src="/public/ministere.avif" // Remplacez par le chemin correct de l'image
              alt="Ministère de l'Économie"
              className="w-48 h-auto" // Ajustez la taille selon vos besoins
            />
          </div>

          {/* Contenu à droite */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
              Et si votre transformation numérique ne vous coûtait rien ?
            </h3>
            <p className="text-lg mb-8 text-center md:text-left text-gray-700">
              De nombreuses aides sont disponibles pour soutenir la modernisation des PME et ETI :
            </p>
            <ul className="space-y-3 max-w-2xl mx-auto md:mx-0">
              <li className="flex items-start">
                <span className="text-accent-purple mr-2 text-xl">•</span>
                <span>Aides de l'État pour la transformation numérique</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-purple mr-2 text-xl">•</span>
                <span>Subventions régionales ou sectorielles</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-purple mr-2 text-xl">•</span>
                <span>Financements BPI pour l'innovation</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-purple mr-2 text-xl">•</span>
                <span>Aides OPCO pour les formations</span>
              </li>
            </ul>
            <div className="mt-8 text-center md:text-left">
              <CTAButton 
                href="https://www.economie.gouv.fr/cedef/fiches-pratiques/transformation-numerique-les-aides-aux-entreprises" 
                variant="outline" 
                className="mx-auto md:mx-0"
              >
                Voir les aides disponibles
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
