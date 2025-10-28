
import Link from 'next/link';
import React from 'react'
interface CheckboxType {
    label: string;
    name?: string;
    type?: string;
    value: string;
    placeholder?: string;
    className?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function FormCheckBox({label,name,type,value,onChange}:CheckboxType) {
    return (
        <div className="flex items-center">
            <input type={type} name={name} value={value} onChange={onChange} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
            
            <label className="ml-2 text-sm flex items-center gap-1 text-gray-700 ">
                <p>I Accept</p>
                <Link href='/'>
                <p className='text-blue-500 font-semibold'>{label}</p>
                </Link>
            </label>
        </div>
    )
}

export default FormCheckBox