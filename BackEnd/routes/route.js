const express = require('express')
const router = express.Router();
const Contact = require('../models/BlogModel')
const bodyparser = require('body-parser')


//retriving data
router.get('/Blogs', (req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    Contact.find(function(err, contacts){
        res.json(contacts);
    })
});

//add contact
router.post('/add',(req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    var Blog = ({
        Blog_Heading: req.body.Blog_Heading,
        log_Desc: req.body.log_Desc,
        Blog_Cont: req.body.Blog_Cont
    })

    var Blogs = new Blog(contacts)
    Blogs.save();

    newContact.save((err, Contact)=>{
        if(err)
        {
            res.json({msg: 'failed to add contact'});
        }
        else{
            res.json({msg: 'contact added successfully'});

        }
    });
});

//deleting contact
router.delete('/contact/:id',(req, res, next)=>{
    Contact.deleteOne({_id: req.params.id}, function(err, results){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(results);
        }

    });
});

module.exports = router