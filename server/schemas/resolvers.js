const { Comment, Jargon, User, Reply } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
//const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // uncomment following when Auth middleware is implemented
    /* me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('thoughts')
          .populate('friends');
    
        return userData;
      }
    
      throw new AuthenticationError('Not logged in');
      }, */
    // get all users
    users: async () => {
        return User.find()
        .select('-__v -password')
        .populate('submissions')
        .populate('comments');
    },
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('friends')
        .populate('thoughts');
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      //const token = signToken(user);
      // token, <- add to return object
      return {  user };
    },
    // add login when Auth is enabled, change true to: context.user
    // add [ , context ] when Auth is enabled, [, username: context.user.username]
    addJargon: async ( parent, args  ) => {
      if(true){
        const jargon = await Jargon.create( { ...args } );

        await User.findByIdAndUpdate(
          { _id: args.userId },
          { $push: { submissions: jargon._id } },
          { new: true }
        );

        return jargon;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addComment: async (parent, { commentBody, jargonId, userId, username } ) => {
      if(true) {
        const comment = await Comment.create({ commentBody, username })
        
        await Jargon.findByIdAndUpdate(
          { _id: jargonId },
          { $push: { comments: comment._id } },
          { new: true }
        );

        await User.findByIdAndUpdate(
          { _id: userId },
          { $push: { comments: comment._id } },
          { new: true }
        );

        return comment;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addReply: async (parent, { commentId, replyBody, username } ) => {
      if(true) {
        const updatedComment = await Comment.findOneAndUpdate(
          { _id: commentId },
          { $push: { replies: { replyBody, username } } },
          { new: true, runValidators: true }
        );

        return updatedComment;
      }
      throw new AuthenticationError('You need to be logged in!');

    }



  }
};

module.exports = resolvers;