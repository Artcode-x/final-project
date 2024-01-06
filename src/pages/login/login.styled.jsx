import { Link } from 'react-router-dom'
import styled from 'styled-components'

// export const Wrapper = styled.div`
//     width: 100%;
//     min-height: 100%;
//     overflow: hidden;
// `

export const ContainerEnter = styled.div`
    max-width: 100%;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    background-color: #f4f5f6;
`

export const ModalBlock = styled.div`
    position: absolute;
    z-index: 2;
    left: calc(50% - (366px / 2));
    top: calc(50% - (439px / 2));
    opacity: 1;
`

export const ModalformLogin = styled.form`
    /* width: 366px; */
    width: 279px;
    /* height: 439px; */
    height: 360px;
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
    padding: 43px 47px 47px 40px;
    justify-content: center;
`

export const ModalLogo = styled.div`
    width: 140px;
    height: 21px;
    margin-bottom: 34px;
    background-color: transparent;
`

export const ModalLogoImg = styled.img`
    width: 140px;
    height: auto;
`

export const ModalInputLogin = styled.input`
    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #d0cece;
    padding: 8px 1px;
    margin-bottom: 30px;
`
export const ModalInputPassword = styled.input`
    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #d0cece;
    padding: 8px 1px;
`
export const ModalBtnEnter = styled.button`
    width: 278px;
    height: 52px;
    background-color: #009ee4;
    border-radius: 6px;
    margin-top: 30px;
    margin-bottom: 20px;
    border: none;

    /* display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center; */
`
// в ориг верстке тут тег  <a>
// {/* <button class="modal__btn-enter" id="btnEnter">
// <a href="../index.html">Войти</a> </button> */}
// используем link вместо него. Для этого импортируем этот компонент
// и вставка как при наследовании св-в

export const ModalBtnEnterLink = styled(Link)`
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

export const ModalBtnSignup = styled.button`
    width: 278px;
    height: 52px;
    background-color: transparent;
    border: 1px solid #d0cece;
    border-radius: 6px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #000000;
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

// тут аналогично с предыдущим случаем тег а
// <a href="signup.html">Зарегистрироваться</a>
export const ModalBtnSignupLink = styled(Link)`
    width: 100%;
    height: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #000000;
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
    cursor: pointer;
`

export const ForErrors = styled.span`
    position: absolute;
    top: 520px;
    color: red;
    text-align: center;
    text-decoration: underline;
    font-weight: bold;
`
