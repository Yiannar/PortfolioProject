const db = require("../../db/dbConfig")
const deleteDiamond = async (id) => {
    try {
        const deletedDiamond = await db.one(
            'DELETE FROM diamonds WHERE id=$1 RETURNING *', id
        )
        return deletedDiamond
    } catch (error) {
        return error
    }
};
module.exports= {deleteDiamond}