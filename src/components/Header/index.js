import React from 'react'
import * as S from './styles'


export function Header({
    blog,
    faq,
    enter,
    Lang,
    image
}) {
    return (
        <S.ContainerHeader>
            <S.ImageLogo src={image} alt=""/>
            <div>
            <S.BtnsInfo>{blog}</S.BtnsInfo>
            <S.BtnsInfo>{faq}</S.BtnsInfo>
            <S.BtnsInfo>{enter}</S.BtnsInfo>
            <S.BtnsInfo>{Lang}</S.BtnsInfo>
            </div>
        </S.ContainerHeader>
    )
}
