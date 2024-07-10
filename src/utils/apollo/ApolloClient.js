/*eslint complexity: ["error", 6]*/
// apolloClient.js

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_PRODUCT_BY_ID } from '../gql/GQL_QUERIES';
import { gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://www.onatiglobal.com/graphql', 
  cache: new InMemoryCache(),
});



export default client;
// http://localhost/submit-form.php