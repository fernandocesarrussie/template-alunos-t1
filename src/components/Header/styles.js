import styled from 'styled-components'

export const Container = styled.div`
    background-image: url(${props => props.back});
    background-position-y: -23rem;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`

export const BoxBtn = styled.div`
    width: 400px;
    display: flex;
    justify-content: space-evenly;
`

export const Btn = styled.button`
    background: transparent;
    border: 0;
    font-size: 20px;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        border: solid 2px;
    }
`

export const BoxTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 40vh;
`

export const Title = styled.h1`
    font-size: 8rem;
    font-weight: 500;
    text-transform: uppercase;
`