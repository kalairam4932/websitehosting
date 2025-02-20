import User from "../model/crud.model.js"


export const createuser = async(req,res)=>{
    try {
        const{ fullname, rollnumber, email, age} = req.body
        const alredyusedrollnumber = await User.findOne({rollnumber})
        const alredyusedemail = await User.findOne({email})

        if(alredyusedrollnumber || alredyusedemail){
            return res.status(400).json({
                error:"already used email or roll number used"
            })
        }

        const userdata =  new User({
            fullname,
            rollnumber,
            email,
            age


        })

        if(userdata){
            await userdata.save();
            res.status(200).json({
                message :"user created"
            })
        }else{
            return res.status(400).json({
                message : "user created error"
            })
        }
        
    } catch (error) {
        console.log(`error in createuser ${error}`)
        return res.status(500).json({
            "message":"internal server error"
        })
        
    }
}

export const getuser = async(req,res)=>{
    try {
        const user = await User.find();
        if(!user){
            return res.status(400).json({
                error:"no user available"
            })
        }
        res.status(200).json(user)
    } catch (error) {
        console.log(`error in getuser ${error}`)
        return res.status(500).json({
            "message":"internal server error"
        })
    }
}

export const dlduser = async(req,res)=>{
    const {id} = req.params;
    const userdata = await User.findById({_id:id})

    if(!userdata){
        return res.status(400).json({
            "error":"user not found"
        })
    }

    await User.findByIdAndDelete({_id:id})
    return res.status(200).json({
        message:"dld the post "
    })


}

export const updateuser = async(req,res)=>{
    try {
        const {id}= req.params;
        const {fullname,email,age,rollnumber} = req.body
        const user = await User.findById({_id:id})
        if(!user){
            return res.status(400).json({"error":"user not found!"})
        }
        await User.findByIdAndUpdate(id,{fullname,email,age,rollnumber})
        res.status(200).json(user)
        
    } catch (error) {
        
    }

} 