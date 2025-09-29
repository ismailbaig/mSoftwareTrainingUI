import { useEffect, useState } from "react";

function UseEffectDemo() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('None');

  useEffect(() => {
     setCount(count + 1);
    // API Call
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        setTitle(json.title);
      })
  }, []);

  return (
    <>
      <div>I rendered <b>{count}</b> times !!!</div>
      <div> The title is <b>{title}</b> </div>
    </>
  );
}
export default UseEffectDemo;
