import { gql } from "@apollo/client";

export const ME_QUERY = gql`
query {
  getUserUUID {
   uuid
   name
   roletype

  }
}
    `;
    