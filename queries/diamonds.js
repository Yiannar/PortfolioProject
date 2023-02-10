const db = require ('../db/dbConfig')

const getAllDiamonds = async () =>{
    try {
        const allDiamonds = await db.any('SELECT * FROM diamonds')
        return allDiamonds
    } catch (error) {
        return (error)
    }
};

const getDiamond = async ()=>{
    try {
        const diamond = await db.one('SELECT * FROM diamonds WHERE id=$1', id)
        return diamond
    } catch (error) {
        return error
    }
};

const createDiamond = async(diamond)=>{
    try {
        const newDiamond = await db.one(
            'INSERT INTO diamonds (shape ,image, carat , color , clarity , cut, price, is_reported) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *'
        )[shape ,image, carat , color , clarity , cut, price, is_reported]
        return newDiamond
    } catch (error) {
        return error
    }
};

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

const updateDiamond = async (id, diamond) => {
    try {
        const updatedDiamond = await db.one('UPDATE diamonds SET shape=$1 ,image=$2, carat=$3 , color=$5 , clarity=$6 , cut=$7, price=$8, is_reported=$9 WHERE id=$10 RETURNING *',
        [
            diamond.shape ,
            diamond.image, 
            diamond.carat , 
            diamond.color , 
            diamond.clarity , 
            diamond.cut, 
            diamond.price, 
            diamond.is_reported,
            id,
        ]
        )
     return updatedDiamond
    } catch (error) {
        return error
    }
};

module.exports={
    getAllDiamonds,
    getDiamond, 
    createDiamond,
    deleteDiamond,
    updateDiamond
}
