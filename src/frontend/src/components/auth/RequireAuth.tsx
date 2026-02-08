import { ReactNode } from 'react';
import { useInternetIdentity } from '../../hooks/useInternetIdentity';
import LoginButton from './LoginButton';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Container from '../site/Container';
import Section from '../site/Section';
import { ShieldAlert } from 'lucide-react';

interface RequireAuthProps {
  children: ReactNode;
}

export default function RequireAuth({ children }: RequireAuthProps) {
  const { identity, isInitializing } = useInternetIdentity();

  if (isInitializing) {
    return (
      <Section className="pt-24">
        <Container>
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </Container>
      </Section>
    );
  }

  if (!identity) {
    return (
      <Section className="pt-24">
        <Container>
          <Card className="max-w-md mx-auto">
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <ShieldAlert className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-serif">Authentication Required</CardTitle>
              <CardDescription>
                You need to sign in to access this page.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <LoginButton />
            </CardContent>
          </Card>
        </Container>
      </Section>
    );
  }

  return <>{children}</>;
}
