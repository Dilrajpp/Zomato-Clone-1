const { response } = require('express');
const Mealtypes = require('../Models/mealtype');

exports.getMealtypes = (req, res) => {
    Mealtypes.find()
.then(response => {
res.status(200).json({
    message:"Mealtypes Fetched Successfully",
    mealtypes: response
})
})
.catch(err =>{
    res.status(500).json({ error:err })
})
}