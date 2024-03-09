import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Navbar";




function App() {
  const [showbtn, setShowBtn] = useState(false);
  const [nav, showNav] = useState(true);
  const [todos, setTodos] = useState([{
    title: "Go to the gym",
    description: "Do exercise",
    completed: "wake up early"
  }, {
    title: "Learn something new",
    description: "React js",
    completed: "javascript basics"
  }]
  
  )

  const Todo = ({todo})=>{
    return (<>
    <div className="todolist">
      <div className="todo">{todo.title}</div>
      <div className="todo">{todo.description}</div>
      <div className="todo">{todo.completed}</div>
    </div>
    </>)
  }

  return (
    <>
      {nav && <Navbar />}
      <div className="container">
        <h1>Vite + React</h1>
        
        {todos.map(todo=>{
          // return <Todo key={todo.title} todo={todo}/>
          return  <div key={todo.title} className="todolist">
          <div className="todo">{todo.title}</div>
          <div className="todo">{todo.description}</div>
          <div className="todo">{todo.completed}</div>
        </div>
        })}

        {/* {showbtn && <button>display</button>} */}
        <div className="card">
        {showbtn ? (
          <button>showbtn is true</button>
        ) : (
          <button>showbtn is false</button>
        )}
          <button
            onClick={() => {
              setShowBtn((prev) => !prev);
              showNav((prev) => !prev);
            }}
          >
            Toggle show btn
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
