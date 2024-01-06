// менюшечка с картинкой и кнопкой
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// import { useEffect } from 'react'
import * as S from './up-menu.styled'
import img from '../img/logo.png'
import { tokenUpdate, userStateUpdate } from '../../store/reducers/reducers'

function UpMenu() {
    const navigate = useNavigate()
    const location = useLocation().pathname
    const params = useParams()
    const dispatch = useDispatch()

    const exit = () => {
        // делаем состояние пустым как изначально
        dispatch(userStateUpdate({}))
        dispatch(tokenUpdate({}))
        // удаляем с LocalStorage
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        // перенаправим на главную
        navigate('/')
    }

    // useEffect(() => {
    //     console.log(params.id)
    //     console.log(location)
    // })
    return (
        // <S.Container>
        <S.MainMenu>
            <S.MenuLogoLink onClick={() => navigate('/')}>
                <Link to="/">
                    <S.MenuLogoImg src={img} alt="logo" />
                </Link>
            </S.MenuLogoLink>
            <S.MenuForm>
                <S.MenuBtnS id="backToTheSun" onClick={() => navigate('/')}>
                    Вернуться на главную
                </S.MenuBtnS>
                {location === `/profile/${params.id}` && (
                    <S.ExitBtn onClick={exit} type="button">
                        Выход
                    </S.ExitBtn>
                )}
            </S.MenuForm>
        </S.MainMenu>
        // </S.Container>
    )
}

export default UpMenu
