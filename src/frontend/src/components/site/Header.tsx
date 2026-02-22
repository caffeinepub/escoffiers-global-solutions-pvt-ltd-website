import { useState } from 'react';
import { Link, useRouterState, useNavigate } from '@tanstack/react-router';
import Container from './Container';
import BrandLogo from './BrandLogo';
import LoginButton from '../auth/LoginButton';
import AdminNavLink from '../admin/AdminNavLink';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/recruitment', label: 'Recruitment' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouterState();
  const navigate = useNavigate();
  const currentPath = router.location.pathname;

  const isActive = (path: string) => {
    if (path === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(path);
  };

  const handleNavClick = (to: string) => {
    setIsOpen(false);
    navigate({ to });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <BrandLogo variant="logo-with-text" size="md" linkTo="/" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.to) ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <AdminNavLink />
            <LoginButton />
          </nav>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-2">
            <LoginButton />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <button
                      key={link.to}
                      onClick={() => handleNavClick(link.to)}
                      className={`text-left text-lg font-medium transition-colors hover:text-primary ${
                        isActive(link.to) ? 'text-primary' : 'text-muted-foreground'
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                  <AdminNavLink />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}
