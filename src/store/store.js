import { configureStore } from "@reduxjs/toolkit";
import customerSlices from "./customerSllices";

export const store = configureStore({
    reducer:({
        customer:customerSlices
    })
})