/**
 * Created by Moudi on 2017/3/12.
 */
const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  checked:Boolean,
  id:Number,
  content:String,
  phone: String,
  email: String,
  time: Number,
  open: Boolean
});