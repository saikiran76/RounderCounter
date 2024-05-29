import { createSlice } from "@reduxjs/toolkit";

const FormSlice = createSlice({
    name:"form",
    initialState:{
        userId:'',
        name:'',
        address:'',
        email:'',
        phone:''
    },
    reducers:{
        setFormData:(state, action)=>{
            return {...state, ...action.payload}
        },
        clearFormData:(state, action)=>{
            return {
               ...state,
                userId:'',
                name:'',
                address:'',
                email:'',
                phone:''
            }
        }
    }
})

export const {setFormData, clearFormData} = FormSlice.actions;
export default FormSlice.reducer;