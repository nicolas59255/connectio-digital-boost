
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import TestimonialCard from '@/components/ui/TestimonialCard';

const testimonials = [
  {
    name: "Sophie Martin",
    company: "PME Consulting",
    position: "Directrice Générale",
    testimonial: "L'audit IA a révélé des opportunités que nous n'avions pas envisagées. Aujourd'hui, notre productivité a augmenté de 30% grâce aux solutions implémentées par Connectio.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  },
  {
    name: "Thomas Dubois",
    company: "TechSolutions",
    position: "CTO",
    testimonial: "La formation de nos équipes a été un véritable succès. L'approche pédagogique et pragmatique nous a permis d'adopter l'IA sans friction. Bravo à toute l'équipe !",
    rating: 5
  },
  {
    name: "Claire Leroy",
    company: "Retail Excellence",
    position: "Responsable Innovation",
    testimonial: "Les outils d'IA déployés ont transformé notre relation client. La personnalisation est maintenant au cœur de notre stratégie et nos taux de conversion ont explosé.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
  },
  {
    name: "Philippe Girard",
    company: "Manufacture Régionale",
    position: "Directeur Production",
    testimonial: "Nous avons bénéficié des aides de l'État grâce à l'accompagnement de Connectio. Notre projet de transformation a été financé à 70%, un vrai coup de pouce !",
    rating: 5
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white via-primary-50/20 to-accent-purple/5 relative overflow-hidden">
      {/* Cercles décoratifs */}
      <div className="absolute top-40 -left-20 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-purple rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary-600 font-medium mb-2">PAROLES DE CLIENTS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ils ont transformé leur entreprise avec l'IA
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nos clients utilisent l'intelligence artificielle pour gagner en efficacité, 
            réduire leurs coûts et améliorer leur offre.
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <TestimonialCard
                    name={testimonial.name}
                    company={testimonial.company}
                    position={testimonial.position}
                    testimonial={testimonial.testimonial}
                    rating={testimonial.rating}
                    image={testimonial.image}
                    className="h-full"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:flex justify-center mt-8 gap-2">
            <CarouselPrevious className="static translate-y-0 mx-2" />
            <CarouselNext className="static translate-y-0 mx-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
