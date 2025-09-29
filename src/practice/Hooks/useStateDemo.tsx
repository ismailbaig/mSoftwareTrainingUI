import { useState } from "react";

function UseStateDemo() {

    const [color, setColor] = useState('red');

        return (
            <>
                <div>My favourite Color is <h1>{color}</h1></div>
                <button onClick={() => setColor('blue')}>Blue</button>

                <button onClick={() => setColor('red')}>Red</button>
            </>
        )

}

export default UseStateDemo;