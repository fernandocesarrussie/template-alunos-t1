import styled from "styled-components";

export const ContainerHeader = styled.div`
    position: fixed;
    top: 0;
    z-index: 99;
    width: 100%;
    height: 5rem;
    background-color: #fffffff7;
    backdrop-filter: blur(5px);
    box-shadow: #0000001a 0 4px 8px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const ImageLogo = styled.img`
    width: 150px;
`
export const BtnsInfo = styled.button`
    font: 500 1.125rem / Soleto, sans-serif;
    color: rgb(34, 37, 75);
    text-align: center;
    background: transparent;
    border: 0;
    cursor: pointer;
    margin-right: 2.5rem;
    &:nth-child(3) {
        position: relative;
        width: 11.25rem;
        height: 3rem;
        margin-left: 2.5rem;
        padding: 0px;
        border: none;
        border-radius: 4px;
        background: rgb(255, 206, 6);
        overflow: hidden;
        outline: none;
        font: 500 1.125rem / 3rem Soleto, sans-serif;
        color: rgb(34, 37, 75);
        text-align: center;
    }
    &:nth-child(4) {
        background: 0;
        border: solid 1px;
        border-radius: 50%;
        width: 28px;
        height: 28px;
        font-size: 10px;
    }
`
export const BtnEnter = styled.button`

`