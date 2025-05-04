
import React, { useEffect, useState } from 'react';
import ServiceCard from '@/components/ui/ServiceCard';
import { Search, Settings, Users, FileText } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
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
  const [api, setApi] = useState<any>(null);
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  // Determine how many items to show based on screen width
  const [itemsToShow, setItemsToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(4); // Desktop shows all 4 items
      } else if (window.innerWidth >= 768) {
        setItemsToShow(2); // Tablet shows 2 items
      } else {
        setItemsToShow(1); // Mobile shows 1 item
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
              slidesToScroll: 1,
            }}
            plugins={[plugin.current]}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {servicesData.map((service, index) => (
                <CarouselItem 
                  key={index} 
                  className={`pl-2 md:pl-4 ${
                    itemsToShow === 4 ? 'basis-1/4' : 
                    itemsToShow === 2 ? 'basis-1/2' : 
                    'basis-full'
                  }`}
                >
                  <div className="p-1">
                    <ServiceCard
                      title={service.title}
                      icon={service.icon}
                      description={service.description}
                      className="h-full"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center items-center gap-2 mt-8">
              {servicesData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    api?.selectedScrollSnap() === index
                      ? "bg-accent-purple scale-125"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </div>
        
        <div className="mt-16 md:mt-24 bg-white rounded-lg shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          {/* Image à gauche */}
          <div className="flex-shrink-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Minist%C3%A8re_de_l%E2%80%99%C3%89conomie_des_Finances_et_de_la_Souverainet%C3%A9_industrielle_et_num%C3%A9rique.svg" // Remplacez par le chemin correct de l'image
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
