import styled from 'styled-components'
import { Link } from 'react-router-dom'
// containerEnter
export const ContainerSignup = styled.div`
    max-width: 100%;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    background-color: #f4f5f6;
`
// modalBlockRegister
export const ModalBlock = styled.div`
    position: absolute;
    z-index: 2;
    left: calc(50% - (366px / 2));
    top: calc(50% - (647px / 2));
    opacity: 1;
`

export const ModalFormReg = styled.form`
    width: 366px;
    height: 647px;
    background-color: #ffffff;
    border-radius: 12px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 43px 42px 47px;
`

export const ModalLogo = styled.div`
    width: 140px;
    height: 21px;
    margin-bottom: 42px;
    background-color: transparent;
`
export const ModalLogoImg = styled.img`
    width: 140px;
    height: auto;
`

export const ModalInputRegister = styled.input`
    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #d0cece;
    padding: 8px 1px;
    margin-bottom: 38px;
`

export const ModalBtnReg = styled.button`
    width: 278px;
    height: 62px;
    background-color: #009ee4;
    border-radius: 6px;
    border: none;
    margin-top: 30px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
`

// тут снова был тег а
export const ModalBtnRegLink = styled(Link)`
    width: 100%;
    height: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #ffffff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-decoration: none;
`

export const ModalBlockText = styled.p`
    padding-top: 7px;
    font-size: 16px;
    line-height: 32px;
    color: #000000;
`

export const ForErrors = styled.span`
    position: absolute;
    top: 520px;
    color: red;
    text-align: center;
    text-decoration: underline;
    font-weight: bold;
`
