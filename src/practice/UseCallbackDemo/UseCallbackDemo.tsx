import React, { useCallback, useState } from "react";

// Child component that receives a function prop
type ButtonProps = {
  onClick: () => void;
  text: string;
};

const Button = React.memo(({ onClick, text }: ButtonProps) => {
  alert(`Child ${text} button rendered`);
  return <button onClick={onClick}>{text}</button>;
});

function UseCallbackDemo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // This function is recreated on every render
  const handleClick1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  const handleClick2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  alert('Parent rendered !!!');

  return (
    <>
      <h2>With useCallback:</h2>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
      <Button onClick={handleClick1} text="Button 1" />
      <Button onClick={handleClick2} text="Button 2" />
    </>
  );
}

export default UseCallbackDemo;
