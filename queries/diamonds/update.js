const db = require("../../db/dbConfig")

const updateDiamond = async (id, diamond) => {
    let {shape ,image, carat , color , clarity , cut, price, is_reported} = diamond
    try {
        const updatedDiamond = await db.one('UPDATE diamonds SET shape=$1 ,image=$2, carat=$3 , color=$5 , clarity=$6 , cut=$7, price=$8, is_reported=$9 WHERE id=$10 RETURNING *',
        [
           shape ,
           image, 
           carat , 
           color , 
           clarity , 
           cut, 
           price, 
           is_reported,
            id,
        ]
        )
     return updatedDiamond
    } catch (error) {
        return error
    }
};

module.exports= {updateDiamond}