const mongoose = require('mongoose')
const Painting = require("./models/Painting");
const connectDB = require("./config/database");
require("dotenv").config({ path: "./config/.env" }); 
let db = mongoose.connection;
connectDB();
db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
    console.log("Connection Successful!");

let paintings = [
 { name: "The Night Watch",
 artist: "Rembdrandt", 
year: "1642",
image: "https://en.wikipedia.org/wiki/The_Night_Watch#/media/File:The_Night_Watch_-_HD.jpg",
details: "Baroque style by famed Dutch artist"
 },
 { 
 name: "Mona Lisa",
 artist: "Leonardo da Vinci", 
 year: "1642",
 image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
 details: "Renaissance Italy"
  
 },
{ 
 name: "The Blue Boy",
 artist: "Thomas Gainsborough", 
 year: "1770",
 image: "https://www.legrandmag.com/wp-content/uploads/2018/11/image1.jpeg",
 details: "British"
  
 },

{ 
 name: "The Yellow Tank",
 artist: "Thomas YELLOW ", 
 year: "yeloow ",
 image: "https://www.legrandmag.com/wp-content/uploads/2018/11/image1.jpeg",
 details: "British"
  
 }];
 
    // save multiple documents to the collection referenced by Painting Model
    Painting.collection.insertMany(paintings, {ordered: false}, function (err, docs) {
      if (err){ 
          return console.error(err);
      } else {
        console.log("Multiple documents inserted to Collection");
      }
    });
   })

   