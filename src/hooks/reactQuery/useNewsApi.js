import { QUERY_KEYS } from "constants/query";

import newsApi from "apis/news";
import { useQuery } from "react-query";

export const useFetchNewsApi = searchTerm => {
  console.log("Searchterm is ", searchTerm);

  return useQuery({
    queryKey: [QUERY_KEYS.NEWS, searchTerm],
    queryFn: () => newsApi.fetch({ searchTerm }),
    enabled: !!searchTerm,
  });
};

export default useFetchNewsApi;
