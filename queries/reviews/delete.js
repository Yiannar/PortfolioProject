const db = require("../../db/dbConfig")


const deleteReview = async (id)=>{
    try {
        const deletedReview = await db.one('DELETE FROM reviews WHERE id=$1 RETURNING *', id)
        return deletedReview
    } catch (error) {
        return error
    }
}

module.exports ={deleteReview}