import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Clock } from 'lucide-react';

export default function ContactDetails() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-serif">Get in Touch</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium mb-1">Location</p>
              <p className="text-sm text-muted-foreground">India</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium mb-1">Email</p>
              <a
                href="mailto:info@escoffiers.com"
                className="text-sm text-primary hover:underline"
              >
                info@escoffiers.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium mb-1">Business Hours</p>
              <p className="text-sm text-muted-foreground">Monday - Saturday</p>
              <p className="text-sm text-muted-foreground">9:00 AM - 6:00 PM IST</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-primary text-primary-foreground">
        <CardContent className="pt-6">
          <p className="text-sm leading-relaxed opacity-90">
            We typically respond to inquiries within 24-48 hours during business days.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
