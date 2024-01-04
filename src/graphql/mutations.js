/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createJunk = /* GraphQL */ `
  mutation CreateJunk(
    $input: CreateJunkInput!
    $condition: ModelJunkConditionInput
  ) {
    createJunk(input: $input, condition: $condition) {
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
export const updateJunk = /* GraphQL */ `
  mutation UpdateJunk(
    $input: UpdateJunkInput!
    $condition: ModelJunkConditionInput
  ) {
    updateJunk(input: $input, condition: $condition) {
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
export const deleteJunk = /* GraphQL */ `
  mutation DeleteJunk(
    $input: DeleteJunkInput!
    $condition: ModelJunkConditionInput
  ) {
    deleteJunk(input: $input, condition: $condition) {
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
