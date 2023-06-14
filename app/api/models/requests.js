const mongoose = require("mongoose")
const { Schema } = mongoose;

mongoose.connect(
    "mongodb://lbabay-personal-site-db:3TdvmfCL3vDp1sxfJabXATGhEvPOGo37kdce8vORSTqwTaxVFa7p1oEMu01V4zA3BXn52swqVBbjACDbN69rzQ==@lbabay-personal-site-db.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@lbabay-personal-site-db@", { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        retryWrites: false
    }
)

const Requests = new Schema({ 
   requests: { 
       type: Number
   } 
})

module.exports = mongoose.model("Requests", Requests)