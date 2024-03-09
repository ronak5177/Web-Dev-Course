import { useRef, useState } from 'react';

export default function Counter() {
  let ref = useRef(0);

  // state will update count value
  //   let [count, setCount] = useState(0)

// it won't change count value of DOM that is why we need to use state insted of ref
  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');

    // this can update count value
    // setCount(count => count+1)
  }

  

  return (

    <>  
    <div>
        {ref.current}
    </div>
        <button onClick={handleClick}>
        Click me!
        </button>

    </>
  );
}
