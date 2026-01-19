import { API } from "@/api/API";
import { authType } from "@/types/authTypes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
export const signinThunk = createAsyncThunk('auth/user/signin',async(formData:authType)=>{
        try {
          const  data = await API({
                endpoint:'auth/user/login',
                option:{
                    method:'POST',
                    credentials:'include',
                    headers:{'content-type':'application/json',},
                    body:JSON.stringify(formData)
                }
             })
            
                localStorage.setItem('token',data.accessToken)
                Cookies.set('accessToken',data.accessToken)
                Cookies.set('refreshToken',data.refreshToken)
            return data
        } catch (error) {
            throw error
        }
})

interface InitialStateTypes{
    message:string|null,
    loading:boolean,
    error:string|null,
    
    
}

const initialState:InitialStateTypes={
    message:null,
    loading:false,
    error:null
}

const signinSlice = createSlice({
    name:'signin',
    initialState,
    reducers:{
        clearMessageSigin:state=>{state.message=null}
    },
    extraReducers:builder=>{
        builder.addCase(signinThunk.pending,state=>{state.loading=true})
        builder.addCase(signinThunk.fulfilled,(state,action)=>{state.loading=false;state.error=null;state.message=action.payload.message})
        builder.addCase(signinThunk.rejected,(state,action)=>{state.loading=false;state.message=null;state.error=action.error.message||''})
    }
})

export const {clearMessageSigin} = signinSlice.actions

export default signinSlice.reducer