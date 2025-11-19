import { fetchPostById } from "@/api/post";
import { QUERY_KEYS } from "@/lib/constant";
import { useSession } from "@/store/session";
import { useQuery } from "@tanstack/react-query";

export function usePostByIdData({
  postId,
  type,
}: {
  postId: number;
  type: "FEED" | "DETAIL";
}) {
  const session = useSession();

  return useQuery({
    queryKey: QUERY_KEYS.post.byId(postId),
    queryFn: () => {
      return fetchPostById({
        postId,
        userId: session!.user.id,
      });
    },
    enabled: type === "FEED" ? false : true,
  });
}
