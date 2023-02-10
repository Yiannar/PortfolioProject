
const db = require("../../db/dbConfig")

const updateReview = async (id, review)=>{
    try {
        const updatedReview = await db.one('UPDATE reviews SET reviewer=$1, title=$2, content=$3, rating=$4 WHERE id=$5 RETURNING * ', 
        [review.reviewer, review.title, review.content, review.rating, id])
        return updatedReview
    } catch (error) {
        return error
    }
}

module.exports = {updateReview}