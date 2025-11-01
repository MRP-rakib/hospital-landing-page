import React from 'react'
interface PageHeadingTypes {
    pageHeading: string,
    pageDescription: string,
    pageNavigation: string
}
function PageHeading({ pageHeading, pageDescription, pageNavigation }: PageHeadingTypes) {
    return (
        <div className='flex flex-col gap-4 lg:gap-6 items-center text-center py-10 lg:py-15 bg-[#F8F9FA]'>
            <h3 className='text-[18px] lg:text-[20px] font-semibold'>{pageHeading}</h3>
            <p className='text-[14px] lg:text-base text-gray-400 max-w-[600px] mx-auto'>{pageDescription}</p>
            <span className='flex items-center gap-1 capitalize'>
                Home &gt;
                <p className='text-[#396CF0] font-semibold'>{pageNavigation}</p>
            </span>
        </div>
    )
}

export default PageHeading