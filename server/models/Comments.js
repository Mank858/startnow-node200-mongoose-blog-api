const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true},
    body: { type: String, required: true},
    published: { type: Date, required: true},
})

module.exports = mongoose.model('Comment', commentSchema);