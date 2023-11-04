// import { useEffect,useState } from "react"
import { useLoaderData } from "react-router-dom"
function Github() {
    const data=useLoaderData()
//     const [data,setData]=useState([])
//    useEffect(()=>{
//    fetch('http://api.github.com/users/hiteshchoudhary')
//    .then(res=>res.json())
//    .then(data=>{
//        setData(data)
//    })
//    },[])
  return (
    <div className="text-center text-3xl bg-gray-500 p-4">
      Github Followers : {data.followers}
    </div>
  )
}

export default Github
export const githubInfoLoader= async()=>{
   const response= await fetch('http://api.github.com/users/hiteshchoudhary')
   return response.json()
}
