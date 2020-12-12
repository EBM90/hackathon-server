const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  creator: { type: Schema.Types.ObjectId, ref: "User"},
  body: String,
  date: Date,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;