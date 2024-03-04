import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>The count is {count}</div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Click Me
      </button>
    </>
  );
}

export default App;
