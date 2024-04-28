import mongoose from 'mongoose';
const { Schema, Types, models, model } = mongoose;

//user schema
const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },

    profilePic: Buffer,
  },
  { timestamps: true }
);

//post schema
const PostSChema = new Schema(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    authorId: {
      ref: 'user',
      type: Types.ObjectId,
      required:true,
    },
    comments: [
      {
        ref: 'user',
        type: Types.ObjectId,
      },
    ],
    likes: [
      {
        ref: 'user',
        type: Types.ObjectId,
      },
    ],
  },
  { timestamps: true }
);

//comment schema
const CommentSchema = new Schema(
  {
    comment: String,
    thumbnail: [Buffer],
    postId: {
      type: Types.ObjectId,
      ref: 'Post',
    },
    author: {
      type: Types.ObjectId,
      ref: 'user',
    },
  },
  { timestamps: true }
);

// models
const user = models.user || model('user', UserSchema);
const post = models.post || model('post', PostSChema);
const comment = models.comment || model('comment', CommentSchema);

export { user, post, comment };
