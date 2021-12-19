import { useQuery, useInfiniteQuery, useQueries } from 'react-query';
import { runGETusers, runGETInfinityNotes } from '../_RESTClient/RESTApi';

const useQueryWrapper = (keyName, baseUrl) =>
  useQuery(keyName, () => runGETusers(baseUrl), {
    refetchOnWindowFocus: false,
  });

const useMultiQuery = (keyName, sharedArray) =>
  useQueries(
    sharedArray?.map((sharedLink) => ({
      queryKey: [keyName, sharedLink],
      queryFn: () => runGETusers(sharedLink),
    })) ?? []
  );

const useInfinityWrapper = (keyName, pageLimit, pageStep, userStatus) =>
  useInfiniteQuery(keyName, runGETInfinityNotes, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < pageLimit && userStatus) {
        return pages.length + pageStep;
      }
      return undefined;
    },
    refetchOnWindowFocus: false,
  });
export { useQueryWrapper, useInfinityWrapper, useMultiQuery };
