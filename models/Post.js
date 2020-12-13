const mongoose = require('mongoose');

//The schema AKA how the post will look
const PostSchema = mongoose.Schema({
    //Describing the properties I want to use
    name: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    semester: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

//So we export this
module.exports = mongoose.model('Posts', PostSchema);
