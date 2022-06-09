import { gql } from '@apollo/client';


export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      friendCount
      submissionCount
      submissions{
        _id
        jargonBody
        jargonDef
        createdAt
        commentCount
      }
      
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      submissionCount
      submissions {
        _id
        jargonBody
        jargonDef
        createdAt
        commentCount
        comments {
          _id
          createdAt
          commentText
          replyCount
          username
        }
      }
      comments {
        _id
        username
        replyCount
        createdAt
      }
    }
  }
`;

export const QUERY_JARGONS = gql`
  query jargons($username: String) {
    jargons(username: $username) {
      _id
      jargonBody
      jargonDef
      createdAt
      username
      commentCount
      comments {
        _id
        createdAt
        username
        replyCount
      }
    }
  }
`;

export const QUERY_JARGON = gql`
  query jargon($id: ID!) {
    jargon(_id: $id) {
      _id
      jargonBody
      jargonDef
      createdAt
      username
      commentCount
      comments {
        _id
        createdAt
        username
        commentText
        replyCount
        replies{
            _id
            replyBody
            username
            createdAt
        }
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      submissionCount
      submissions {
        _id
        username
        commentCount
      }
    }
  }
`;
