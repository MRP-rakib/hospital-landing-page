'use client'
import { clearMessageSigin, signinThunk } from '@/redux/auth/signinSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import FacebookBtn from '@/utils/FacebookBtn'
import FormButton from '@/utils/FormButton'
import FormInput from '@/utils/FormInput'
import GoogleBtn from '@/utils/GoogleBtn'
import { X } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import React, { ChangeEvent, useEffect, useState } from 'react'

function SignIn() {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const signin = useAppSelector(state => state.signin)
    const [form, setForm] = useState({
        email: '',
        password: '',
       
    })
    const [checked,setChecked] = useState<boolean>(false)

    const handelChange=(e:ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target
        setForm(prev=>({...prev,[name]:value}))
    }

    const handelSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
       e.preventDefault()
       dispatch(signinThunk({
        email:form.email,
        password:form.password,
        remembar:checked
       }))
    }

    useEffect(()=>{
        let timer:ReturnType<typeof setTimeout> | undefined;
       if(signin.message){
          setForm({
            email:'',
            password:''
          })
          timer=setTimeout(() => {
            router.push('/')
          dispatch(clearMessageSigin())
          }, 1000);
          
       }
       return ()=>clearTimeout(timer)
    },[signin,dispatch,router])

    return (
        <div className='bg-white fixed w-full h-screen top-0 flex items-center justify-center z-50'>
            <Link href='/'>
                <span className='w-10 h-10 border border-gray-400 rounded-full bg-white flex items-center justify-center absolute top-4 right-4'>
                    <X size={18} color='currentColor' />
                </span>
            </Link>
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <div className="flex justify-center mb-6">
                    <span className="text-2xl font-bold text-blue-600">Doctris</span>
                </div>
                <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
                <form className="space-y-4" onSubmit={handelSubmit}>
                    <div className="flex flex-col gap-4">
                        <FormInput onChange={handelChange}  type="email" placeholder="Email" name="email" label="Email" />
                        <FormInput  onChange={handelChange} type="password" placeholder="Password" name="password" label="Password" />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                onChange={(e)=>setChecked(e.target.checked)}
                                checked={checked}    
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label className="ml-2 text-sm text-gray-700">Remember me</label>
                        </div>
                         <Link  href="#" className="text-sm text-blue-600 hover:underline">
                            Forgot password?
                        </Link>
                    </div>

                    {signin.error&&<p className='text-[14px] text-red-500'>{signin.error}</p>}
                    {signin.message&&<p className='text-[14px] text-blue-500'>{signin.message}</p>}

                    <FormButton btnName="Login" loading={signin.loading} />

                    <div className="text-center">Or</div>

                    <div className="flex justify-between">
                        <FacebookBtn btnName="Facebook" />
                        <GoogleBtn btnName="Google" />
                    </div>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        Don’t have an account?{' '}
                        <Link href="/signup" className="text-blue-600 hover:underline">
                            Sign up
                        </Link>
                    </p>
                </form>
            </div>

        </div>
    )
}

export default SignIn