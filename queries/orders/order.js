const db = require ('../../db/dbConfig')

const getAllOrders = async () =>{
    try {
        const allOrders = await db.any('SELECT * FROM orders')
        return allOrders
    } catch (error) {
        return error
    }
}

const createOrder = async () =>{
    let {user_id, order_date, total_amount} = order
    try {
        const newOrder = await db.one(
            'INSERT INTO orders (user_id, order_date, total_amount) VALUES ($1, $2, $3) RETURNING *',
            [
                user_id,
                order_date, 
                total_amount
            ]
        )
        return newOrder
    } catch (error) {
        return error
    }
}

const deleteOrder = async (id) =>{
    try {
        const deletedOrder = await db.one(
            'DELETE FROM orders WHERE id=$1 RETURNING *', id
        )
        return deletedOrder
    } catch (error) {
        return error
    }
}

const getOrder = async (id) =>{
    try {
        const order = await db.any('SELECT * FROM orders WHERE id=$1', id)
        return order
    } catch (error) {
        return error
    }
}

const updateOrder = async (id, order) =>{
    let {user_id, order_date, total_amount} = order
    try {
        const updatedOrder = await db.one('UPDATE orders SET user_id=$1, order_date=$2, total_amount=$3 WHERE id=$4 RETURNING *', [
            user_id, order_date, total_amount
        ]) 
        return updatedOrder
    } catch (error) {
        return error
    }
}

module.exports={createOrder,getAllOrders,deleteOrder,getOrder,updateOrder}