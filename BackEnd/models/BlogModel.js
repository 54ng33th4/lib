const mongoose = require('mongoose');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/BlogData');

//on connection
mongoose.connection.on('connected',()=>{
    console.log('connected to database mongodb @ 27017');
});

mongoose.connection.on('error',(err)=>{
    if(err)
    {
        console.log('Error in Database conncetion:'+err)
    }
});


const Schema = mongoose.Schema;

var NewBlogSchema = new Schema({
    BlogAuth:{
        type: String,
        required:true
    },
    BlogImg:{
        type: String,
        required: true
    },
    BlogHead:{
        type: String,
        required: true
    },
    BlogDesc:{
        type: String,
        required: true
    },
    BlogCont:{
        type: String,
        required: true
    },
});

var BlogData = mongoose.model('Blog', NewBlogSchema);
module.exports = BlogData;