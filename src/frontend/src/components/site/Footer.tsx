import { Link } from '@tanstack/react-router';
import Container from './Container';
import BrandLogo from './BrandLogo';
import { Mail, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname)
    : 'escoffiers-app';

  return (
    <footer className="border-t bg-muted/30">
      <Container>
        <div className="py-12 grid md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <BrandLogo variant="logo-with-text" size="sm" linkTo="/" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Expert restaurant consulting and hospitality services in India since 2013.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link to="/recruitment" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Recruitment
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>India</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@escoffiers.com" className="hover:text-foreground transition-colors">
                  info@escoffiers.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t py-6 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()}. Built with <Heart className="inline w-4 h-4 text-red-500" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
