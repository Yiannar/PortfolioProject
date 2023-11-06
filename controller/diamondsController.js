const express = require ('express')
const diamonds = express.Router()
const {getAllDiamonds, updateDiamond,getDiamond,createDiamond, deleteDiamond} = require('../queries/diamonds/diamonds')


const reviewsController = require('./reviewsController')

diamonds.use('/:diamondId/reviews', reviewsController)


//INDEX 
diamonds.get('/', async (req, res) => {
    const allDiamonds = await getAllDiamonds();
    if (allDiamonds.length > 0) {
      res.status(200).json(allDiamonds);
    } else {
      res.status(404).json({ error: 'No diamonds found' });
    }
  });

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
diamonds.post('/', async (req, res) => {
    try {
      const diamond = await createDiamond(req.body);
      res.status(201).json(diamond);
    } catch (error) {
      res.status(500).json({ error: 'Diamond creation failed' });
    }
  });

//DELETE
diamonds.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const deletedDiamond = await deleteDiamond(id);
      res.status(200).json(deletedDiamond);
    } catch (error) {
      res.status(404).json({ error: 'Diamond not found' });
    }
  });
  

//UPDATE
diamonds.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const updatedDiamond = await updateDiamond(id, req.body);
      res.status(200).json(updatedDiamond);
    } catch (error) {
      res.status(404).json({ error: 'Diamond not found' });
    }
  });

module.exports = diamonds;