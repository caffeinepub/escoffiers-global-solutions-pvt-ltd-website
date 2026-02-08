import { useState } from 'react';
import Container from '../components/site/Container';
import Section from '../components/site/Section';
import ContactForm from '../components/contact/ContactForm';
import ContactDetails from '../components/contact/ContactDetails';
import { usePageMeta } from '../hooks/usePageMeta';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);

  usePageMeta({
    title: 'Contact Us - Escoffiers Global Solutions Pvt Ltd',
    description: 'Get in touch with Escoffiers Global Solutions for expert restaurant consulting and hospitality services. We are here to help your food business succeed.',
  });

  return (
    <>
      <Section className="bg-muted/30 pt-24 pb-12">
        <Container>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Ready to transform your food business? Get in touch with our team today. We're here to answer your questions and discuss how we can help you succeed.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          {showSuccess ? (
            <Card className="max-w-2xl mx-auto border-2 border-primary/50">
              <CardContent className="pt-12 pb-12 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl font-serif font-bold mb-4">Thank You!</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Your inquiry has been successfully submitted. Our team will review your message and get back to you within 24-48 hours.
                </p>
                <button
                  onClick={() => setShowSuccess(false)}
                  className="text-primary hover:underline font-medium"
                >
                  Submit Another Inquiry
                </button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <ContactForm onSuccess={() => setShowSuccess(true)} />
              </div>
              <div>
                <ContactDetails />
              </div>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
