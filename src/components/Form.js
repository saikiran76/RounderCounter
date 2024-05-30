import { useSelector, useDispatch } from "react-redux"
import { setFormData, clearFormData, setUnsavedChanges } from "../utils/FormSlice";
import { useEffect } from "react";
import { Button } from "./Button";


export const Form = () => {
    const dispatch = useDispatch();
    const data = useSelector((store) => store.form.userObject);

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(setFormData({ [name]: value }));
        dispatch(setUnsavedChanges(true));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userId = `user_${Math.random().toString(36).substr(2, 9)}`;
        const updatedData = { ...data, userId, unsavedChanges: false };
        dispatch(setFormData(updatedData));
        localStorage.setItem('formData', JSON.stringify(updatedData));
        alert("Form has been submitted");
        dispatch(clearFormData());
    };

    return (
        <form className="w-[55%] mx-auto border-[#1B3D58] border-l-[0.25rem] border-r-[0.25rem] border-t-[0.25rem] border-b-[0.25rem] p-[5em] rounded-lg shadow-[#F472B6] shadow-lg" onSubmit={handleSubmit}>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-50">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-50 dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Kiran"
                    value={data.name}
                    required 
                    onChange={handleChange} 
                />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-50">Email</label>
                <input 
                    type="email" 
                    name="email"
                    placeholder="kiran@gmail.com" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#36B6EE] focus:border-[#36B6EE] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-50 dark:focus:ring-[#36B6EE] dark:focus:border-[#36B6EE]" 
                    value={data.email}
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-50">Phone</label>
                <input 
                    type="text" 
                    name="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#36B6EE] focus:border-[#36B6EE] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-50 dark:focus:ring-[#36B6EE] dark:focus:border-[#36B6EE]" 
                    placeholder="+91 9177814689"
                    value={data.phone}
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-50">Address</label>
                <input 
                    type="text" 
                    name="address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#36B6EE] focus:border-[#36B6EE] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-50 dark:focus:ring-[#36B6EE] dark:focus:border-[#36B6EE]" 
                    placeholder="BalajiNagar"
                    value={data.address}
                    onChange={handleChange} 
                    required 
                />
            </div>

            
            {/* <button type="submit" className="rounded-md bg-gray-800 text-gray-50 border-[#1B3D58] border-l border-r border-b border-t w-[5rem] p-3 hover:bg-[#36B6EE] duration-500">Save</button> */}
            <Button type="submit" name="Save" width="w-[5rem]" handler={handleSubmit}/>
        </form>
    );
};
