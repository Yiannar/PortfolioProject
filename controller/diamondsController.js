const express = require ('express')
const diamonds = express.Router()
// const { checkShape, checkBoolean, validateImage,} = require('../validations/checkDiamonds')
const {createDiamond,} = require ('../queries/diamonds/create')
const {getAllDiamonds}= require('../queries/diamonds/all')
const{deleteDiamond} = require('../queries/diamonds/delete')
const {getDiamond} = require('../queries/diamonds/show')
const {updateDiamond}= require('../queries/diamonds/update')


const reviewsController = require('./reviewsController')

diamonds.use('/:diamondId/reviews', reviewsController)


//INDEX 
diamonds.get('/', async(req, res)=>{
    const allDiamonds = await getAllDiamonds()
    if (allDiamonds[0]){
        res.status(200).json(allDiamonds)
    }else {
        res.status(500).json({error:'Internal Server Error'})
    }
})

//SHOW
diamonds.get('/:id', async(req, res)=>{
    const{ id }= req.params
    const diamond = await getDiamond(id)
    console.log('diamond', diamond)
    if(!diamond.message){
        res.status(200).json(diamond)
    }else{
        res.status(400).json({error:'Not found'})
    }
})

//CREATE
diamonds.post('/', async (req, res)=>{
   try {
    const diamond = await createDiamond(req.body)
    console.log(diamond)
    res.status(200).json(diamond)
   } catch (error) {
    res.status(500).json({error:'error cannot create'})
   } 
})

//DELETE
diamonds.delete('/:id', async (req, res)=>{
    try {
        const {id} = req.params
        const deletedDiamond = await deleteDiamond(id)
        res.status(200).json(deletedDiamond)
    } catch (error) {
        res.status(404).json({error:'id not found'})
        
    }
})

//UPDATE
diamonds.put('/:id', async(req, res)=>{
    try {
        const {id}= req.params
        const updatedDiamond = await updateDiamond(id, req.body)
        res.status(200).json(updatedDiamond)
    } catch (error) {
        res.status(404).json({error:'diamond not found'})
    }
})

module.exports = diamonds;