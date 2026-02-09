import { Link } from '@tanstack/react-router';
import { BRANDING } from '@/config/branding';

interface BrandLogoProps {
  variant?: 'logo-only' | 'logo-with-text' | 'wordmark';
  size?: 'sm' | 'md' | 'lg';
  linkTo?: string;
  className?: string;
}

export default function BrandLogo({ 
  variant = 'logo-with-text', 
  size = 'md',
  linkTo = '/',
  className = ''
}: BrandLogoProps) {
  // Static size mappings for reliable Tailwind class generation
  const logoSizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-16 w-16',
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl',
  };

  // Static wordmark height mappings (no dynamic class construction)
  const wordmarkSizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-16',
  };

  const content = (
    <>
      {variant === 'logo-only' && (
        <img
          src={BRANDING.logo}
          alt={BRANDING.name}
          className={`${logoSizeClasses[size]} object-contain aspect-square`}
        />
      )}
      {variant === 'logo-with-text' && (
        <div className={`flex items-center gap-3 ${className}`}>
          <img
            src={BRANDING.logo}
            alt={BRANDING.name}
            className={`${logoSizeClasses[size]} object-contain aspect-square`}
          />
          <span className={`${textSizeClasses[size]} font-semibold text-foreground`}>
            {BRANDING.name}
          </span>
        </div>
      )}
      {variant === 'wordmark' && (
        <img
          src={BRANDING.wordmark}
          alt={BRANDING.name}
          className={`${wordmarkSizeClasses[size]} w-auto object-contain ${className}`}
        />
      )}
    </>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="inline-flex">
        {content}
      </Link>
    );
  }

  return <div className="inline-flex">{content}</div>;
}
