const mongoose=require('mongoose');
const initData=require('./data.js');
const Listing=require('../models/listing.js');

const MONGO_URL='mongodb://localhost:27017/wanderlust';
main()
     .then(()=>{
        console.log("connected to DB")
    })
    .catch((err)=>{
        console.log(err);
    });

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB=async()=>{
   await  Listing.deleteMany({});
   initData.data=initData.data.map((obj)=>({...obj,owner:'692e9a78beb9517938f3c3fb'}))
   await Listing.insertMany(initData.data);
    console.log("Database initialized with sample data");
}

initDB();