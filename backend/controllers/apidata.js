const apiData = require('../model/model');

const getData = async (req, res) => {
    try {
        const dataFromDB = await apiData.find({});
        res.status(200).json(dataFromDB);
        // console.log((dataFromDB));
    } catch (error) {
        res.status(404).json({message : error.message});
    }
}

module.exports = getData;