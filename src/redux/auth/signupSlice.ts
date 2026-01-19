import { API } from "@/api/API";
import { authType } from "@/types/authTypes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const signupThunk = createAsyncThunk('auth/user/register',async(formData:authType)=>{
        try {
          const  data = await API({
                endpoint:'auth/user/register',
                option:{
                    method:'POST',
                    headers:{'content-type':'application/json',},
                    body:JSON.stringify(formData)
                }
            })

            return data
        } catch (error) {
            throw error
        }
})

interface InitialStateTypes{
    message:string|null,
    loading:boolean,
    error:string|null
    
}

const initialState:InitialStateTypes={
    message:null,
    loading:false,
    error:null
}

const signupSlice = createSlice({
    name:'signup',
    initialState,
    reducers:{
        clearMessageSignup:state=>{state.message=null}
    },
    extraReducers:builder=>{
        builder.addCase(signupThunk.pending,state=>{state.loading=true})
        builder.addCase(signupThunk.fulfilled,(state,action)=>{state.loading=false;state.error=null;state.message=action.payload.message})
        builder.addCase(signupThunk.rejected,(state,action)=>{state.loading=false;state.message=null;state.error=action.error.message||''})
    }
})

export const {clearMessageSignup} = signupSlice.actions

export default signupSlice.reducer