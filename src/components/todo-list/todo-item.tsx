import { Button } from "@/components/ui/button";
import { useDeleteTodoMutation } from "@/hooks/mutations/use-delete-todo-mutaions";
import { useUpdateTodoMutation } from "@/hooks/mutations/use-update-todo-mutations";
import { useTodoDataById } from "@/hooks/queries/use-todo-data-by-id";
import { Link } from "react-router";

export default function TodoItem({ id }: { id: string }) {
  const { data: todo } = useTodoDataById(id, "LIST");
  if (!todo) throw new Error("Todo not found");
  const { content, isDone } = todo;

  const { mutate: deleteTodo, isPending: isDeletePending } =
    useDeleteTodoMutation();
  const { mutate: updateTodo } = useUpdateTodoMutation();

  const handleCheckboxClick = () => {
    updateTodo({
      id,
      isDone: !isDone,
    });
  };

  const handleDeleteClick = () => {
    deleteTodo(id);
  };

  return (
    <div className="flex items-center justify-between border p-2">
      <div className="flex items-center gap-5">
        <input
          disabled={isDeletePending}
          type="checkbox"
          checked={isDone}
          onClick={handleCheckboxClick}
        />
        <Link to={`/todolist/${id}`}>{content}</Link>
      </div>
      <Button
        disabled={isDeletePending}
        variant="destructive"
        onClick={handleDeleteClick}
      >
        삭제
      </Button>
    </div>
  );
}
