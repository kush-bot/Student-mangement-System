  const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({msg:"no such profile"})
    }
    const profileinfo = await profileData.findById(id)
    if(!profileinfo){
        return res.status(404).json({msg:"no such profile"})
    }
    res.status(200).json(profileinfo)