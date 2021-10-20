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
            <S.BoxTitle>
                <S.Title>{latesttitle}</S.Title>
            </S.BoxTitle>
            <S.ContainerCard>
                <S.BoxImage>
                    <img src={imgcake} alt="" />
                </S.BoxImage>
                <S.BoxParagraph>
                    <S.Paragraph>{cakeparagraph}</S.Paragraph>
                </S.BoxParagraph>
            </S.ContainerCard>
        </S.Container>
    )
}
