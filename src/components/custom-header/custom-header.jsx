import { useLocation, useNavigate, useParams } from 'react-router-dom'
// import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import * as S from '../header/header.styled'
import { userSelector } from '../../store/selectors/selectors'
import { formatEmail, formatUrl } from '../../helpers/helpers'

function CustomHeader() {
    const location = useLocation().pathname
    const user = useSelector(userSelector)
    const navigate = useNavigate()
    const params = useParams()

    // useEffect(() => {
    //     console.log(location)
    // }, [])

    const clickToProfile = () => {
        if (!user.id) {
            navigate('/login')
        } else if (user.id) {
            navigate(
                `/profile/${formatUrl(formatEmail(user.email))}_${user.id}`
            )
        }
    }

    return (
        <S.Header>
            <S.HeaderNav>
                {location === '/' && (
                    <S.HeaderBtnMainEnter
                        onClick={clickToProfile}
                        type="button"
                    >
                        Вход в личный кабинет
                    </S.HeaderBtnMainEnter>
                )}

                {location === `/selProfile/${params.id}` && (
                    <>
                        <S.headerBtnPutAd
                            onClick={() => navigate('/putAd')}
                            type="button"
                        >
                            Разместить обьявление
                        </S.headerBtnPutAd>
                        <S.headerBtnLk onClick={() => navigate('/login')}>
                            Личный кабинет
                        </S.headerBtnLk>
                    </>
                )}

                {location === `/profile/${params.id}` && (
                    <S.headerBtnPutAd
                        onClick={() => navigate('/putAd')}
                        type="button"
                    >
                        Разместить обьявление
                    </S.headerBtnPutAd>
                )}
            </S.HeaderNav>
        </S.Header>

        // <S.header>
        //     <S.headerNav>
        //         <S.headerBtnPutAd onClick={() => navigate('/putAd')}>
        //             Разместить обьявление
        //         </S.headerBtnPutAd>
        //         <S.headerBtnLk onClick={() => navigate('/login')}>
        //             Личный кабинет
        //         </S.headerBtnLk>
        //     </S.headerNav>
        // </S.header>
    )
}

export default CustomHeader
