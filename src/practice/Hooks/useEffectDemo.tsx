import { useEffect, useState } from "react";

function UseEffectDemo() {
  const [count, setCount] = useState(1);
  const [title, setTitle] = useState('None');

  useEffect(() => {
    
    // setCount(count + 1);
    // API Call
    // fetch('https://jsonplaceholder.typicode.com/todos/' + count)
    fetch('http://localhost:8000/my-endpoint')
      .then(response => response.json())
      .then(json => {
        setTitle(json.msg);
      })
  }, [title]);

  return (
    <>
      <div>I rendered <b>{count}</b> times !!!</div>
      <div> The title is <b>{title}</b> </div>
      <button
        onClick={ () => {setCount(count + 1)}  } >
        Call API
      </button>
      <button 
        onClick={ () => {setTitle('Title ' + Math.floor(Math.random() * 10))}  } >
        change Title
      </button>
    </>
  );
}
export default UseEffectDemo;
