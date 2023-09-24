//we design the schemna for the items we would have in our store

const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.Types.ObjectId
//object id is a unique identifier for every document created in mongoDB

const itemSchema = new mongoose.Schema({
    owner : {
       type: ObjectID,
       required: true,
       ref: 'User'
    },
    name: {
       type: String,
       required: true,
       trim: true
    },
    description: {
      type: String,
      required: true
    },
    category: {
       type: String,
       required: true
    },
    price: {
       type: Number,
       required: true
    }
    }, {
    timestamps: true
    })

    const Item = mongoose.model('Item', itemSchema)
    module.exports = Item