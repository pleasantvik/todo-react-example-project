export const TodoList = (props) => {
  console.log(props.todos);
  return (
    <ul>
      {props.todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
