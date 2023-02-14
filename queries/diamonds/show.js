const db = require("../../db/dbConfig")

const getDiamond = async (id)=>{
    try {
        const diamond = await db.any('SELECT * FROM diamonds WHERE id=$1', id)
        return diamond
    } catch (error) {
        return error
    }
};

module.exports={getDiamond}