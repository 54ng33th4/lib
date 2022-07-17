//importing modules
const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors');
const BlogModel = require('./models/BlogModel')
const bodyparser = require('body-parser');
// const path = require('path');
// const BlogModel = require('./models/BlogModel');

var app = express();

// const route = require('./routes/route');


//port no
const port = 3000;

//adding middilware
app.use(cors());

//bdoy-parser
app.use(bodyparser.json());

//static files
// app.use(express.static(path.join(__dirname, 'public')));

//route
// app.use('/api',route);


app.get('/Blogs', (req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    BlogModel.find()
    .then(function(Blogbody){
        res.send(Blogbody); 
    })
})

app.post('/add',(req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    // var Blog = ({
    //     BlogHead: req.body.item.BlogHead,
    //     BlogDesc: req.body.item.BlogDesc,
    //     BlogCont: req.body.item.BlogCont
    // });
    var Blog = ({
        BlogAuth: req.body.item.BlogAuth,
        BlogImg : req.body.item.BlogImg,
        BlogHead: req.body.item.BlogHead,
        BlogDesc: req.body.item.BlogDesc,
        BlogCont: req.body.item.BlogCont
    });

    var Blogbody = new BlogModel(Blog)
    Blogbody.save();
    console.log("new data added successfully...");


    // new Blogbody.save((err, Blog)=>{
    //     if(err)
    //     {
    //         res.json({msg: 'failed to add contact'+err});
    //     }
    //     else{
    //         res.json({msg: 'contact added successfully'});

    //     }
    // });
});

app.delete('/remove/:id',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    id = req.params.id;
    BlogModel.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('data deleted successfully')
        res.send();
    })
  })

  app.get('/Blog/:id',  (req, res) => {

    const id = req.params.id;
    // console.log("2-success")
    BlogModel.findOne({"_id":id})
      .then((i)=>{
          res.send(i);
      });
    //   console.log(bdata);
  })

  app.put('/edit',(req, res)=>{
      console.log(req.body)
      id=req.body._id,
      BlogAuth = req.body.BlogAuth,
      BlogImg  = req.body.BlogImg,
      BlogHead = req.body.BlogHead,
      BlogDesc = req.body.BlogDesc,
      BlogCont = req.body.BlogCont,
      BlogModel.findByIdAndUpdate({"_id":id},
                                {$set:{"BlogAuth":BlogAuth,
                                "BlogImg":BlogImg,
                                "BlogHead":BlogHead,
                                "BlogDesc":BlogDesc,
                                "BlogCont":BlogCont}})
 .then(function(){
     res.send();
                                        // console.log(res);
    })
  })

app.listen(port,()=>{
    console.log('server run at port:'+port);
})