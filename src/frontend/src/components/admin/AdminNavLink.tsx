import { Link } from '@tanstack/react-router';
import { useInternetIdentity } from '../../hooks/useInternetIdentity';
import { Shield } from 'lucide-react';

interface AdminNavLinkProps {
  mobile?: boolean;
  onNavigate?: () => void;
}

export default function AdminNavLink({ mobile, onNavigate }: AdminNavLinkProps) {
  const { identity } = useInternetIdentity();

  if (!identity) {
    return null;
  }

  if (mobile) {
    return (
      <Link
        to="/admin/inquiries"
        onClick={onNavigate}
        className="px-4 py-3 rounded-md text-base font-medium text-foreground/80 hover:bg-muted hover:text-foreground transition-colors flex items-center gap-2"
      >
        <Shield className="w-4 h-4" />
        Admin
      </Link>
    );
  }

  return (
    <Link
      to="/admin/inquiries"
      className="px-4 py-2 rounded-md text-sm font-medium text-foreground/80 hover:bg-muted hover:text-foreground transition-colors flex items-center gap-2"
    >
      <Shield className="w-4 h-4" />
      Admin
    </Link>
  );
}
