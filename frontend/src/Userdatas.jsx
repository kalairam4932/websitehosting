import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Userdatalist } from './Userdatalist'

export const Userdatas = () => {

    const{data:userdata,isLoading} = useQuery({
        queryKey:["userdatakey"],
        queryFn : async()=>{
            try {
                const res = await fetch("https://mernproject-u4q1.onrender.com/api/user",{
                    method:"GET",
                    credentials:"include",
                    headers:{
                        "Content-Type":"application/json",
                    }
                })
                const data = await res.json()
                if(!res.ok){
                    throw new Error(data.error || "something went worng")
                }
                
                return data
            } catch (error) {
                throw error
                
            }

        }
    })
  return (
    <div>
       {!isLoading && userdata?.length === 0 && <p >No posts in this tab. Switch 👻</p>}
        {!isLoading && userdata && (
            <div>
                {userdata.map((data)=>(<Userdatalist key={data._id} data={data} />)
                    
                )}
            </div>
        )}

        
    </div>
  )
}
