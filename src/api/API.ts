interface apiProps {
    endpoint:string,
    option:RequestInit
}
export const API =async({endpoint,option}:apiProps)=>{
   try {
    const res =await fetch(`https://hospital-backend-fmzr.onrender.com/api/${endpoint}`,option)
    const data = await res.json()
      if(!res.ok){
        console.log(data.message)
        throw new Error(data.message)
        }

    return data
   } catch (error) {
    throw error
   }
}