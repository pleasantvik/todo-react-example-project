export const TodoList = (props) => {
  console.log(props.todos);
  return (
    <>
      <h2>TodoList Component</h2>
      <p>I am shpwing the list of todo now</p>
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
};
