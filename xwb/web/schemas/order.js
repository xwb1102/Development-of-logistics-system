/**
 * Created by Moudi on 2017/3/12.
 */
const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    id: Number,
    jcontent: String,
    money: String,
    send: Boolean,
    time: String,
    scontent:String,
    jPhone: String,
    sPhone: String,
    jAddr:String,
    sAddr:String,
    logistics:Array,
    goods:Object
});