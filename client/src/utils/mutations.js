import { gql } from "@apollo/client";
 
export const LOGIN = gql`
 mutation login($email: String!, $password: String!) {
   login(email: $email, password: $password) {
     token
     user {
       _id
     }
   }
 }
`;
 
export const ADD_USER = gql`
 mutation addUser(
   $username: String!
   $email: String!
   $password: String!
   $dob: String!
   $gender: String!
 ) {
   addUser(
     userName: $userName
     email: $email
     password: $password
     gender: $gender
     dob: $dob
   ) {
     token
     user {
       _id
     }
   }
 }
`;
 
export const SAVE_PODCAST = gql`
 mutation savePodcast($podcasts: [ID]!) {
   savePodcast(podcasts: $podcasts) {
     podcasts {
       _id
       description
       image
       thumbnail
       title
       country
       language
       publisher
       website
       itunes_id
       total_episodes
       latest_pub_date_ms
       earliest_pub_date_ms
       explicit_content
 
       extra
       genre_ids
       episodes
       genre {
         name
       }
     }
   }
 }
`;
