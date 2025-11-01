import React from 'react'

function Comment() {
  return (
    <div>
          <label className="block mb-2 font-medium text-gray-700">
            Comments <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={4}
            placeholder="Your Message :"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#396CF0] focus:ring-1 focus:ring-[#396CF0] outline-none transition-colors resize-none"
          ></textarea>
        </div>
  )
}

export default Comment