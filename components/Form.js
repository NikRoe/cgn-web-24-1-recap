export default function Form({ onAddTodo }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddTodo(data);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Todo: </label>
      <input type="text" id="title" name="title" />
      <button type="submit">Add new todo</button>
    </form>
  );
}
