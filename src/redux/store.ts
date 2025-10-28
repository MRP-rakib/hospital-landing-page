import { configureStore } from "@reduxjs/toolkit";
import signupReducer from '@/redux/auth/signupSlice'
import signinReducer from '@/redux/auth/signinSlice'
export const store = configureStore({
    reducer:{
      signup:signupReducer,
      signin:signinReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch