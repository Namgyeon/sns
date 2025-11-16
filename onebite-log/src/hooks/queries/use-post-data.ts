import { fetchPosts } from "@/api/post";
import { QUERY_KEYS } from "@/lib/constant";
import { useQuery } from "@tanstack/react-query";

export function usePostData() {
  return useQuery({
    queryKey: QUERY_KEYS.post.list,
    queryFn: () => fetchPosts(),
  });
}
