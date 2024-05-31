import { useSelector, useDispatch } from "react-redux"
import { setFormData, clearFormData, setUnsavedChanges } from "../utils/FormSlice";
import { useEffect } from "react";
import { Button } from "./Button";
import InputBox from "./InputBox";


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
        <form className="w-full lg:w-[55%] mx-auto border-[#1B3D58] border-l-[0.25rem] border-r-[0.25rem] border-t-[0.25rem] border-b-[0.25rem] p-[2em] lg:p-[5em] rounded-lg shadow-[#F472B6] shadow-lg" onSubmit={handleSubmit}>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-50">Name</label>
                <InputBox type="text" name="name" placeholder="Kiran" value={data.name} onChange={handleChange}/>
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-50">Email</label>
                <InputBox type="email" name="email" placeholder="ksknew76105@gmail.com" value={data.email} onChange={handleChange}/>
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-50">Phone</label>
                <InputBox type="text" name="phone" placeholder="+91 9177814689" value={data.phone} onChange={handleChange} />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-50">Address</label>
                <InputBox type="text" name="address" placeholder="BalajiNagar" value={data.address} onChange={handleChange}/>
            </div>
            <Button type="submit" name="Save" width="w-[5rem]" handler={handleSubmit}/>
        </form>
    );
};
