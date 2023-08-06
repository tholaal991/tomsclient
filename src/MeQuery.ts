import { gql } from "@apollo/client";

export const ME_QUERY = gql`
    query  {
    user {
    rcn
  }
}
    
    `;