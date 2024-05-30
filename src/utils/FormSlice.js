import { createSlice } from "@reduxjs/toolkit";

const FormSlice = createSlice({
    name:"form",
    initialState:{
        userId:'',
        name:'',
        address:'',
        email:'',
        phone:'',
        unsavedChanges: false,
    },
    reducers:{
        setFormData:(state, action)=>{
            return {...state, ...action.payload, unsavedChanges: true}
        },
        clearFormData:(state, action)=>{
            return {
               ...state,
                userId:'',
                name:'',
                address:'',
                email:'',
                phone:'',
                unsavedChanges: false
            }
        },
        setUnsavedChanges: (state, action) => {
            state.unsavedChanges = action.payload;
        }
    }
})

export const {setFormData, clearFormData, setUnsavedChanges} = FormSlice.actions;
export default FormSlice.reducer;