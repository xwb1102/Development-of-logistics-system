/**
 * Created by Moudi on 2017/3/12.
 */
const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    id: Number,
    province:String,
    county:Array
});