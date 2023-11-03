const express = require('express')
const order = express.Router({mergeParams:true})
const {createOrder,getAllOrders,deleteOrder,getOrder,updateOrder, deleteOrder, updateOrder} = require('../queries/orders/order')


//Index
order.get('/', async(req, res)=>{
    const allOrders = await getAllOrders()
    if (allOrders[0]){
        res.status(200).json(allOrders)
    }else {
        res.status(500).json({error:'Internal Server Error'})
    }
})

//SHOW
order.get('/:id', async(req, res)=>{
    const{ id }= req.params
    const order = await getOrder(id)
    console.log('order', order)
    if(!order.message){
        res.status(200).json(order)
    }else{
        res.status(400).json({error:'Not found'})
    }
})

//CREATE
order.post('/', async (req, res)=>{
    try {
     const order = await createOrder(req.body)
     console.log(order)
     res.status(200).json(order)
    } catch (error) {
     res.status(500).json({error:'error cannot create'})
    } 
 })

 //DELETE
order.delete('/:id', async (req, res)=>{
    try {
        const {id} = req.params
        const deletedOrder = await deleteOrder(id)
        res.status(200).json(deletedOrder)
    } catch (error) {
        res.status(404).json({error:'id not found'})
        
    }
})

//UPDATE
order.put('/:id', async(req, res)=>{
    try {
        const {id}= req.params
        const updatedOrder = await updateOrder(id, req.body)
        console.log(updatedOrder)
        res.status(200).json(updatedOrder)
    } catch (error) {
        res.status(404).json({error:'diamond not found'})
    }
})

module.exports = order;