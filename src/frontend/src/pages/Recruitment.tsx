import Container from '../components/site/Container';
import Section from '../components/site/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { usePageMeta } from '../hooks/usePageMeta';
import { 
  Users, 
  Globe, 
  FileCheck, 
  Briefcase, 
  UserCheck, 
  ClipboardList,
  Building2,
  GraduationCap
} from 'lucide-react';

export default function Recruitment() {
  usePageMeta({
    title: 'Recruitment Services - Escoffiers Global Solutions Pvt Ltd',
    description: 'Professional recruitment services for the hospitality industry. Domestic and international placements for blue-collar and white-collar roles with full documentation support.',
  });

  return (
    <>
      <Section className="bg-muted/30 pt-24 pb-12">
        <Container>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Recruitment Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Connecting hospitality businesses with skilled professionals across India and internationally.
          </p>
        </Container>
      </Section>

      {/* Introduction */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-serif">Domestic Hiring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We help hospitality businesses across India find qualified candidates for restaurants, hotels, cafés, cloud kitchens, 
                    and catering operations. Our domestic recruitment services cover all major cities and regions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-serif">International Hiring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We support international placements for hospitality professionals seeking opportunities abroad. Our services include 
                    candidate screening, documentation assistance, and compliance support for overseas employment.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted/50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-4">What We Offer</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Escoffiers Global Solutions Pvt Ltd provides end-to-end recruitment services for the hospitality industry. We understand 
                the unique staffing needs of restaurants, hotels, and food service businesses. Our recruitment process is designed to 
                connect employers with qualified, reliable, and motivated professionals who can contribute to operational success.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you need front-of-house staff, kitchen professionals, management personnel, or specialized culinary talent, we 
                handle the entire hiring process—from candidate sourcing and screening to documentation and onboarding support.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Role Categories */}
      <Section className="bg-muted/30">
        <Container>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            Roles We Recruit For
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <UserCheck className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-serif">Blue-Collar Roles</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Kitchen Staff (Cooks, Helpers, Prep Cooks)</li>
                  <li>• Service Staff (Waiters, Stewards, Bartenders)</li>
                  <li>• Housekeeping & Cleaning Staff</li>
                  <li>• Delivery Personnel</li>
                  <li>• Kitchen Porters & Dishwashers</li>
                  <li>• Food Production Workers</li>
                  <li>• Maintenance & Support Staff</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-serif">White-Collar Roles</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Executive Chefs & Sous Chefs</li>
                  <li>• Restaurant Managers & Supervisors</li>
                  <li>• F&B Managers</li>
                  <li>• Operations Managers</li>
                  <li>• Hospitality Consultants</li>
                  <li>• Menu Development Specialists</li>
                  <li>• Training & Quality Control Managers</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Our Process */}
      <Section>
        <Container>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            Our Recruitment Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <ClipboardList className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif">1. Requirement Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We work with you to understand your staffing needs, job requirements, company culture, and hiring timeline.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif">2. Candidate Sourcing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We identify, screen, and shortlist qualified candidates from our network and active recruitment channels.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <FileCheck className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif">3. Placement & Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We facilitate interviews, assist with documentation, and provide onboarding support to ensure a smooth hiring process.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Documentation & Compliance */}
      <Section className="bg-muted/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <FileCheck className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Documentation & Compliance Support
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We assist with all necessary documentation and compliance requirements for both domestic and international placements. 
                Our services include guidance on employment contracts, work permits, visa documentation, background verification, and 
                regulatory compliance to ensure a smooth and legally compliant hiring process.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Call to Action */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-primary/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-serif">For Employers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Looking to hire skilled hospitality professionals? Submit your staffing requirements and let us connect you with 
                  qualified candidates who match your needs.
                </p>
                <Button asChild size="lg" className="w-full">
                  <Link to="/contact">Submit a Requirement</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-serif">For Job Seekers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Seeking opportunities in the hospitality industry? Get in touch with us to explore domestic and international 
                  job openings that match your skills and experience.
                </p>
                <Button asChild size="lg" variant="outline" className="w-full">
                  <Link to="/contact">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
