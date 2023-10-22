const db = require ('../../db/dbConfig')

const getAllDiamonds = async () =>{
    try {
        const allDiamonds = await db.any('SELECT * FROM products')
        return allDiamonds
    } catch (error) {
        return (error)
    }
};


const createDiamond = async(diamond)=>{
    let {shape ,image, carat , color , clarity , cut, price, is_reported} = diamond
    try {
        const newDiamond = await db.one(
            'INSERT INTO products (shape ,image, carat , color , clarity , cut, price, is_reported) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
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

const deleteDiamond = async (id) => {
    try {
        const deletedDiamond = await db.one(
            'DELETE FROM products WHERE id=$1 RETURNING *', id
        )
        return deletedDiamond
    } catch (error) {
        return error
    }
};

const getDiamond = async (id)=>{
    try {
        const diamond = await db.any('SELECT * FROM products WHERE id=$1', id)
        return diamond
    } catch (error) {
        return error
    }
};

const updateDiamond = async (id, diamond) => {
    let {shape ,image, carat , color , clarity , cut, price, is_reported} = diamond
    try {
        const updatedDiamond = await db.one('UPDATE products SET shape=$1 ,image=$2, carat=$3 , color=$4 , clarity=$5 , cut=$6, price=$7, is_reported=$8 WHERE id=$9 RETURNING *',
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



module.exports={
    createDiamond, getAllDiamonds, deleteDiamond, updateDiamond, getDiamond
}