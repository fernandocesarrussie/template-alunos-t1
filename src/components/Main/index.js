import React from 'react'
import * as S from './styles'

export function Main({
    abouttitle,
      imgcake,
      imgpizza ,
      latesttitle,
      lorem,
      imgshake ,
      pizzaparagraph,
      shakeparagraph,
      cakeparagraph,
      spoon,
      signup,
      submit,
      subscribe
}) {
    return (
        <S.Container>
            <div>
                <h2>{latesttitle}</h2>
            </div>
            <div>
                <figure>
                    <img src={imgcake} alt="" />
                </figure>
                <div>
                    <p>{cakeparagraph}</p>
                </div>
            </div>
        </S.Container>
    )
}
