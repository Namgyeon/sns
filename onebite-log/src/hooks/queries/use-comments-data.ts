import { fetchComments } from "@/api/comment";
import { QUERY_KEYS } from "@/lib/constant";
import { useQuery } from "@tanstack/react-query";

export function useCommentsData(postId: number) {
  return useQuery({
    queryKey: QUERY_KEYS.comment.post(postId),
    queryFn: () => fetchComments(postId),
  });
}
