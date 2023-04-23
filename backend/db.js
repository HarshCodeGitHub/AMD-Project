const mongoose=require('mongoose');

// const mongoURI="mongodb://localhost:27017/INoteBook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
const mongoURI="mongodb+srv://rushikesh22010354:Ahmednagar45@cluster0.sppuwoh.mongodb.net/test"

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to mongo successfully !");
    })
}
module.exports = connectToMongo;