import express from 'express';
import fetch from 'node-fetch';
import mongoose from 'mongoose';
import path from 'path';
import Routes from './routes.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import apiData from './model/model.js';
import dotenv from 'dotenv';

dotenv.config();

const app=express();
app.use(express.json());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/',Routes);

const CONNECTION_URL=process.env.MONGODB_URL;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log('Connected to mongoDB successfully');
}).catch(err=>console.log(err.message));


if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.resolve(__dirname + "../frontend/build")));
    app.get("*",(req,res)=>res.sendFile(path.resolve(__dirname + "../frontend/build/index.html")));
}

const PORT =process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})

app.get("/",(req,res)=>{
    res.send("<h3>This is backend<h3>")
})

 let dataVar;
const getApiData =async (req, res)=>{
    const data= await fetch('https://api.wazirx.com/sapi/v1/tickers/24hr');
    const response = await data.json();
    // console.log(response.ticker.sell);
    dataVar= response;
    for(let i=0; i<10; i++){
        
        const apiDataPost=  new apiData({
                symbol: dataVar[i].symbol,
                lastPrice: dataVar[i].lastPrice,
                bidPrice: dataVar[i].bidPrice,
                askPrice: dataVar[i].askPrice,
                volume: dataVar[i].volume,
                baseAsset:dataVar[i].baseAsset
        })
        const nameToSearch= dataVar[i].symbol;

        const apiDataFind =await apiData.findOne({symbol: nameToSearch});
        if(apiDataFind){
    
               const LastPrice = dataVar[i].lastPrice
               const BidPrice = dataVar[i].bidPrice
               const AskPrice = dataVar[i].askPrice
               const Volume = dataVar[i].volume
               const BaseAsset =dataVar[i].baseAsset

            const findAndUpdate =await apiData.findOneAndUpdate({symbol: nameToSearch},{lastPrice:LastPrice,bidPrice:BidPrice,askPrice:AskPrice,volume:Volume,baseAsset:BaseAsset},{new:true});
            findAndUpdate.save();
            console.log("LastPrice:",LastPrice);
            console.log("BidPrice:",BidPrice);
            console.log("AskPrice:",AskPrice);
            console.log("Volume:",Volume);
            console.log("BaseAsset:",BaseAsset);
            console.log("------------------------")
        }else{
            apiDataPost.save();
        }
        
    }
}

setTimeout(()=>{
    getApiData();
},15000);