import "./practice.css";

function Practice() {

  // const hp = 218 * 1.36;

  function kwtohp(kw: number) {
    return kw * 10;
  }


  return (
    <>
      <div>
        <h1>My car</h1>
        <p>It has <b>{kwtohp(25)}</b> horsepower</p>
        <h1 className="myClass">I Love JSX!</h1>
        <h1>React is {5 + 5} times better with JSX</h1>
      </div>
    </>
  );
}

export default Practice;
