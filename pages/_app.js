import { useState } from "react";
import GlobalStyle from "../styles";
import { nanoid } from "nanoid";

import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(newTodo) {
    setTodos([{ ...newTodo, id: nanoid() }, ...todos]);
  }
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} todos={todos} handleAddTodo={handleAddTodo} />
      </Layout>
    </>
  );
}
