import { gql } from '@apollo/client';

export const GET_PRODUCT_BY_ID = gql`
query getprod($id: ID!) {
    product(id: $id,idType:SLUG) {
       id
       name
       databaseId
       shortDescription
       
       type
       galleryImages{
        nodes{
          sourceUrl
        }
      }

       image{
        sourceUrl
      }
     
      ...on SimpleProduct{
          id
          name
          price
          regularPrice
          salePrice
          

          crossSell{
            nodes{
              name
              id
              slug
              image{
                sourceUrl
                
              }
            }
          }
      }
      ... on VariableProduct {
        id
        name
        

        crossSell{
          nodes{
            name
            id
            slug
            image{
              sourceUrl
              
            }
          }
        }

        variations(first:12){
          nodes{
            id
            name
            price
            regularPrice
            salePrice
            slug
            attributes{
              nodes{
                value
              }
            }
          }
        }
      }
      
    }
  }
`;

export const GET_PRODUCTS = gql`
  query gps($cat: String!, $mafter: String) {
    products(first: 40, where: { supportedTypesOnly: true, category: $cat }, after: $mafter) {
      edges {
        node {
          id
          name
          image {
            sourceUrl
          }
          ... on SimpleProduct {
            price
          }
          ... on VariableProduct {
            price
            variations(first: 5) {
              nodes {
                image {
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  }
`;
export const GET_FABRIC_PRODUCTS = gql`
  query GetFabricProducts($firstt: Int, $cat: String!, $mafter: String, $filter: String) {
    products(
      first: $firstt,
      where: {
        supportedTypesOnly: true,
        category: $cat,
        search: $filter  # Include the filter only if it's not null
      },
      after: $mafter
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          id
          name
          slug
          description
          ... on SimpleProduct {
            image {
              sourceUrl
            }
            price
          }
          ... on VariableProduct {
            image {
              sourceUrl
            }
            price
          }
        }
      }
    }
  }
`;
