import { useTodoDataById } from "@/hooks/queries/use-todo-data-by-id";
import { useParams } from "react-router";

export default function TodoDetailPage() {
  const { id } = useParams();
  const { data, isLoading, error } = useTodoDataById(String(id), "DETAIL");

  if (error || !data) return <div>오류가 발생했습니다.</div>;

  if (isLoading) return <div>로딩중...</div>;

  return <div>{data.content}</div>;
}
