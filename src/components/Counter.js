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
        <div className="m-5">
            <p>{counter}</p>
            <h1>Counter</h1>
            <div className="flex gap-2 w-[45%]">
                <button onClick={()=>AddHandler()} className="rounded-md bg-gray-800 text-white border-white border-l border-r border-b border-t w-[20%] p-3 hover:bg-slate-400">+</button>
                <button onClick={()=>ResetHandler()} className="rounded-md bg-gray-800 text-white border-white border-l border-r border-b border-t w-[60%] p-3 hover:bg-slate-400"><h2>Reset</h2></button>
                <button onClick={()=>DeductHandler()} className="rounded-md bg-gray-800 text-white border-white border-l border-r border-b border-t w-[20%] p-3 hover:bg-slate-400">-</button>
            </div>    
        </div>
    )
}

export default Counter;