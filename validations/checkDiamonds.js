// const checkShape = (req, res, next)=>{
//     if (req.body.shape){
//         next()
//     }else{
//         res.status(400).json({error:'Shape is required'})
//     }
// };

// const checkBoolean = (req, res, next) => {
//     if(
//         req.body.is_reported === true ||
//         req.body.is_reported === false ||
//         req.body.is_reported === undefined
//     ){
//         next()
//     }else{
//         res.status(400).json({error: 'is_reported must have a boolean value'})
//     }
// };

// const validateImage= (req, res, next) =>{
//     if (req.body.image.substring(0,8)==='https://'){
//         return next()
//     }else{
//         res.status(400).json({error:'Image must have a https:// URL'})
//     }
// };

// module.exports={checkBoolean,validateImage}