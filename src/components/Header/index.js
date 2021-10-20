import React from 'react'
import * as S from './styles'

export function Header({
    background,
    logo,
    btnabout,
    btnrcp,
    btnsub,
    title
}) {
    return (
        <S.Container back={background}>
            <S.Wrapper>
                <figure>
                    <img src={logo} alt="" />
                </figure>
                <S.BoxBtn>
                    <S.Btn>{btnabout}</S.Btn>
                    <S.Btn>{btnrcp}</S.Btn>
                    <S.Btn>{btnsub}</S.Btn>
                </S.BoxBtn>
            </S.Wrapper>
                <S.BoxTitle>
                    <S.Title>{title}</S.Title>
                </S.BoxTitle>
        </S.Container>
    )
}
