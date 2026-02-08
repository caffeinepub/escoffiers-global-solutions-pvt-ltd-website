import Container from '../components/site/Container';
import Section from '../components/site/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { usePageMeta } from '../hooks/usePageMeta';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { 
  Lightbulb, 
  LayoutGrid, 
  UtensilsCrossed, 
  ClipboardCheck, 
  GraduationCap, 
  TrendingUp, 
  RefreshCw 
} from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: 'Restaurant Concept Development & Setup',
    description: 'Transform your vision into reality with comprehensive restaurant concept development, brand positioning, market research, and complete setup support from planning to launch.',
  },
  {
    icon: LayoutGrid,
    title: 'Kitchen Layout & Workflow Design',
    description: 'Optimize your kitchen operations with efficient layout planning, equipment selection, workflow design, and space utilization that maximizes productivity and minimizes waste.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Menu Engineering & Recipe Development',
    description: 'Create profitable, appealing menus with expert recipe development, accurate costing, portion control, strategic menu engineering, and culinary innovation for maximum margins.',
  },
  {
    icon: ClipboardCheck,
    title: 'Operational Audits & Process Improvement',
    description: 'Identify inefficiencies and implement improvements with comprehensive operational audits, process optimization, quality control systems, and performance tracking.',
  },
  {
    icon: GraduationCap,
    title: 'Staff Training & Management Support',
    description: 'Build a skilled, motivated team with customized training programs, standard operating procedures, service excellence coaching, and ongoing management guidance.',
  },
  {
    icon: TrendingUp,
    title: 'Franchise Development & Expansion',
    description: 'Scale your successful concept with strategic franchise planning, operations manuals, training systems, quality control frameworks, and multi-location expansion support.',
  },
  {
    icon: RefreshCw,
    title: 'Turnaround Consulting',
    description: 'Revive underperforming restaurants with diagnostic analysis, strategic repositioning, operational restructuring, cost optimization, and comprehensive performance improvement plans.',
  },
];

export default function Services() {
  usePageMeta({
    title: 'Our Services - Escoffiers Global Solutions Pvt Ltd',
    description: 'Comprehensive restaurant consulting services including concept development, kitchen design, menu engineering, staff training, and operational improvement.',
  });

  return (
    <>
      <Section className="bg-muted/30 pt-24 pb-12">
        <Container>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Comprehensive consulting solutions for every stage of your food business journey—from concept to execution, operations to expansion.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We provide end-to-end restaurant consulting services designed to help you build, improve, and scale your food business. 
              Whether you're launching a new concept, optimizing existing operations, or expanding through franchising, our team brings 
              practical expertise and proven strategies to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-serif">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/30">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Let's Discuss Your Project
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every food business is unique. We tailor our services to meet your specific needs, goals, and budget. Contact us today 
              to discuss how we can help you succeed.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
