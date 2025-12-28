const mongoose=require("mongoose");

// mongoose
// .connect("mongodb://localhost:27017/youtube-app-1")
// .then(()=>console.log("Mongodb connected"))
// .catch(()=>console.lod("mongo error",err))


async function connectMongoDb(url){
    return mongoose.connect(url)
}

module.exports={
    connectMongoDb,
}