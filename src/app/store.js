import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "../routes/Root/counterSlice"

export default configureStore({
    reducer: {
        asd: counterSlice,
    }
})