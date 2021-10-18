import React from 'react'
import { graphql } from 'gatsby'

export const query = graphql`
query {
  recipedata {
    headers {
      background {
        url
      }
      logo {
        url
      }
      title
      subscribe
      recipes
      about
    }
    mains {
      abouttitle
      imgcake {
        url
      }
      imgpizza {
        url
      }
      latesttitle
      lorem
      imgshake {
        url
      }
      pizzaparagraph
      shakeparagraph
      cakeparagraph
      spoon {
        url
      }
      signup
      submit
      subscribe
    }
    footers {
      about
      recipes
      subscribe
			instagram {
				url
      }
      twitter {
				url
      }
      facebook {
				url
      }
      pinterest {
				url
      }
    }
  }
}

`

export default function Index({ data }) {

  console.log("to aqui", data)

  const dataHeaders = data.recipedata.headers[0]

  return (
    <div>
      <img src={dataHeaders.logo.url} alt="" />
    </div>
  )
}
