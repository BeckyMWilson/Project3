const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        commentCount: Int
        submissions: [Jargon]
        comments: [Comment]
    }

    type Jargon {
        _id: ID
        jargonBody: String
        jargonDef: String
        createdAt: String
        username: String
        commentCount: Int
        comments: [Comment]
    }

    type Comment {
        _id: ID
        commentText: String
        createdAt: String
        username: String
        replyCount: Int
        replies: [Reply]
    }

    type Reply {
        _id: ID
        replyBody: String
        createdAt: String
        username: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        jargons(username: String): [Jargon]
        jargon(_id: ID!): Jargon
    }

    type Mutation {
        login(email: String!, password: String!): User
        addUser(username: String!, email: String!, password: String!): User
        addJargon(jargonBody: String!, jargonDef: String!, userId: ID!): Jargon
        addComment(jargonId: ID!, commentBody: String!, userId: ID!, username: String!): Comment
        addReply(commentId: ID!, replyBody: String!, username: String!): Comment
    }
`;
// CHANGES NEEDED
// Change mutations to return Auth when implemented
// REMOVE username reference from: addJargon, addComment, addReply
module.exports = typeDefs;