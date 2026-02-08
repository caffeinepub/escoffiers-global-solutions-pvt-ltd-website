import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { toast } from 'sonner';

interface InquiryData {
  name: string;
  email: string;
  message: string;
}

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: InquiryData) => {
      if (!actor) {
        throw new Error('Actor not available');
      }
      const inquiryId = await actor.submitInquiry(data.name, data.email, data.message);
      return inquiryId;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inquiries'] });
      toast.success('Inquiry submitted successfully!');
    },
    onError: (error: Error) => {
      toast.error('Failed to submit inquiry. Please try again.');
      console.error('Submit inquiry error:', error);
    },
  });
}
