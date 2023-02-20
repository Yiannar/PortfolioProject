const db = require("../../db/dbConfig")


const createReview = async (id) =>{
    try {
       const oneReview = await db.one('SELECT * FROM reviews WHERE id=$1', id) 
       return oneReview
    } catch (error) {
        return error
    }
}

module.exports ={createReview}