import { useEffect, useRef, useState } from "react";

function WithoutUseRef() {

    // const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");
    // const [count, setCount] =  useState(0);
    const count = useRef(1);

    const [color, setColor] = useState('red');

    useEffect(() => {
        console.log('UseEffect called');
         count.current = count.current + 1;
        // setCount(count + 1);
        // setCount(count + 1);
    });

    return (
        <>

            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        
            <div>Count is {count.current}</div>

            {/* <button onClick={() => setCount(count + 1)}>Count++</button> */}


            <div>My favourite color is <b>{color}</b></div>
            <button onClick={() => setColor('blue')}>Blue</button>
            <button onClick={() => setColor('red')}>Red</button>
            
        </>
    )
}

export default WithoutUseRef;