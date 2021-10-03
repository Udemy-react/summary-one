import Todo from "./Components/UI/Todo";

function App() {
  

  return (
    <div className="App">
      <h1>My Todos</h1>
      <Todo title={"First"} />
      <Todo title={"Second"} />
      <Todo title={"Third"} />
    </div>
  );
}

export default App;
