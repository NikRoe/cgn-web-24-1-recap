import Form from "@/components/Form";
import List from "@/components/List";

export default function HomePage({ todos, handleAddTodo }) {
  return (
    <div>
      <List todos={todos} />
      <Form onAddTodo={handleAddTodo} />
    </div>
  );
}
