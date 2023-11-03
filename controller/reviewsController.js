const express = require('express')
const reviews = express.Router({mergeParams:true})
const {getAllReviews}= require('../queries/reviews/all')
const {getReview} = require('../queries/reviews/show')
const {deleteReview}= require('../queries/reviews/delete')
const {updateReview} = require('../queries/reviews/update')
const {createReview} = require('../queries/reviews/create')



//INDEX
reviews.get('/:diamond_id', async (req, res) => {
    const { diamond_id } = req.params;
  
    try {
      const reviews = await getAllReviews(diamond_id);
      res.status(200).json(reviews);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

//SHOW
reviews.get('/:id', async (req, res)=>{
    const { id } = req.params
    const review = await getReview(id)
    console.log ('review', review)
    if(!review.message){
        res.status(200).json(review)
    }else {
        res.status(400).json({error: "Not found"})
    }
})

//CREATE 
reviews.post('/', async (req, res)=>{
    try {
        const review = await createReview(req.body)
        res.status(200).json(review)
    } catch (error) {
        res.status(500).json({error: 'error'})
    }
})

//DELETE 

reviews.delete('/:id', async(req,res)=>{
    try {
        const {id}= req.params
        const deletedReview= await deleteReview(id)
        res.status(200).json(deletedReview)
    } catch (error) {
        res.status(404).json({error: "Id not found"})
    }
})


//UPDATE 

reviews.put('/:id', async (req, res)=>{
    try {
        const { id } = req.params
        const updatedReview = await updateReview(id, req.body)
        res.status(200).json(updatedReview)
    } catch (error) {
        res.status(404).json({error:"review not found!"})
    }
})


module.exports = reviews;