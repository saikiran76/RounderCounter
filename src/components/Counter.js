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
        <div className="m-5 w-[60%] p-[10em] rounded-lg border-[#1B3D58] border-l-[0.25rem] border-r-[0.25rem] border-t-[0.25rem] border-b-[0.25rem] font-inter shadow-[#F472B6] shadow-lg">
            <p className="border-[#36B6EE] text-white border-l border-r border-t border-b rounded-lg  p-3 text-center font-bold text-xl bg-[#1E293B]">{counter}</p>
            <h1 className="m-2 font-semibold text-center text-white text-2xl">Counter</h1>
            <div className="flex gap-2">
                <button onClick={()=>AddHandler()} className="rounded-md bg-gray-800 text-white border-[#1B3D58] border-l border-r border-b border-t w-[20%] p-3 hover:bg-[#36B6EE] duration-500">+</button>
                <button onClick={()=>ResetHandler()} className="rounded-md bg-gray-800 text-white border-[#1B3D58] border-l border-r border-b border-t w-[60%] p-3 hover:bg-[#36B6EE] duration-500"><h2>Reset</h2></button>
                <button onClick={()=>DeductHandler()} className="rounded-md bg-gray-800 text-white border-[#1B3D58] border-l border-r border-b border-t w-[20%] p-3 hover:bg-[#36B6EE] duration-500">-</button>
            </div>

            

        </div>
    )
}

export default Counter;