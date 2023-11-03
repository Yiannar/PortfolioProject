const express = require('express')
const profile = express.Router({mergeParams:true})
const {getAllUserProfiles,getUser,loginUser,createUser,deleteUser,updateUser} = require ('../queries/user_profile/user_profile')





//INDEX
profile.get('/', async (req, res)=>{
    const { diamondId }= req.params
try {
    const allprofile = await getAllUserProfiles(diamondId)
    res.status(200).json(allprofile)
} catch (error) {
    res.status(500).json({error: 'Internal Server Error'})
}   } );


// SHOW
profile.get('/:id', async (req, res) => {
    const { id } = req.params;
    const userProfile = await getUser(id); // Change 'review' to 'userProfile'
    if (!userProfile.message) {
      res.status(200).json(userProfile);
    } else {
      res.status(400).json({ error: "Not found" });
    }
  });
  

//CREATE 
profile.post('/', async (req, res)=>{
    try {
        const profile = await createUser(req.body)
        res.status(200).json(profile)
    } catch (error) {
        res.status(500).json({error: 'error'})
    }
})

// LOGIN
profile.post('/login', async (req, res) => {
    try {
      const loggedInUser = await loginUser(req.body);
      if (!loggedInUser.message) {
        res.status(200).json(loggedInUser);
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

//DELETE 

profile.delete('/:id', async(req,res)=>{
    try {
        const {id}= req.params
        const deletedprofile= await deleteUser(id)
        res.status(200).json(deletedprofile)
    } catch (error) {
        res.status(404).json({error: "Id not found"})
    }
})


//UPDATE 

profile.put('/:id', async (req, res)=>{
    try {
        const { id } = req.params
        const updatedprofile = await updateUser(id, req.body)
        res.status(200).json(updatedprofile)
    } catch (error) {
        res.status(404).json({error:"profile not found!"})
    }
})


module.exports = profile;