import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import CustomHeader from '../../components/custom-header/custom-header'
import * as S from './main.styled'
import img from '../../components/img/logo.png'
import Products from '../../components/products/products'
import { searchUpdate } from '../../store/reducers/reducers'

function Main() {
    const dispatch = useDispatch()

    return (
        <>
            <CustomHeader />
            <S.MainSearch>
                <S.SearchLogoLink href="#" target="blank">
                    <Link to="/">
                        <S.SearchLogoImg src={img} alt="logo" />
                    </Link>
                </S.SearchLogoLink>

                <S.SearchForm action="#">
                    {/* А тут поиск */}
                    <S.SearchText
                        type="search"
                        name="search"
                        onChange={(e) => dispatch(searchUpdate(e.target.value))}
                    />
                </S.SearchForm>
                <S.SearchBtn>Найти</S.SearchBtn>
            </S.MainSearch>
            <S.MainContainer>
                <S.MainH2>Обьявления</S.MainH2>
                <Products />
            </S.MainContainer>
        </>
        // <button type="button" onClick={click}>
        //     KNOPKA
        // </button>
    )
}

export default Main
