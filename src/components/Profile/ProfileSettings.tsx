import Image from 'next/image'
import React from 'react'

function ProfileSettings() {
  return (
    <div className='py-4'>
      <div className="px-2 bg-white text-[#333]">
        <h2 className="text-xl font-bold mb-8 text-gray-800">Personal Information :</h2>

        {/* Profile Picture Section */}
        <div className="flex flex-wrap items-center gap-6 mb-10">
          <div className="relative">
            <Image
              src="/profile.jpg"
              width={500}
              height={500}
              alt="User Profile"
              className="w-24 h-24 rounded-full object-cover border border-gray-100"
            />
          </div>

          <div className="flex-1 min-w-[200px]">
            <h3 className="text-lg font-semibold text-gray-700">Upload your picture</h3>
            <p className="text-sm text-gray-400 mt-1 leading-relaxed">
              For best results, use an image at least 256px by 256px in either .jpg or .png format
            </p>
          </div>

          <div className="flex gap-3">
            <button className="px-6 py-2.5 bg-[#3b71ed] text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
              Upload
            </button>
            <button className="px-6 py-2.5 bg-[#eef2ff] text-[#4f46e5] rounded-md font-medium hover:bg-indigo-100 transition-colors">
              Remove
            </button>
          </div>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

            <div className="space-y-2">
              <label className="block text-[15px] font-semibold text-gray-700">First Name</label>
              <input
                type="text"
                placeholder="First Name :"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-300"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[15px] font-semibold text-gray-700">Last Name</label>
              <input
                type="text"
                placeholder="Last Name :"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-300"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[15px] font-semibold text-gray-700">Your Email</label>
              <input
                type="email"
                placeholder="Your email :"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-300"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[15px] font-semibold text-gray-700">Phone no.</label>
              <input
                type="text"
                placeholder="Phone no. :"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-300"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-[15px] font-semibold text-gray-700">Birthday</label>
              <input
                type="date"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-gray-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[15px] font-semibold text-gray-700">Gender</label>
              <select className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all bg-white text-gray-500">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-[15px] font-semibold text-gray-700">Blood Group</label>
              <select className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all bg-white text-gray-500">
                <option value="">Select Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-[15px] font-semibold text-gray-700">Address</label>
              <input
                type="text"
                placeholder="Address :"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-300"
              />
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <label className="block text-[15px] font-semibold text-gray-700">Your Bio Here</label>
            <textarea
              rows={5}
              placeholder="Bio :"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-300 resize-none"
            ></textarea>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="px-8 py-3 bg-[#3b71ed] text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95"
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
      <div className="py-4 px-2 space-y-12 p-6 bg-white">

        <section>
          <h2 className="text-xl font-bold mb-6 text-gray-800">Change Password :</h2>
          <form className="space-y-5 max-w-2xl">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Old password :</label>
              <input
                type="password"
                placeholder="Old password"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">New password :</label>
              <input
                type="password"
                placeholder="New password"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Re-type New password :</label>
              <input
                type="password"
                placeholder="Re-type New password"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-400"
              />
            </div>

            <button
              type="submit"
              className="mt-2 px-6 py-2.5 bg-[#3b71ed] text-white font-medium rounded shadow-sm hover:bg-blue-700 transition-colors"
            >
              Save password
            </button>
          </form>
        </section>
        <hr className="border-gray-100" />
        <section>
          <h2 className="text-xl font-bold text-[#ef7b61]">Delete Account :</h2>
          <div className="space-y-6">
            <p className="text-gray-600 text-[15px]">
              Do you want to delete the account? Please press below Delete button
            </p>
            <button
              type="button"
              className="px-6 py-3 bg-[#ef7b61] text-white font-semibold rounded-lg shadow-sm hover:bg-[#d96a52] transition-colors"
            >
              Delete Account
            </button>
          </div>
        </section>

      </div>
    </div>
  )
}

export default ProfileSettings