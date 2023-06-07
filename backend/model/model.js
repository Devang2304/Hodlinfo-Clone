const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    symbol: String,
    lastPrice: String,
    bidPrice: String,
    askPrice: String,
    volume: String,
    baseAsset:String
});

const apiData= mongoose.model('ApiData',postSchema);

module.exports = apiData;