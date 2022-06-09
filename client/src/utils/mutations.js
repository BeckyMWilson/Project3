import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const ADD_JARGON = gql`
  mutation addJargon($jargonBody: String!, $jargonDef: String!) {
    addJargon(jargonBody: $jargonBody, jargonDef: $jargonDef) {
      _id
      jargonBody
      jargonDef
      createdAt
      username
      commentCount
      comments {
        _id
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($jargonId: ID!, $commentText: String!) {
    addComment(jargonId: $jargonId, commentText: $commentText) {
        _id
        commentText
        createdAt
        username
        replyCount
        replies {
          _id
          replyBody
          username
          createdAt
        }
    }
  }
`;

export const ADD_REPLY = gql`
  mutation addReply($commentId: ID!, $replyBody: Strong!) {
    addReply(commentId: $commentId, replyBody: $replyBody)
      _id
      commentText
      createdAt
      username
      replyCount
      replies {
        _id
        replyBody
        username
        createdAt
      }
`;