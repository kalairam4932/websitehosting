import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import toast from 'react-hot-toast'

export const Userdatalist = ({data}) => {
  const userdata = data
  const queryClient = useQueryClient();
  const{mutate : dlduserdata} = useMutation({
    mutationFn: async(id)=>{
      try {
        const res = await fetch(`http://localhost:4501/api/user/dld/${id}`,{
          method:"DELETE",
          credentials:"include",
          
        })
        const data = await res.json();
        if(!res.ok){
          throw new Error(data.error || "something went worng")
        }
        console.log(data);
        return data
      } catch (error) {
        throw error
        
      }

    },
    onSuccess :()=>{
      toast.success("deleted done")
      queryClient.invalidateQueries(["userdatakey"]);
    }
  })
  const handledld = (id)=>{
    dlduserdata(id);
    
  }
    
  return (
    <div>
    <table>
        <tr>
            <th>rollnumber</th>
            <th>fullname</th>
            <th>age</th>
            <th>action</th>
        </tr>
        <tr>
            <td>{userdata?.rollnumber}</td>
            <td>{userdata?.fullname}</td>
            <td>{userdata?.age}</td>
            <td className='d-flex gap-2'><button onClick={()=>handledld(userdata._id)}>dld </button>

            <button>edit</button>
            
            </td>
        </tr>
        
    </table>
    </div>
  )
}
