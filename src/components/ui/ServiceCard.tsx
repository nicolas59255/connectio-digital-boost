
import { cn } from '@/lib/utils';
import React from 'react';

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  description: string[];
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  icon,
  description,
  className,
}) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-lg p-6 shadow-md flex flex-col h-full card-hover",
        className
      )}
    >
      <div className="text-accent-cyan mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-accent-cyan/10">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600 flex-grow">
        {description.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-accent-purple mr-2">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
