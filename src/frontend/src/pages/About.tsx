import Container from '../components/site/Container';
import Section from '../components/site/Section';
import { usePageMeta } from '../hooks/usePageMeta';

export default function About() {
  usePageMeta({
    title: 'About Us - Escoffiers Global Solutions Pvt Ltd',
    description: 'Learn about Escoffiers Global Solutions Pvt Ltd, a restaurant consulting and hospitality services company operating in India since 2013.',
  });

  return (
    <>
      <Section className="bg-muted/30 pt-24 pb-12">
        <Container>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Building strong, profitable, and sustainable food businesses across India since 2013.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-serif font-bold mb-6">Who We Are</h2>
            <p className="text-lg leading-relaxed mb-6">
              Escoffiers Global Solutions Pvt Ltd is a restaurant consulting and hospitality services company operating in India since 2013. 
              We help new and existing food businesses build strong, profitable, and well-structured operations. With a registered Indian 
              trademark and more than a decade of hands-on industry experience, we provide end-to-end support for restaurants, cafés, 
              cloud kitchens, and hospitality ventures.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Our work covers every stage of the food business journey. From creating new restaurant concepts to designing efficient kitchens, 
              developing menus, training staff, improving operations, and guiding franchise expansion, we focus on practical solutions that 
              deliver real business results. Over the years, we have supported entrepreneurs, chefs, start-ups, and established brands in 
              building sustainable and successful food ventures.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              In addition to consulting services, we offer professional recruitment solutions for the hospitality industry. We connect 
              employers with skilled talent for both blue-collar and white-collar roles, supporting domestic placements across India and 
              international opportunities abroad. Our recruitment services include documentation support, compliance guidance, and end-to-end 
              hiring assistance.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Escoffiers Global Solutions Pvt Ltd stands for professionalism, accountability, and long-term value. We work closely with every 
              client to understand their goals and challenges, and we create clear, workable strategies that improve quality, profitability, 
              and customer experience.
            </p>

            <div className="bg-muted/50 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-serif font-bold mb-4">Our Mission</h2>
              <p className="text-lg leading-relaxed">
                To provide practical, professional, and profitable solutions for restaurants and hospitality businesses. We help brands 
                strengthen operations, improve culinary standards, build sustainable food ventures through expert consulting, and connect 
                them with the right talent to succeed.
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-serif font-bold mb-4">Our Vision</h2>
              <p className="text-lg leading-relaxed">
                To be India's most trusted restaurant consulting and hospitality recruitment company, recognised for creating successful 
                F&B brands, designing efficient kitchens, helping entrepreneurs build strong and profitable hospitality businesses, and 
                connecting skilled professionals with rewarding career opportunities.
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-8">
              <h2 className="text-2xl font-serif font-bold mb-4">Our Values</h2>
              <ul className="space-y-3 text-lg leading-relaxed">
                <li><strong>Professionalism:</strong> We maintain the highest standards in every project and interaction.</li>
                <li><strong>Accountability:</strong> We take ownership of our commitments and deliver measurable results.</li>
                <li><strong>Quality:</strong> We focus on excellence in consulting, operations, and recruitment services.</li>
                <li><strong>Integrity:</strong> We build trust through honest communication and ethical business practices.</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
