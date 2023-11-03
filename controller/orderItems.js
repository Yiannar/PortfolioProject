const express = require('express')
const orderItems = express.Router({mergeParams:true})
const {getAllOrderItems, createOrderItem,deleteOrderItems,getOrderItems,updateOrderItems} = require('../queries/orders/orderItems')
const res = require('express/lib/response')
const req = require('express/lib/request')


//INDEX 

orderItems.get('/', async(req,res)=>{
    const allOrderItems = await getAllOrderItems()
    if(allOrderItems[0]){
        res.status(200).json(allOrderItems)
    } else {
        res.status(500).json({error:'Internal Server Error'})
    }
})

//SHOW
orderItems.get('/:id', async(req,res)=>{
    const {id}= req.params
    const orderItems = await getOrderItems(id)
    console.log('order item',orderItems )
    if (!orderItems.message){
        res.status(200).json(orderItems)
    } else {
        res.status(400).json({error:'Not found'})
    }
})

//CREATE
orderItems.post('/', async(req, res)=>{
    try {
        const orderItems = await createOrderItem(req.body)
        res.status(200).json(orderItems)
    } catch (error) {
        res.status(500).json({error:'error'})
    }
})

//DELETE
orderItems.delete('/:id', async(req,res)=>{
    try {
        const {id} = req.params
        const deletedOrderItem = await deleteOrderItems(id)
        res.status(200).json(deletedOrderItem)
    } catch (error) {
        res.status(500).json({error: 'ID not found'})
    }
})

// UPDATE
orderItems.put('/:id', async(req,res)=>{
    try {
        const {id} = req.params
        const updatedOrderItem = await updateOrderItems(id, req.body)
        res.status(200).json(updatedOrderItem)
    } catch (error) {
        res.status(500).json({error: 'order Item not found!'})
    }
})

module.exports = orderItems;