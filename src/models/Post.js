import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  password: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'USer',
    required: true,
  },
});

export default mongoose.model('Post', Schema);
