'use client'
import { clearMessageSignup, signupThunk } from '@/redux/auth/signupSlice'
import { useAppDispatch, useAppSelector, } from '@/redux/hooks'
import FacebookBtn from '@/utils/FacebookBtn'
import FormButton from '@/utils/FormButton'
import FormCheckBox from '@/utils/FormCheckBox'
import FormInput from '@/utils/FormInput'
import GoogleBtn from '@/utils/GoogleBtn'
import { X } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, useEffect, useState } from 'react'


function SignUp() {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const signup = useAppSelector(state => state.signup)
    const [form, setForm] = useState({
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    })
    const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }

    const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(signupThunk({
            username: form.username,
            firstname: form.firstname,
            lastname: form.lastname,
            email: form.email,
            password: form.password

        }))
    }

    useEffect(() => {
        let timer:ReturnType<typeof setTimeout> | undefined;
        if (signup.message) {
            setForm({
                username: '',
                firstname: '',
                lastname: '',
                email: '',
                password: ''
            })
             timer = setTimeout(() => {
                router.push('/signin')
                dispatch(clearMessageSignup())
            }, 1000)

        }

        return () => clearTimeout(timer)
    }, [signup.message, router, dispatch])

    return (
        <div className='bg-white fixed w-full h-screen top-0 flex items-center justify-center z-50'>
            <Link href='/'>
                <span className='w-10 h-10 border border-gray-400 rounded-full bg-white flex items-center justify-center absolute top-4 right-4'>
                    <X size={18} color='currentColor' />
                </span>
            </Link>
            <div className="w-full max-w-md flex items-center gap-2 flex-col p-6 bg-white rounded-lg shadow-lg">
                <span className="text-2xl font-bold text-blue-600">Doctris</span>
                <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
                <form onSubmit={handelSubmit} className="space-y-4">
                    <div className="flex flex-col gap-4">
                        <FormInput
                            label="Username"
                            type="text"
                            placeholder="username"
                            name="username"
                            value={form.username}
                            onChange={handelChange}

                        />
                        <div className="flex items-center gap-4">
                            <FormInput
                                label="First Name"
                                type="text"
                                placeholder="First Name"
                                name="firstname"
                                value={form.firstname}
                                onChange={handelChange}

                            />
                            <FormInput
                                label="Last Name"
                                type="text"
                                placeholder="Last Name"
                                name="lastname"
                                value={form.lastname}
                                onChange={handelChange}

                            />
                        </div>

                        <FormInput
                            label="Email"
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            value={form.email}
                            onChange={handelChange}

                        />
                        <FormInput
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            name="password"
                            value={form.password}
                            onChange={handelChange}

                        />
                    </div>

                    <FormCheckBox
                        label="Terms And Condition"
                        type="checkbox"
                        name="term"
                        value=""
                    />
                    {signup.error && <p className='text-[14px] text-red-500'>{signup.error}</p>}
                    {signup.message && <p className='text-[14px] text-blue-500'>{signup.message}</p>}
                    <FormButton btnName="Register" loading={signup.loading} />

                    <div className="text-center">Or</div>

                    <div className="flex gap-4">
                        <FacebookBtn btnName="Facebook" />
                        <GoogleBtn btnName="Google" />
                    </div>
                </form>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Already have an account?{' '}
                    <Link href="/signin" className="text-blue-600 hover:underline">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default SignUp