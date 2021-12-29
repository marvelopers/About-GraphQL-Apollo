import {  gql } from '@apollo/client';

export const GET_ROLES = gql`
  query GetRoles {
    roles {
      id
    }
  }
`;

export const GET_ROLE = gql`
  query GetRole($id: ID!) {
    role(id: $id) {
      id
      requirement
      members {
        id
        last_name
        serve_years
      }
      equipments {
        id
      }
      softwares {
        id
      }
    }
  }
`;
