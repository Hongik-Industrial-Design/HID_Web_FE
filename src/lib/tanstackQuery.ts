import { QueryClient } from '@tanstack/react-query';

const MINUTE = 1000 * 60;
const HOUR = MINUTE * 60;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * MINUTE,
      gcTime: 1 * HOUR,
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});
