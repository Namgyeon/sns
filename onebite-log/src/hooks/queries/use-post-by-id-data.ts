import { fetchPostById } from "@/api/post";
import { QUERY_KEYS } from "@/lib/constant";
import { useQuery } from "@tanstack/react-query";

export function usePostByIdData({
  postId,
  type,
}: {
  postId: number;
  type: "FEED" | "DETAIL";
}) {
  return useQuery({
    queryKey: QUERY_KEYS.post.byId(postId),
    queryFn: () => {
      return fetchPostById(postId);
    },
    enabled: type === "FEED" ? false : true,
  });
}
