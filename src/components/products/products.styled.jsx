import styled from 'styled-components'

export const ContentCards = styled.div`
    /* max-width: 1158px; */
    /* width: 100%; */
    /* display: -ms-grid; */
    display: grid;
    /* -ms-grid-columns: (270px); */
    grid-template-columns: repeat(auto-fit, minmax(270px, 270px));
    grid-auto-rows: 441px;
    grid-gap: 40px 26px;
    /* -webkit-box-pack: center; */
    /* -ms-flex-pack: center; */
    justify-content: center;
    overflow-y: auto;
    /* scrollbar-color: #ffffff #2e2e2e;
    scrollbar-width: thin;
    scrollbar-width: 0px; */
    /* height: 441px; */
`

export const CardsItem = styled.div`
    display: ${(props) => (props.search ? 'block' : 'none')};
    margin: 0;
`

export const CardsCard = styled.div`
    width: 270px;
    height: 441px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
`

export const CardImage = styled.div`
    width: 270px;
    height: 270px;
    background-color: #f0f0f0;
`
export const CardImageImg = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
`

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const CardTitle = styled.h3`
    height: 52px;
    font-size: 22px;
    font-weight: 500;
    line-height: 26px;
    color: #009ee4;
    margin-bottom: 10px;
    margin-top: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
`
export const CardPrice = styled.a`
    color: #000000;
    font-size: 22px;
    font-weight: 500;
    line-height: 33px;
    margin-bottom: 10px;
`

export const CardPlace = styled.a`
    font-size: 16px;
    line-height: 21px;
    color: #5f5f5f;
    margin-bottom: 4px;
`
export const CardDate = styled.a`
    font-size: 16px;
    line-height: 21px;
    color: #5f5f5f;
`
