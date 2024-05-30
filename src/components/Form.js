import { useSelector, useDispatch } from "react-redux"
import { setFormData, clearFormData, setUnsavedChanges } from "../utils/FormSlice";
import { useEffect } from "react";

export const Form = () =>{
    const dispatch = useDispatch();
    const data = useSelector((store) => store.form)

    useEffect(() => {
        const handleBeforeUnload = (event) => {
          if (data.unsavedChanges) {
            event.preventDefault();
            event.returnValue = '';
          }
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [data.unsavedChanges]);

    const handleFormChange = (e)=>{
        const {id, value} = e.target;
        dispatch(setFormData({[id]: value}))
        dispatch(setUnsavedChanges(true));
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const userId = `user_${Math.random().toString(32).substr(2, 9)}`;
        dispatch(setFormData({userId, unsavedChanges: false}))
        localStorage.setItem('formData', JSON.stringify({...data, userId}))
        console.log(data)
        alert("Form has been submitted")
        dispatch(clearFormData());
    }

    return(
        <form className="max-w-sm mx-auto border-[#1B3D58] border-l-[0.25rem] border-r-[0.25rem] border-t-[0.25rem] border-b-[0.25rem] p-[5em] rounded-lg shadow-[#F472B6] shadow-lg">
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kiran" onChange={(e)=>handleFormChange(e)} required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#36B6EE] focus:border-[#36B6EE] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#36B6EE] dark:focus:border-[#36B6EE]" onChange={(e)=>handleFormChange(e)} required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" placeholder="kiran@gmail.com" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#36B6EE] focus:border-[#36B6EE] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#36B6EE] dark:focus:border-[#36B6EE]" onChange={(e)=>handleFormChange(e)} required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#36B6EE] focus:border-[#36B6EE] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#36B6EE] dark:focus:border-[#36B6EE]" placeholder="+91 9177814689" onChange={(e)=>handleFormChange(e)} required />
            </div>
            <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                <input type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-[#36B6EE] dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <button type="submit" onClick={(e)=>handleSubmit(e)} className="rounded-md bg-gray-800 text-white border-[#1B3D58] border-l border-r border-b border-t w-[5rem] p-3 hover:bg-[#36B6EE] duration-500">Save</button>
        </form>

    )
}