import { GITHUB_HYGRAPH_KEY, GITHUB_HYGRAPH_URL } from '$env/static/private'

import { GraphQLClient } from 'graphql-request'

export const hygraph = new GraphQLClient(GITHUB_HYGRAPH_URL, {
  headers: {
    Authorization: `Bearer ${GITHUB_HYGRAPH_KEY}`,
  },
})


