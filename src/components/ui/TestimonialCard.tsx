
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import React from 'react';

interface TestimonialCardProps {
  name: string;
  company: string;
  position: string;
  testimonial: string;
  rating: number;
  image?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  company,
  position,
  testimonial,
  rating,
  image,
  className,
}) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-xl p-6 md:p-8 shadow-lg relative overflow-hidden h-full border border-gray-100",
        className
      )}
    >
      {/* Effet décoratif en arrière-plan */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-50 to-transparent rounded-bl-full -z-10" />
      
      <div className="flex items-center mb-6 space-x-4">
        {image ? (
          <div className="flex-shrink-0">
            <img
              src={image}
              alt={name}
              className="w-16 h-16 rounded-full object-cover border-2 border-primary-100"
            />
          </div>
        ) : (
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-300 to-accent-purple flex items-center justify-center text-white text-xl font-bold">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-semibold text-lg">{name}</h4>
          <p className="text-gray-600 text-sm">
            {position}, {company}
          </p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-4 h-4",
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            )}
          />
        ))}
      </div>
      
      <blockquote className="text-gray-700 italic relative">
        <span className="absolute -left-2 -top-2 text-4xl text-primary-100">"</span>
        <p className="relative z-10 pl-2">{testimonial}</p>
        <span className="absolute -right-1 bottom-0 text-4xl text-primary-100">"</span>
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
