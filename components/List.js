import Link from "next/link";
import Card from "./Card";

export default function List({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <Link key={todo.id} href={`/todos/${todo.id}`}>
          <Card title={todo.title} />
        </Link>
      ))}
    </ul>
  );
}
