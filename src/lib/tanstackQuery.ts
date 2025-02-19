import { QueryClient } from '@tanstack/react-query';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

const MINUTE = 1000 * 60;
// const HOUR = MINUTE * 60;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      gcTime: 1 * MINUTE,
    },
  },
});

export const persister = createSyncStoragePersister({
  storage: window.localStorage,
});
