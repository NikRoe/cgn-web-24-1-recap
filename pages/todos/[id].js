import Link from "next/link";
import { useRouter } from "next/router";

export default function DetailPage({ todos }) {
  const router = useRouter();
  const { id } = router.query;

  const todo = todos.find((singleTodo) => singleTodo.id === id);

  return (
    <>
      <h2>{todo.title}</h2>
      <Link href="/">Go back to homepage</Link>
    </>
  );
}
