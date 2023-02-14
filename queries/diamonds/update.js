const db = require("../../db/dbConfig")

const updateDiamond = async (id, diamond) => {
    let {shape ,image, carat , color , clarity , cut, price, is_reported} = diamond
    try {
        const updatedDiamond = await db.one('UPDATE diamonds SET shape=$1 ,image=$2, carat=$3 , color=$4 , clarity=$5 , cut=$6, price=$7, is_reported=$8 WHERE id=$9 RETURNING *',
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