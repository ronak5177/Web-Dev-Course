import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";



function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);

  useEffect(() => {
    let todosString = localStorage.getItem("todos");
    if (todosString) {
      let todo = JSON.parse(localStorage.getItem("todos"));
      setTodos(todo);
    }
  }, []);

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
    saveToLS();
  };

  const handleEdit = (e, id) => {
    let t = todos.find((t) => t.id === id);
    setTodo(t.todo);
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveToLS();
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveToLS();
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    saveToLS();
  };

  const handleCheck = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => item.id === id);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS();
  };

  const handleFinished = () => {
    setShowFinished((toggle) => !toggle);
  };

  return (
    <>
      <Navbar />

      <div className="md:container mx-3 md:mx-auto my-5 p-5 bg-slate-200 rounded-lg min-h-[80vh] md:w-1/2">
        <h1 className="font-bold text-xl text-center">ToDoApp - Manage all your todos at single place</h1>
        <div className="addTodo">
          <h2 className="text-lg font-bold my-5">Add a Todo</h2>
          <div className="flex">
            <input
              onChange={handleChange}
              value={todo}
              type="text"
              className="w-full rounded py-1"
            />
            <button
              onClick={handleAdd}
              disabled={todo.length < 3}
              className="bg-slate-800 disabled:bg-slate-400 px-3 py-1 text-sm font-bold text-white rounded-md mx-5 hover:bg-slate-950"
            >
              Save
            </button>
          </div>
        </div>
        <div className="finishedTodo my-2">
          <input
            onChange={handleFinished}
            type="checkbox"
            checked={showFinished}
            id="showfinished"
          />{" "}
          
          <label className="mx-3" htmlFor="showfinished">Show Finished Todos</label>
          <div className="h-[1px] bg-black my-3 opacity-70 mx-auto"></div>
        </div>
        <h2 className="text-lg font-bold my-3">Your Todos</h2>

        <div className="todos">
          {todos.length == 0 ? (
            <div className="empty m-2">
              <h3>No todos added</h3>
            </div>
          ) : (
            todos.map(
              (item) =>
                (showFinished || !item.isCompleted) && (
                  <div
                    key={item.id}
                    className="todo flex w-full justify-between mt-3"
                  >
                    <div className="flex gap-5">
                      <input
                        onChange={handleCheck}
                        type="checkbox"
                        name={item.id}
                        checked={item.isCompleted}
                      />
                      <div className={item.isCompleted ? "line-through" : ""}>
                        {item.todo}
                      </div>
                    </div>

                    <div className="buttons flex h-full">
                      <button
                        onClick={(e) => handleEdit(e, item.id)}
                        className="bg-slate-800 px-3 py-1 text-sm font-bold text-white rounded-md mx-1 hover:bg-slate-950"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={(e) => handleDelete(e, item.id)}
                        className="bg-slate-800 px-3 py-1 text-sm font-bold text-white rounded-md mx-1 hover:bg-slate-950"
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                )
            )
          )}
        </div>
      </div>
    </>
  );
}

export default App;
