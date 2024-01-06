import { useNavigate } from 'react-router-dom'
import * as S from './header.styled'

function Header() {
    const navigate = useNavigate()
    return (
        <S.header>
            <S.headerNav>
                <S.headerBtnPutAd onClick={() => navigate('/putAd')}>
                    Разместить обьявление
                </S.headerBtnPutAd>
                <S.headerBtnLk onClick={() => navigate('/login')}>
                    Личный кабинет
                </S.headerBtnLk>
            </S.headerNav>
        </S.header>
    )
}

export default Header
