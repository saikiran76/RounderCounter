import { useSelector } from "react-redux";
import { Button } from "./Button";
import { Bar } from "./Bar";

const User = () =>{
    const userData = useSelector((state)=>state.form.userObject)
   

    return (
        <div className="m-5 w-[40%] p-[5em] rounded-lg border-[#1B3D58] border-l-[0.25rem] border-r-[0.25rem] border-t-[0.25rem] border-b-[0.25rem] font-inter shadow-[#F472B6] shadow-lg">
            <p className="p-3 text-gray-50 text-lg mx-auto border-[#36B6EE] border-l border-r border-t border-b rounded-lg m-3 text-center">
                <span>User Data:</span>
                {JSON.stringify({
                    "name": userData.name,
                    "address": userData.address,
                    "email": userData.email,
                })}
            </p>
            
            {/* <p className="border-[#36B6EE] border-l border-r border-t border-b rounded-lg mx-auto text-gray-50 p-3 bg-[#1E293B]">Auto-generated Id: {JSON.stringify({"userId": userData.userId})}</p> */}
            <Bar text="Auto-generated Id:" content={JSON.stringify({"userId": userData.userId})}/>

            <input name="name" type="name" placeholder="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#36B6EE] focus:border-[#36B6EE] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-50 dark:focus:ring-[#36B6EE] dark:focus:border-[#36B6EE] m-3 mx-auto" required />

            {/* <button type="submit" className="rounded-md bg-gray-800 text-gray-50 border-[#1B3D58] border-l border-r border-b border-t p-3 hover:bg-[#36B6EE] duration-500 w-full">Save</button> */}
            <Button name="Save" width="w-full" type="submit" handler={(e) => console.log(e)}/>
        </div>
    )
}

export default User;