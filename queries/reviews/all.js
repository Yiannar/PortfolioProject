const db = require("../../db/dbConfig")

const getAllReviews = async (diamond_id)=>{
    try {
        const allReviews = await db.any("SELECT * FROM reviews WHERE diamond_id=$1", diamond_id)
        return allReviews
    } catch (error) {
        return error
    }
}

module.exports = {getAllReviews}