const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  description: String,
  foto: String,
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment"}],
  date: Date,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Post = mongoose.model('Post', postSchema);


module.exports = Post;