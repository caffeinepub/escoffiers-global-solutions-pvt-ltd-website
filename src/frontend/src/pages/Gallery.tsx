import Container from '../components/site/Container';
import Section from '../components/site/Section';
import { usePageMeta } from '../hooks/usePageMeta';
import { Card, CardContent } from '@/components/ui/card';
import { ChefHat, Utensils, Building2, Users, Award, TrendingUp } from 'lucide-react';

export default function Gallery() {
  usePageMeta({
    title: 'Gallery - Escoffiers Global Solutions',
    description: 'Explore our portfolio of successful restaurant consulting projects, kitchen designs, and hospitality solutions across India.',
  });

  const projectCategories = [
    {
      icon: ChefHat,
      title: 'Kitchen Design',
      description: 'Professional kitchen layouts optimized for efficiency and workflow',
      count: '50+ Projects',
    },
    {
      icon: Utensils,
      title: 'Restaurant Concepts',
      description: 'Complete restaurant setups from concept to launch',
      count: '30+ Venues',
    },
    {
      icon: Building2,
      title: 'Cloud Kitchens',
      description: 'Modern delivery-focused kitchen operations',
      count: '20+ Setups',
    },
    {
      icon: Users,
      title: 'Team Building',
      description: 'Successful recruitment and training programs',
      count: '100+ Placements',
    },
    {
      icon: Award,
      title: 'Menu Development',
      description: 'Innovative and profitable menu designs',
      count: '40+ Menus',
    },
    {
      icon: TrendingUp,
      title: 'Business Growth',
      description: 'Operational improvements and profitability enhancements',
      count: '60+ Clients',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Our Work & Achievements
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Over a decade of successful projects across India, helping food businesses thrive through expert consulting, design, and recruitment services.
            </p>
          </div>
        </Container>
      </section>

      {/* Project Categories */}
      <Section>
        <Container>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            Our Expertise in Action
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">{category.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                      <span className="text-sm font-semibold text-primary">{category.count}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Success Stories */}
      <Section className="bg-muted/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
              Success Stories
            </h2>
            <div className="space-y-8">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-3">Restaurant Turnaround</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Helped a struggling fine-dining restaurant in Mumbai improve operational efficiency by 40% and increase profitability through menu optimization, staff training, and kitchen workflow redesign.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Menu Development</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Operations</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Training</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-3">Cloud Kitchen Launch</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Designed and launched a multi-brand cloud kitchen in Bangalore, achieving break-even within 6 months through strategic kitchen layout, efficient operations, and skilled team recruitment.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Kitchen Design</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Concept Development</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Recruitment</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-3">International Placement Success</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Successfully placed 15 skilled hospitality professionals in premium hotels and restaurants across the Middle East, ensuring proper documentation, training, and smooth transitions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Recruitment</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">International</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Documentation</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Statistics */}
      <Section>
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
              Our Impact by Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">Successful Placements</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-primary-foreground">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's work together to create your next successful hospitality project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium rounded-md bg-background text-foreground hover:bg-background/90 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium rounded-md border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                View Services
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
