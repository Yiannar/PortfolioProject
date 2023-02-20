const db = require ('../../db/dbConfig')

const createDiamond = async(diamond)=>{
    let {shape ,image, carat , color , clarity , cut, price, is_reported} = diamond
    try {
        const newDiamond = await db.one(
            'INSERT INTO diamonds (shape ,image, carat , color , clarity , cut, price, is_reported) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
        [  shape ,
            image, 
            carat , 
            color , 
            clarity , 
            cut, 
            price, 
            is_reported])
        return newDiamond
    } catch (error) {
        return error
    }
};


module.exports={
    createDiamond
}
