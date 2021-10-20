import styled from 'styled-components'

export const Container = styled.div`
    background-color: #F2F4F1;
`
export const BoxTitle = styled.div`
  display: flex;
  justify-content: center;
`
export const Title = styled.h2`
  font-size: 40px;
  text-transform: uppercase;
`

export const ContainerCard = styled.section`
  border: solid 1px red;
  width: 536px;
  height: 780px;
`
export const BoxImage = styled.div`
  
`
export const BoxParagraph = styled.div`
  height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Paragraph = styled.p`
  font-size: 32px;
  &:before{
    content:'';
    position: relative;
    background-color: black;
    display: block;
    top: -40px;
    left: 70px;
    width: 71px;
    height: 5px;
  }
`

