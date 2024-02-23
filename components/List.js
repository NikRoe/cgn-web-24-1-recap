import Card from "./Card";

export default function List({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <Card key={todo.title} title={todo.title} />
      ))}
    </ul>
  );
}
