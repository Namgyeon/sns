import CommentItem from "@/components/comment/comment-item";
import Fallback from "@/components/fallback";
import Loader from "@/components/loader";
import { useCommentsData } from "@/hooks/queries/use-comments-data";

export default function CommentList({ postId }: { postId: number }) {
  const {
    data: comments,
    error: fetchingCommentsError,
    isPending: isFetchCommentsPending,
  } = useCommentsData(postId);

  if (isFetchCommentsPending) return <Loader />;
  if (fetchingCommentsError) return <Fallback />;

  return (
    <div className="flex flex-col gap-5">
      {comments.map((comment) => (
        <CommentItem key={comment.id} {...comment} />
      ))}
    </div>
  );
}
