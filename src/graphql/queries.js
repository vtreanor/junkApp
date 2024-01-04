/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getJunk = /* GraphQL */ `
  query GetJunk($id: ID!) {
    getJunk(id: $id) {
      id
      header
      body
      image
      price
      date
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listJunks = /* GraphQL */ `
  query ListJunks(
    $filter: ModelJunkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJunks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        header
        body
        image
        price
        date
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
