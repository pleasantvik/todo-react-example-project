import { Header } from "./components/Header";

//COMPONENT START
const App = () => {
  const DUMMY_DATA = [
    {
      id: 1,
      title: "Start teaching React",
      completed: true,
    },

    {
      id: 2,
      title: "Build the UI",
      completed: false,
    },

    {
      id: 3,
      title: "Deploy app on vercel",
      completed: false,
    },
    {
      id: 4,
      title: "Read on JSX",
      completed: true,
    },
  ];
  // The first thine we want to do is display the title in the UI.
  // To accomplish this we use the map method available on every JS object

  return (
    <div className="App">
      <Header />
      <ul>
        {DUMMY_DATA.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
