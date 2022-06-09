const { Comment, Jargon, User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // uncomment following when Auth middleware is implemented
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('submissions')
          .populate('comments');
    
        return userData;
      }
    
      throw new AuthenticationError('Not logged in');
      },
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
        .populate('submissions')
        .populate('comments');
    },
    jargons: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Jargon.find(params).sort({ createdAt: -1 }); 
    },
    jargon: async (parent, { _id }) => {
      return Jargon.findOne( { _id });
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      console.log(args)
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    // login function
    login: async (parent, { email, password } ) => {
      const user = await User.findOne({ email });
    
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
    
      const correctPw = await user.isCorrectPassword(password);
    
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
    
      const token = signToken(user);
      return { token, user };
    },
    // add [ , context ] when Auth is enabled, [, username: context.user.username]
    addJargon: async (parent, args, context ) => {
      if( context.user ){
        const jargon = await Jargon.create({ ...args, username: context.user.username });
        
        console.log(jargon);  
        await User.findByIdAndUpdate(
          { _id: context.userId },
          { $push: { submissions: jargon._id } },
          { new: true }
        );
          
        return jargon;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addComment: async (parent, { commentText, jargonId }, context ) => {
      if( context.user ) {
        const comment = await Comment.create({ commentText, username: context.user.username })
        
        await Jargon.findByIdAndUpdate(
          { _id: jargonId },
          { $push: { comments: comment._id } },
          { new: true }
        );

        await User.findByIdAndUpdate(
          { _id: context.user.userId },
          { $push: { comments: comment._id } },
          { new: true }
        );

        return comment;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addReply: async (parent, { commentId, replyBody }, context ) => {
      if( context.user ) {
        const updatedComment = await Comment.findOneAndUpdate(
          { _id: commentId },
          { $push: { replies: { replyBody, username: context.user.username } } },
          { new: true, runValidators: true }
        );

        return updatedComment;
      }
      throw new AuthenticationError('You need to be logged in!');

    }



  }
};

module.exports = resolvers;