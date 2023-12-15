
import { GraphQLClient } from 'graphql-request'

export const hygraph = new GraphQLClient(GITHUB_HYGRAPH_URL, {
  headers: {
    Authorization: `Bearer ${GITHUB_HYGRAPH_KEY}`,
  },
})


