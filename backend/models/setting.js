const  mongoose  = require("mongoose");

const settingSchema = new mongoose.Schema({

    maximumstop:{
        type:Number
    },
    driverrequest:{
        type:Number
    }
})

const setting = mongoose.model('setting',settingSchema)
module.exports = setting;







