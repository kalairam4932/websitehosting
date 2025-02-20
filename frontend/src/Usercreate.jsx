import React, { useState } from 'react'
import { useMutation } from "@tanstack/react-query";
import axios from "axios"
import toast from 'react-hot-toast';


export const Usercreate = () => {
    const [data,setData] = useState({
        rollnumber :"",
        fullname :"",
        email :"",
        age:"",


    });
        // const{mutate:createuser,isError,isPending,error,} = useMutation({
        //     mutationFn : async({rollnumber,fullname,email,age})=>{
        //         try {
        //             const res = await axios.post("http://localhost:4001/api/user/createuser",{
        //                 rollnumber,
        //                 fullname,
        //                 email,
        //                 age

        //             })
        //             if (res.status !== 200) {
        //                 throw new Error(res.data || "somethingwent worng");
        //             }
        //             console.log(`create user res ${res.data}`)
        //             return res.data

        //         } catch (error) {
        //             console.error(`error in create user api ${error.message}`)
        //             throw error 
                    
        //         }
        //     },
        //     onSuccess:()=>{
        //         toast.success('User Created !')
        //     },
        //     onError : (error)=>{
        //         toast.error(error.message)
        //     }

        // })

        const{mutate:createuser,isError,error} = useMutation({
            mutationFn : async({rollnumber,email,age,fullname})=>{
                try {
                    const res = await fetch("http://localhost:4501/api/user/createuser",{
                        method:"POST",
                        credentials:"include",
                        headers : {
                            "Content-Type": "application/json",
                            "Accept": "application/json"
                        },
                        body :JSON.stringify({rollnumber,email,age,fullname})

                    });
                    const data = await res.json();
                    if(!res.ok){
                        throw new Error(data.error || "somethingwent wrong");
                    
                    }
                    console.log("user created ");
                    return data
                } catch (error) {
                    console.error(`error in creatser api ${error.message}`)
                    throw error
                    
                }
            },
            onSuccess : ()=>{
                console.log("hai")
                toast.success('Successfully toasted!')
            },
            onError : (error)=>{
                console.error("bye")
                console.log(`errro in create user ${error.message}`)
                toast.error(error.message)
            }
        })

    const handledatasubmit = (e)=>{
        e.preventDefault()
        createuser(data)

    }
    const heandleonchange = (e)=>{
        setData({...data, [e.target.name]:e.target.value});

    }
  return (
    <>
        <div className=''>
            <form onSubmit={handledatasubmit}>
                <h1>enter the User data</h1>

                <div className='d-flex flex-column gap-2 align-items-center'>
                <label className=''>
                    

                    <input type="text"  
                    placeholder='rollnumber'
                    name='rollnumber'
                    onChange={heandleonchange}
                    required
                    />


                </label>

                <label className=' '>
                   

                    <input type="text" 
                    name='fullname'
                    placeholder='fullnametoast'
                    required
                    onChange={heandleonchange}

                    />


                </label>
                <label className=' '>
                   

                   <input type="text"  
                   name='email'
                    placeholder='email'
                    required
                    onChange={heandleonchange}

                    />


               </label>
               <label className=' '>
                   

                   <input type="text" 
                   name='age'
                    placeholder='age'
                    onChange={heandleonchange}

                    
                    />


               </label>

               <button>create</button>
                </div>
                

            </form>

        </div>
    
    </>
  )
}
