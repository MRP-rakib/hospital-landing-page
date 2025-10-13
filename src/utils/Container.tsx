import { ReactNode } from "react"

interface containerProps{
    children:ReactNode
}
function Container({children}:containerProps) {
  return (
    <div className="max-w-[1440px] lg:px-8 md:px-6 px-4 mx-auto">
        {children}
    </div>
  )
}

export default Container