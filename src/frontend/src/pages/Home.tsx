import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Container from '../components/site/Container';
import Section from '../components/site/Section';
import { usePageMeta } from '../hooks/usePageMeta';
import { ChefHat, Users, TrendingUp, Award } from 'lucide-react';

export default function Home() {
  usePageMeta({
    title: 'Escoffiers Global Solutions Pvt Ltd - Restaurant Consulting & Hospitality Services',
    description: 'Expert restaurant consulting and hospitality services in India since 2013. We help build strong, profitable, and sustainable food businesses.',
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/assets/generated/hero-bg.dim_1920x1080.png)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>
        <Container className="relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-4">
              <img
                src="/assets/generated/escoffiers-wordmark.dim_1200x300.png"
                alt="Escoffiers Global Solutions"
                className="h-16 w-auto"
              />
              <span className="text-3xl font-semibold text-foreground">
                Escoffiers
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              Building a Different Business Path
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Practical consulting, kitchen design, menu development, operations, and recruitment services for hospitality businesses in India and abroad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Introduction Section */}
      <Section className="bg-muted/30">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Your Partner in Profitable Hospitality
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Escoffiers Global Solutions Pvt Ltd is a restaurant consulting and hospitality services company operating in India since 2013. 
              We help new and existing food businesses build strong, profitable, and well-structured operations. With a registered Indian 
              trademark and more than a decade of hands-on industry experience, we provide end-to-end support for restaurants, cafés, 
              cloud kitchens, and hospitality ventures—including professional recruitment services for domestic and international placements.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Key Features */}
      <Section>
        <Container>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            Why Choose Escoffiers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Proven Expertise</h3>
                <p className="text-muted-foreground">
                  Over a decade of hands-on experience in restaurant consulting, hospitality management, and workforce solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <ChefHat className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">End-to-End Solutions</h3>
                <p className="text-muted-foreground">
                  From concept to execution, we support every stage of your food business journey—including staffing and recruitment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Results-Driven</h3>
                <p className="text-muted-foreground">
                  Practical solutions focused on improving quality, profitability, customer experience, and operational efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Trusted Partner</h3>
                <p className="text-muted-foreground">
                  Supporting entrepreneurs, chefs, and established brands across India with consulting and recruitment expertise.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-primary-foreground">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Transform Your Food Business?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss how we can help you build a strong, profitable, and sustainable operation with the right team in place.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
