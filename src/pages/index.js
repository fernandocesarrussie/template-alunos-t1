import React from 'react'
import { graphql } from 'gatsby'

import { Header } from '../components/Header'
import { Main } from '../components/Main'

import '../global/global.css'

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

  

  const dataHeaders = data.recipedata.headers[0]
  const dataMain = data.recipedata.mains[0]

  return (
    <div>
      <Header
        background={dataHeaders.background.url}
        logo={dataHeaders.logo.url}
        btnabout={dataHeaders.about}
        btnrcp={dataHeaders.recipes}
        btnsub={dataHeaders.subscribe}
        title={dataHeaders.title}
      />
      <Main
        latesttitle={dataMain.latesttitle}
        imgcake={dataMain.imgcake.url}
        cakeparagraph={dataMain.cakeparagraph}
       />
    </div>
  )
}
