import React from 'react'
interface InputType{
  label:string,
  type:string,
  placeholder?:string
}
function AppFormInput({label,type,placeholder}:InputType) {
  return (
    <div>
          <label className="block mb-2 font-medium text-gray-700">
            {label} <span className="text-red-500">*</span>
          </label>
          <input
            type={type}
            placeholder={placeholder}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#396CF0] focus:ring-1 focus:ring-[#396CF0] outline-none transition-colors"
          />
        </div>
  )
}

export default AppFormInput