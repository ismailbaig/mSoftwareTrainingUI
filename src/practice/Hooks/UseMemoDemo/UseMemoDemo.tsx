import { useMemo, useState } from "react";

const expensiveCalculation = (num: any) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

function UseMemoDemo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]);
  const calculation = useMemo( () =>  expensiveCalculation(count), [count]);


  const addTodo = () => {
    setTodos([...todos, "New Todo"]);
  };

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
    </div>
    <h2>Expensive Calculation</h2>
        {calculation}
        <p>Note: This example executes the expensive function only when you click on the Increment button, and not when you add a todo.</p>
    </>
  );
}



export default UseMemoDemo;
