import React from 'react'
import * as S from './styles'


export function Main({
    title,
    subtitle,
    start,
    image,
    titleb,
    paragraph,
    imageb,
    titlec,
    paragraphb,
    imagec,
    titled,
    paragraphd,
    titlee,
    paragraphe

}) {
    return (
        <S.ContainerMain>

            <S.SectionTop>
            <S.BoxText>
            <S.TitleMain>{title}</S.TitleMain>
            <S.SubtitleMain>{subtitle}</S.SubtitleMain>
            <S.BtnStart>{start}</S.BtnStart>
            </S.BoxText>
            <S.ImageMain src={image} alt="image main"/>
            </S.SectionTop>

            <S.BoxMain>
            <S.TitleBottom>{titleb}</S.TitleBottom>
            <S.ParagraphBottom>{paragraph}</S.ParagraphBottom>
            </S.BoxMain>

            <S.BoxGif>
            <S.BoxCenter>
            <S.Gif src={imageb}/> 

            <S.BoxTextGif>
            <S.TitleGif>{titlec}</S.TitleGif>
            <S.ParagraphGif>{paragraphb}</S.ParagraphGif>
            </S.BoxTextGif>

            </S.BoxCenter>
            </S.BoxGif>

            <S.ContainerDiv>
                
                <S.BoxFigureImage>
                    <S.ImgMid src={imagec} alt=""/>
                </S.BoxFigureImage>
                
                <S.TextBox>
                    <S.BoxTitle>
                        <h3>{titled}</h3>
                    </S.BoxTitle>
                    <S.BoxParagraph>
                        <p>{paragraphd}</p>
                    </S.BoxParagraph>
                </S.TextBox>
                
            </S.ContainerDiv>

            <S.ContainerGrid>
            <S.TextGrid>
            <S.TitleGrid>{titlee}</S.TitleGrid>
            <S.ParagraphGrid>{paragraphe}</S.ParagraphGrid>
            </S.TextGrid>
            </S.ContainerGrid>

        </S.ContainerMain>
    )
}