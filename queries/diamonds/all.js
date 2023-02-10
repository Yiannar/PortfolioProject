const db = require("../../db/dbConfig")

const getAllDiamonds = async () =>{
    try {
        const allDiamonds = await db.any('SELECT * FROM diamonds')
        return allDiamonds
    } catch (error) {
        return (error)
    }
};

module.exports={getAllDiamonds}