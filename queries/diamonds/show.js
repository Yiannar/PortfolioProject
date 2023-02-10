const db = require("../../db/dbConfig")

const getDiamond = async ()=>{
    try {
        const diamond = await db.one('SELECT * FROM diamonds WHERE id=$1', id)
        return diamond
    } catch (error) {
        return error
    }
};

module.exports={getDiamond}