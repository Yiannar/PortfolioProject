const db = require('../../db/dbConfig')

const getAllUserProfiles = async () =>{
    console.log(db)
    try {
        const allProfiles = await db.any('SELECT * FROM profile')
        return allProfiles
    } catch (error) {
        return error
    }
}
    const getUser = async(id) =>{
        try {
            const user = await db.one('SELECT * FROM profile WHERE id =$1', id)
            return user
        } catch (error) {
            return error
        }
}

const loginUser = async (profile) => {
    let { email, password } = profile;
    try {
      const user = await db.one('SELECT * FROM profile WHERE email=$1 AND password=$2', [email, password]);
      const confidential = {
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        birth_date: user.birth_date,
        gender: user.gender,
        address: user.address,
        id: user.id
      };
      return { success: true, user: confidential };
    } catch (error) {
      // Handle the error gracefully and return an appropriate response.
      console.error(error);
      return { success: false, message: 'Invalid email or password' };
    }
  };
  
const createUser = async(profile) =>{
    let{first_name, last_name, email, password, birth_date, gender, address, zipCode} = profile
    try {
        const newUser = await db.one('INSERT INTO profile (first_name, last_name, email, password, birth_date, gender, address, zipCode) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
        [first_name, last_name, email, password, birth_date, gender, address, zipCode])
        return newUser
    } catch (error) {
        return error
    }
}

const deleteUser = async (id) =>{
    try {
        const deletedUser = await db.one(
            'DELETE FROM profile WHERE id = $1 RETURNING *', id
        ) 
        return deletedUser
    } catch (error) {
        return error
    }
}

const updateUser = async (id, profile) =>{
    let{first_name, last_name, email, password, birth_date, gender, address, zipCode} = profile
    try {
       const updatedUser = await db.one(
        'UPDATE profile SET first_name=$1, last_name=$2, email=$3, password=$4, birth_date=$5, gender=$6, address=$7, zipCode=$8 WHERE id=$9 RETURNING *',
        [first_name, last_name, email, password, birth_date, gender, address, zipCode]
       )
       return updatedUser
    } catch (error) {
        return error
    }
}

module.exports = {getAllUserProfiles,getUser,loginUser,createUser,deleteUser,updateUser}
