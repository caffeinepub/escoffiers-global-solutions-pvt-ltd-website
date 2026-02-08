import { useState } from 'react';
import Container from '../../components/site/Container';
import Section from '../../components/site/Section';
import { useGetAllInquiries, useGetInquiry } from '../../hooks/useInquiries';
import { usePageMeta } from '../../hooks/usePageMeta';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Mail, User, MessageSquare, Calendar } from 'lucide-react';
import type { ContactInquiry } from '../../backend';

export default function Inquiries() {
  const [selectedInquiryId, setSelectedInquiryId] = useState<bigint | null>(null);
  const { data: inquiries, isLoading, error } = useGetAllInquiries();
  const { data: selectedInquiry } = useGetInquiry(selectedInquiryId);

  usePageMeta({
    title: 'Inquiries - Admin Dashboard',
    description: 'View and manage contact inquiries.',
  });

  if (isLoading) {
    return (
      <Section className="pt-24">
        <Container>
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading inquiries...</p>
          </div>
        </Container>
      </Section>
    );
  }

  if (error) {
    return (
      <Section className="pt-24">
        <Container>
          <Card className="border-destructive">
            <CardContent className="pt-6">
              <p className="text-destructive">Error loading inquiries. Please try again.</p>
            </CardContent>
          </Card>
        </Container>
      </Section>
    );
  }

  return (
    <>
      <Section className="bg-muted/30 pt-24 pb-12">
        <Container>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-serif font-bold mb-2">Contact Inquiries</h1>
              <p className="text-muted-foreground">
                {inquiries?.length || 0} total {inquiries?.length === 1 ? 'inquiry' : 'inquiries'}
              </p>
            </div>
            <Badge variant="outline" className="text-lg px-4 py-2">
              Admin Dashboard
            </Badge>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          {!inquiries || inquiries.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg text-muted-foreground">No inquiries yet.</p>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>All Inquiries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Message Preview</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {inquiries.map((inquiry) => (
                        <TableRow key={inquiry.id.toString()} className="cursor-pointer hover:bg-muted/50">
                          <TableCell className="font-mono text-sm">{inquiry.id.toString()}</TableCell>
                          <TableCell className="font-medium">{inquiry.name}</TableCell>
                          <TableCell>{inquiry.email}</TableCell>
                          <TableCell className="max-w-xs truncate">{inquiry.message}</TableCell>
                          <TableCell>
                            <button
                              onClick={() => setSelectedInquiryId(inquiry.id)}
                              className="text-primary hover:underline font-medium"
                            >
                              View Details
                            </button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          )}
        </Container>
      </Section>

      <Dialog open={!!selectedInquiryId} onOpenChange={() => setSelectedInquiryId(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif">Inquiry Details</DialogTitle>
          </DialogHeader>
          {selectedInquiry && (
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">Name</p>
                  <p className="font-medium text-lg">{selectedInquiry.name}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a href={`mailto:${selectedInquiry.email}`} className="font-medium text-lg text-primary hover:underline">
                    {selectedInquiry.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-2">Message</p>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="whitespace-pre-wrap leading-relaxed">{selectedInquiry.message}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  Inquiry ID: <span className="font-mono">{selectedInquiry.id.toString()}</span>
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
