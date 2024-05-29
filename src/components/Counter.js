const { useState } = require("react")

const Counter = () =>{
    const [counter, setCounter] = useState(0);

    const AddHandler = () =>{
        setCounter(counter + 1)
    }

    const DeductHandler = () =>{
        setCounter(counter - 1)
    }

    const ResetHandler = () =>{
        setCounter(0)
    }

    return (
        <>
            <p>{counter}</p>
            <h1>Counter</h1>
            <div className="flex gap-2">
                <button className="rounded-md">+</button>
                <button className="rounded-md"><h2>Reset</h2></button>
                <button className="rounded-md"></button>
            </div>    
        </>
    )
}