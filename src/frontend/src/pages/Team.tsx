import Container from '../components/site/Container';
import Section from '../components/site/Section';
import { usePageMeta } from '../hooks/usePageMeta';
import { Users, Award, Target, Briefcase } from 'lucide-react';

export default function Team() {
  usePageMeta({
    title: 'Our Team - Escoffiers Global Solutions Pvt Ltd',
    description: 'Meet the experienced professionals behind Escoffiers Global Solutions, bringing decades of combined expertise in restaurant consulting and hospitality services.',
  });

  return (
    <>
      <Section className="bg-muted/30 pt-24 pb-12">
        <Container>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Experienced professionals dedicated to building successful food businesses across India.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mb-12">
              <p className="text-lg leading-relaxed">
                At Escoffiers Global Solutions Pvt Ltd, our strength lies in our team of seasoned hospitality professionals. 
                With decades of combined experience in restaurant operations, culinary excellence, business development, and 
                talent acquisition, we bring practical expertise to every project we undertake.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-muted/50 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-2">Industry Expertise</h3>
                    <p className="text-muted-foreground">
                      Our consultants have worked with leading restaurant brands, hotels, and food businesses across India, 
                      bringing real-world insights to every engagement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-2">Results-Driven</h3>
                    <p className="text-muted-foreground">
                      We focus on measurable outcomes—improved profitability, operational efficiency, customer satisfaction, 
                      and sustainable growth for our clients.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-2">Collaborative Approach</h3>
                    <p className="text-muted-foreground">
                      We work closely with business owners, chefs, and management teams to understand unique challenges 
                      and create tailored solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-2">Comprehensive Services</h3>
                    <p className="text-muted-foreground">
                      From concept development to recruitment, our team covers every aspect of restaurant and hospitality 
                      business success.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-4">Our Expertise Spans</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Restaurant concept development and branding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Kitchen design and equipment planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Menu engineering and culinary innovation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Operations management and optimization</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Staff training and development programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Franchise development and expansion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Hospitality recruitment and talent acquisition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Business strategy and financial planning</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-serif font-bold mb-4">Work With Us</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you're launching a new restaurant, improving existing operations, or looking for skilled hospitality 
                professionals, our team is ready to help you succeed.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
