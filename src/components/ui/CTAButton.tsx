
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'default' | 'secondary' | 'outline';
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  href,
  variant = 'default',
  className,
  showArrow = true,
  onClick,
}) => {
  const buttonContent = (
    <>
      <span>{children}</span>
      {showArrow && <ArrowRight className="ml-2 h-4 w-4" />}
    </>
  );

  if (href) {
    return (
      <Button 
        variant={variant} 
        className={cn("font-medium", className)}
        asChild
      >
        <a href={href}>{buttonContent}</a>
      </Button>
    );
  }

  return (
    <Button 
      variant={variant} 
      className={cn("font-medium", className)}
      onClick={onClick}
    >
      {buttonContent}
    </Button>
  );
};

export default CTAButton;
