import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    background-color: #f1f1f1;
    display: flex;
    flex-direction: column;
`

export const Container = styled.div`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    background-color: #ffffff;
    /* max-width: 1178px;
    margin: 0 auto;
    padding: 0px 5px 79px; */
`

// header вынес в отдельный компонент / в components

export const Main = styled.main`
    margin: 0 auto;
`
export const MainContainer = styled.div`
    max-width: 1178px;
    margin: 0 auto;
    padding: 0px 10px 79px;
`

export const MainCenterBlock = styled.div`
    margin: 0 auto;
    padding: 0 20px;
`

// MainMenu (UpMenu) вынес в отдельный компонент

// MainProfile вынес в отдельный компонент

export const MainH2 = styled.h2`
    font-size: 40px;
    line-height: 42px;
    color: #000000;
    margin-bottom: 30px;
`
// settingsprofile вынес в отдельный компонент

export const MainTitle = styled.h3`
    margin-bottom: 20px;
    font-size: 32px;
    line-height: 70px;
    font-weight: 500;
    color: #000000;
`
export const MainContent = styled.div`
    width: 100%;
    margin: 0 auto;
`
