import Form from "@/components/Form";
import List from "@/components/List";
import { useState } from "react";

export default function HomePage() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(newTodo) {
    setTodos([newTodo, ...todos]);
  }

  return (
    <div>
      <h1>Hello from Next.js</h1>
      <List todos={todos} />
      <Form onAddTodo={handleAddTodo} />
    </div>
  );
}
