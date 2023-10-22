const db = require ('../../db/dbConfig')

const getAllOrderItems = async () =>{
    try {
        const allOrderItems = await db.any('SELECT * FROM orderItems')
        return allOrderItems
    } catch (error) {
        return error
    }
}

const createOrderItem = async () =>{
    let {order_id, product_id, quantity, item_price, user_id} = orderItems
    try {
        const newOrderItem = await db.one(
            'INSERT INTO orderItems (order_id, product_id, quantity, item_price, user_id) VALUES ($1, $2, $3, $4, $5) RETURN *',
            [order_id, product_id, quantity, item_price, user_id]
        )
        return newOrderItem
    } catch (error) {
        return error
    }
}

const deleteOrderItems = async(id) =>{
    try {
        const deletedOrderItems = await db.one(
            'DELETE FROM orderItems WHERE id=$1 RETURNING *', id
        )
        return deletedOrderItems
    } catch (error) {
        return error
    }
}

const getOrderItems = async (id) =>{
    try {
        const orderItems = await db.any('SELECT * FROM orderItems WHERE id=$1', id)
        return orderItems
    } catch (error) {
        return error
    }
}

const updateOrderItems = async (id, orderItems) =>{
    let {order_id, product_id, quantity, item_price, user_id} = orderItems
    try {
        const updatedOrderItems = await db.one('UPDATE orderItems SET order_id=$1, product_id=$2, quantity=$3, item_price=$4, user_id=$5 where id=$6 RETURNING *',
        [order_id, product_id, quantity, item_price, user_id])
        return updateOrderItems
    } catch (error) {
        return error
    }
}


module.exports = {getAllOrderItems, createOrderItem,deleteOrderItems,getAllOrderItems,updateOrderItems}