import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'
import { json } from '@sveltejs/kit'

export async function load({ url, params }) {
  
  let query = gql`
  query Assets {
    dashboard(where: {id: "cln32p50anrma0bw03q8fsa54"}) {
      infotext {
        infotext {
          html
          text
        }
        id
      }
      trashRemoved {
        total
        month
      }
      title
      river {
        id
        slug
        riverImage {
          image {
            url
          }
        }
        riverTitle
        riverInfoText {
          infotext {
            markdown
            text
          }
        }
        riverStartDate {
          title
        }
      }
    }
  } 
  `
 

  const dataHygraph = await hygraph.request(query)

  const currentInterceptorHygraph = dataHygraph.dashboard.river.filter(interceptor => {
    return interceptor.slug == url.searchParams.get('id')
  })
  
  const grrrData = await fetch("https://fdnd-toc-api.netlify.app/river")
  const interceptorList = await grrrData.json("https://fdnd-toc-api.netlify.app/river")
 
  const riverData = await fetch("https://fdnd-toc-api.netlify.app/river");
  const riverDataJson = await riverData.json()

  const oceanData = await fetch("https://fdnd-toc-api.netlify.app/ocean");
  const oceanDataJson = await oceanData.json();

  const currentInterceptor = interceptorList.systems.filter(interceptor => {
    return interceptor.id == url.searchParams.get('id')
  })
  
  return {currentInterceptorHygraph, currentInterceptor, dataHygraph, riverDataJson, oceanDataJson }
}
