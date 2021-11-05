import React from "react";
import {graphql} from 'gatsby';

import {Header} from '../components/Header'
import {Main} from '../components/Main'
import '../global/global.css'

export const query = graphql`
query {
  alldata {
    projects {
      btnblog
      btnfaq
      btnheader
      btnlang
      btnstart
      divparagraph
      divtitle
      image {
        url
      }
      imagea {
        url
      }
      title
      subtitle
      imagegif {
        url
      }
      imageb {
        url
      }
      paragraphgif
      paragraphgrid
      paragraphmain
      titlegif
      titlegrid
      titlemain
      imagetitulos {
        url
      }
      itemlist
      itemlist2
      itemlist3
    }
  }
}
`

export default function Index({data}) {

  const dataMain = data.alldata.projects[0]

  return (
    <div>
      {console.log(data)}
      <Header 
          blog={dataMain.btnblog}
          faq={dataMain.btnfaq}
          enter={dataMain.btnheader}
          Lang={dataMain.btnlang}
          image={dataMain.imagea.url}
      />
      <Main 
          title={dataMain.title}
          subtitle={dataMain.subtitle}
          start={dataMain.btnstart}
          image={dataMain.image.url}
          titleb={dataMain.divtitle}
          paragraph={dataMain.divparagraph}
          imageb={dataMain.imagegif.url}
          titlec={dataMain.titlegif}
          paragraphb={dataMain.paragraphgif}
          imagec={dataMain.imageb.url}
          titled={dataMain.titlemain}
          paragraphd={dataMain.paragraphmain}
          titlee={dataMain.titlegrid}
          paragraphe={dataMain.paragraphgrid}
          listitem={dataMain.itemlist}
          listitemb={dataMain.itemlist2}
          listitemc={dataMain.itemlist3}
      />
    </div>
  )
}