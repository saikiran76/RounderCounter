import { configureStore } from "@reduxjs/toolkit";
import FormSlice from "./FormSlice";
import EditorSlice from "./EditorSlice";

const store = configureStore({
    reducer:{
        form: FormSlice,
        editor: EditorSlice
    }
})

export default store;