import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import * as S from './products.styled'
import noPhoto from '../img/no-photo.avif'
import GetAllAds, { GetUserAd } from '../../api/api'
import {
    advsAllSelector,
    searchSelector,
} from '../../store/selectors/selectors'
import { advsAllUpdate, userSelProdUpdate } from '../../store/reducers/reducers'
import {
    // formatSymbols,
    formatUrl,
} from '../../helpers/helpers'

function Products({ id }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation().pathname
    // console.log({ id })
    const allAd = useSelector(advsAllSelector)
    // const allAd = useSelector((store) => store.store.advsAll)

    const searchInputText = useSelector(searchSelector)

    const fromApi = async () => {
        try {
            if (location === '/') {
                const allAds = await GetAllAds()
                dispatch(advsAllUpdate(allAds))
            } else {
                const sellerAds = await GetUserAd({ id })
                dispatch(advsAllUpdate(sellerAds))
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    // тут пишем search вместо searchInputText - чтобы избежать коллизии имен (18/46 стр) (а так это одно и тоже)
    const searchItem = (title, search) => {
        // приводим к нижнему регистру
        // методом search Проверка идет по каждому символу
        // если совпадений не найдено, будет -1 и return false, и в пропс S.CardsItem вернется display:none - скроет все обьявления
        if (title.toLowerCase().search(search.toLowerCase()) === -1)
            return false
        // если true - в пропс S.CardsItem вернется display:block - будут отображены совпадения в обьявлениях
        return true
    }
    const selectProduct = (ad) => {
        dispatch(userSelProdUpdate(ad))
        // записать в редакс объект с обьявлением, которое выбрал user
        // далее исп-ем эти данные на стр advpage, для отображения объявления

        // сохраняем в localhost для дальнейшей реализации некоторых проверок
        localStorage.setItem('UserSelectedAd', JSON.stringify(ad))
        // Делаем адрес (выбранного юзером объвл-ия) в браузере похожим на авито. Сначала заголовок, затем id объявления
        // ф-ия formatTitle из helpers заменяет пробел на прочерк в браузере
        navigate(`/adv/${formatUrl(ad.title)}_${ad.id}`)
    }
    useEffect(() => {
        fromApi()
    }, [])
    return (
        <S.ContentCards>
            {/* {isloading ? (<S.MainH2>Обьявления загружаются</S.MainH2>
            ) : AllAds?.length > 0 ? ( */}
            {allAd.map((ad) => (
                <S.CardsItem
                    search={searchItem(ad.title, searchInputText)}
                    key={ad.id}
                >
                    <S.CardsCard>
                        <S.CardImage key={ad.images}>
                            {ad.images.length !== 0 ? (
                                <S.CardImageImg
                                    src={`http://localhost:8090/${ad.images[0]?.url}`}
                                    alt="pic"
                                />
                            ) : (
                                <S.CardImageImg src={noPhoto} alt="nophoto" />
                            )}
                        </S.CardImage>
                        <S.CardContent>
                            <S.CardTitle onClick={() => selectProduct(ad)}>
                                {/* <Link to={`/adv/${ad.id}`}> */}
                                {ad.title}
                                {/* </Link> */}
                            </S.CardTitle>
                            <S.CardPrice>{ad.price}</S.CardPrice>
                            <S.CardPlace>{ad.user.city}</S.CardPlace>
                            <S.CardDate>
                                {new Date(ad.created_on).toLocaleString('ru', {
                                    addSuffix: true,
                                })}
                            </S.CardDate>
                        </S.CardContent>
                    </S.CardsCard>
                </S.CardsItem>
            ))}
        </S.ContentCards>
    )
}

export default Products
