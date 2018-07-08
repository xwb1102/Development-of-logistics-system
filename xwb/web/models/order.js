/**
 * Created by Moudi on 2017/3/12.
 */
const mongoose = require('mongoose');
const usersSchema = require('../schemas/order');

module.exports = mongoose.model('Order', usersSchema);