import React from "react";

function UseRefDemo2() {

    const inputElement = React.useRef<HTMLInputElement>(null);

    const focusInput = () => {
        if (inputElement.current) {
            inputElement.current.focus();
        }
    }

    return (
        <>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button>
        </>
    )
}

export default UseRefDemo2;