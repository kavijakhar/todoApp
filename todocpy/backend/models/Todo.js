const mongoose = require("mongoose");
const {Schema} = mongoose;

const TodoSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    title: {
        type: "String",
        required: true,
    },
    description: {
        type: "String",
        required: true,
    },  
    date: { 
        type: Date,
        default: Date.now,
    },
},{timestamps:true})
  
module.exports = mongoose.model('todo', TodoSchema);
  