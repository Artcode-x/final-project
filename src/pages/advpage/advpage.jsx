import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import CustomHeader from '../../components/custom-header/custom-header'
import UpMenu from '../../components/up-menu/up-menu'
import * as S from './advpage.styled'
import noPhoto from '../../components/img/no-photo.avif'
import { userSelProdSelector } from '../../store/selectors/selectors'
import { formatDate, formatSellsDate } from '../../helpers/helpers'
import { getCommentsAdv } from '../../api/api'
import Reviews from '../../components/reviews/reviews'

function AdvPage() {
    const navigate = useNavigate()
    const [reviewsComments, setReviewsComments] = useState(false)
    const [showReviews, setShowReviews] = useState(false)
    // обращаемся к данным с редакса, для пол-ия объявления что выбрал user, и используем как ключ
    const UserSelectProd = useSelector(userSelProdSelector)

    // изн номер скрыт
    const [userPhoneBtn, setShowUserPhoneBtn] = useState(true)
    const showUserPhone = () => {
        // показать номер по нажатию
        setShowUserPhoneBtn(false)
    }

    const clickToSellerProfile = () => {
        navigate(`/selProfile/${UserSelectProd.user.id}`)
    }

    // получаем комменты
    const getComments = async () => {
        const response = await getCommentsAdv({ id: UserSelectProd.id })
        setReviewsComments(response)
        // приходит массив с объектами из комментариев
        console.log(response)
    }

    useEffect(() => {
        getComments()
        // console.log(showReviews)
    }, [])

    return (
        <>
            {/* <Header /> */}
            <CustomHeader />
            <S.MainContainer>
                {/* <S.MainMenu> */}
                <UpMenu />
                {/* </S.MainMenu> */}
                {showReviews && <S.blur />}
                {showReviews && (
                    <S.Cover>
                        <Reviews
                            getComments={getComments}
                            reviewsComments={reviewsComments}
                            setShowReviews={setShowReviews}
                        />
                    </S.Cover>
                )}
                {/* {reviewsCheck && <Reviews getComments={getComments}, reviewsComments={reviewsComments} />} */}

                <S.MainArtic>
                    <S.ArticContent>
                        <S.ArticleLeft>
                            <S.ArticleFillImg>
                                <S.ArticleImgDiv>
                                    {/* тут фотка товара */}
                                    <S.ArticleImgImg
                                        src={`http://localhost:8090/${UserSelectProd.images[0]?.url}`}
                                    />
                                </S.ArticleImgDiv>
                                <S.ArticleImgBar>
                                    {/* тут будет метод map изображений */}
                                    {UserSelectProd.images?.map((img) => (
                                        <S.ArticleImgBarDiv key={img.id}>
                                            <S.ArticleBarDivImg
                                                src={`http://localhost:8090/${img.url}`}
                                                // src={`http://localhost:8090/${img.images[0].url}`}
                                            />
                                        </S.ArticleImgBarDiv>
                                    ))}
                                </S.ArticleImgBar>
                                {/* тут что то под моб версию */}
                            </S.ArticleFillImg>
                        </S.ArticleLeft>

                        <S.ArticleRight>
                            <S.ArticleBlock>
                                <S.ArticleTitle>
                                    {UserSelectProd.title}
                                </S.ArticleTitle>
                                <S.ArticleInfo>
                                    <S.ArticleDate>
                                        {/* Берем ф-ию с helpers для форматирования отображения даты */}
                                        {formatDate(UserSelectProd.created_on)}
                                    </S.ArticleDate>
                                    <S.ArticleCity>
                                        {UserSelectProd.user?.city}
                                    </S.ArticleCity>
                                </S.ArticleInfo>
                                <S.specialButtonForReviews
                                    type="button"
                                    onClick={() => setShowReviews(true)}
                                >
                                    {/* {reviewsComments?.length} */}
                                    {reviewsComments
                                        ? reviewsComments.length
                                        : '...'}{' '}
                                    отзывов
                                    {/* 12 отзыва */}
                                </S.specialButtonForReviews>
                                <S.ArticlePrice>
                                    {UserSelectProd.price}
                                </S.ArticlePrice>
                                <S.ArticleBtn onClick={showUserPhone}>
                                    <S.ArticleBtnSpan>
                                        {userPhoneBtn
                                            ? 'Показать телефон'
                                            : UserSelectProd.user?.phone}
                                    </S.ArticleBtnSpan>
                                </S.ArticleBtn>

                                <S.ArticleAuthor>
                                    <S.AuthorImg>
                                        {/* Покажем аватар если он есть */}
                                        {UserSelectProd.user?.avatar ? (
                                            <S.AuthorImgImg
                                                src={`http://localhost:8090/${UserSelectProd.user.avatar}`}
                                                alt="avaUsera"
                                            />
                                        ) : (
                                            <S.AuthorImgImg
                                                src={noPhoto}
                                                alt="noAva"
                                            />
                                        )}
                                    </S.AuthorImg>

                                    <S.AuthorCont
                                        key={UserSelectProd.user?.id}
                                        onClick={() => clickToSellerProfile()}
                                    >
                                        <S.AuthorName>
                                            {UserSelectProd.user?.name}
                                        </S.AuthorName>
                                        <S.AuthorAbout>
                                            Продает товары с{' '}
                                            {formatSellsDate(
                                                UserSelectProd.user.sells_from
                                            )}
                                            {/* {UserSelectProd.user?.sells_from} */}
                                        </S.AuthorAbout>
                                    </S.AuthorCont>
                                </S.ArticleAuthor>
                            </S.ArticleBlock>
                        </S.ArticleRight>
                    </S.ArticContent>
                </S.MainArtic>

                <S.MainTitle>{UserSelectProd.title}</S.MainTitle>
                <S.MainContent>
                    {/* описание в этом блоке будем получать с {data} */}
                    <S.MainText>{UserSelectProd.description}</S.MainText>
                </S.MainContent>
            </S.MainContainer>
        </>
    )
}

export default AdvPage
