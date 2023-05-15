import Header from "./components/Header";
import Navigation from "./components/Navigation";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
        <Navigation />
        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <Header />
          <TodoList />
          <TodoFilter />
        </div>
      </div>
    </>
  );
}

export default App;
