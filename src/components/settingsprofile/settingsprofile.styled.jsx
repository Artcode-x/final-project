import styled from 'styled-components'

export const MainProfile = styled.div`
    width: 100%;
    padding: 0 0 70px;
`
export const ProfileContent = styled.div`
    max-width: 834px;
`
export const ProfileTitle = styled.h3`
    font-size: 32px;
    line-height: 70px;
    color: #000000;
`

export const ProfileSettings = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: top;
    -ms-flex-align: top;
    align-items: top;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
`

export const SettingsLeft = styled.div`
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
    margin-right: 43px;
`
// вложения в settingsLeft
export const SettingsImg = styled.div`
    width: 170px;
    height: 170px;
    border-radius: 50%;
    background-color: #f0f0f0;
`
export const Img = styled.img`
    // width: 100%;
    // height: auto;
    // display: block;
    // -o-object-fit: cover;
    // object-fit: cover;
    width: 170px;
    height: 170px;
    border-radius: 50%;
    background-color: #f0f0f0;
`
export const SettingsChangeFoto = styled.button`
    margin-top: 10px;
    margin-bottom: 30px;
    text-decoration: none;
    font-size: 16px;
    line-height: 24px;
    color: #009ee4;
    border: none;
    background: none;
    cursor: pointer;
`
// правая часть вложений
export const SettingsRight = styled.div`
    width: 630px;
`

export const SettingsForm = styled.form`
    width: 630px;
    display: -webkit-box;
    /* display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap; */
    /* display: inline-grid; */
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    /* grid-template-columns: repeat(2, 1fr); */
`
export const SettingsFormInput = styled.input`
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    padding: 13px 19px;
    /* width: 300px; */
    width: 258px;
`

export const PhoneInput = styled.input`
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    padding: 13px 19px;
    /* width: 300px; */
    width: 572px;
`
export const SettingsFormLabel = styled.label`
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: #c4c4c4;
    margin-bottom: 4px;
    display: block;
`
export const SettingsDiv = styled.div`
    display: inline-block;
    margin: 0 7px 20px;
`

export const SettingsBtn = styled.div`
    font-size: 16px;
    line-height: 1;
    color: #ffffff;
    width: 154px;
    height: 50px;
    margin: 10px 7px 0;
    background-color: #009ee4;
    border-radius: 6px;
    border: 1px solid #009ee4;
    cursor: pointer;
    align-items: center;
    display: flex;
    justify-content: center;
`
