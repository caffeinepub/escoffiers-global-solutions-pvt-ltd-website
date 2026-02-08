import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ContactInquiry } from '../backend';

export function useGetAllInquiries() {
  const { actor, isFetching } = useActor();

  return useQuery<ContactInquiry[]>({
    queryKey: ['inquiries'],
    queryFn: async () => {
      if (!actor) {
        throw new Error('Actor not available');
      }
      return actor.getAllInquiries();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetInquiry(inquiryId: bigint | null) {
  const { actor, isFetching } = useActor();

  return useQuery<ContactInquiry>({
    queryKey: ['inquiry', inquiryId?.toString()],
    queryFn: async () => {
      if (!actor || !inquiryId) {
        throw new Error('Actor or inquiry ID not available');
      }
      return actor.getInquiry(inquiryId);
    },
    enabled: !!actor && !isFetching && inquiryId !== null,
  });
}
