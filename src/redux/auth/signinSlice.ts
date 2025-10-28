import { API } from "@/api/API";
import { authType } from "@/types/authTypes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const signinThunk = createAsyncThunk('auth/user/signin',async(formData:authType)=>{
        try {
          const  data = await API({
                endpoint:'auth/user/login',
                option:{
                    method:'POST',
                    headers:{'content-type':'application/json',},
                    body:JSON.stringify(formData)
                }
             })
            if(data.token){
                localStorage.setItem('token',data.token)
                console.log(localStorage.getItem('token'));
                
            }
            return {
                message:data.message,
                token:data.token,
                expiresIn:data.expiresIn
            }
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
        clearMessage:state=>{state.message=null}
    },
    extraReducers:builder=>{
        builder.addCase(signinThunk.pending,state=>{state.loading=true})
        builder.addCase(signinThunk.fulfilled,(state,action)=>{state.loading=false;state.error=null;state.message=action.payload.message})
        builder.addCase(signinThunk.rejected,(state,action)=>{state.loading=false;state.message=null;state.error=action.error.message||''})
    }
})

export const {clearMessage} = signinSlice.actions

export default signinSlice.reducer