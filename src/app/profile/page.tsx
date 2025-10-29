"use client"
import Container from '@/utils/Container'
import Image from 'next/image'
import { Camera, Trash, Edit2, Key } from 'lucide-react'

function ProfileView() {
    // Dummy user data for design only
    const user = {
        firstname: 'John',
        lastname: 'Doe',
        email: 'john.doe@example.com',
        role: 'User',
        avatar: '/image/profile.jpg'
    }

    const avatarSrc = user.avatar || '/image/profile.jpg'

    return (
        <div className="">
            <Container>
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">Profile</h1>
                    <div className="text-sm text-gray-500">Manage your profile information</div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left: Avatar & actions */}
                    <div className="lg:col-span-1 bg-white/60 border border-gray-100 rounded-lg p-5 shadow-sm">
                        <div className="flex flex-col items-center text-center">
                            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-md">
                                <Image src={avatarSrc} alt="avatar" fill sizes="(max-width: 768px) 128px, 192px" className="object-cover" />
                            </div>
                            <h2 className="mt-4 text-lg font-medium text-gray-800 capitalize">{user.firstname} {user.lastname}</h2>
                            <p className="text-xs sm:text-sm text-gray-500 mt-1 uppercase tracking-wide">{user.role}</p>

                            <div className="mt-5 w-full space-y-2">
                                <label className="flex items-center justify-center gap-2 cursor-pointer w-full px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                                    <Camera className="w-4 h-4" />
                                    <span className="text-sm">Change Avatar</span>
                                    <input aria-hidden type="file" accept="image/*" className="hidden" />
                                </label>

                                <button className="w-full flex items-center justify-center gap-2 px-3 py-2 border border-gray-200 rounded-md text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                                    <Trash className="w-4 h-4 text-red-500" />
                                    <span className="text-xs sm:text-sm">Delete Avatar</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right: Details */}
                    <div className="lg:col-span-2 bg-white/60 border border-gray-100 rounded-lg p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-medium text-gray-800">Profile details</h3>
                            <button className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-100 hover:bg-gray-200 text-sm text-gray-800">
                                <Edit2 className="w-4 h-4" />
                                <span>Edit</span>
                            </button>
                        </div>

                        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input type="text" placeholder="First name" value={user.firstname} readOnly className="w-full px-3 py-2 border rounded-md bg-white border-gray-200 text-gray-800" />
                            <input type="text" placeholder="Last name" value={user.lastname} readOnly className="w-full px-3 py-2 border rounded-md bg-white border-gray-200 text-gray-800" />
                            <input type="email" placeholder="you@example.com" value={user.email} readOnly className="sm:col-span-2 w-full px-3 py-2 border rounded-md bg-white border-gray-200 text-gray-800" />
                        </form>

                        <hr className="my-6 border-gray-100" />

                        <div>
                            <h4 className="font-medium text-gray-800 mb-3">Change password</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <input type="password" placeholder="Current password" className="sm:col-span-3 w-full px-3 py-2 border rounded-md bg-white border-gray-200 text-gray-800" />
                                <input type="password" placeholder="New password" className="w-full px-3 py-2 border rounded-md bg-white border-gray-200 text-gray-800" />
                                <input type="password" placeholder="Confirm new password" className="w-full px-3 py-2 border rounded-md bg-white border-gray-200 text-gray-800" />
                            </div>
                            <div className="mt-3 flex justify-end">
                                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md text-sm">
                                    <Key className="w-4 h-4" />
                                    Change password
                                </button>
                            </div>
                        </div>

                        <div className="mt-6 border-t pt-4">
                            <h4 className="text-sm font-medium text-gray-800 mb-2">Danger zone</h4>
                            <p className="text-xs text-gray-500 mb-3">Deleting your profile is permanent. This action cannot be undone.</p>
                            <div className="flex items-center justify-end">
                                <button className="px-4 py-2 bg-red-600 text-white rounded-md text-sm cursor-pointer">Delete profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProfileView
