import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import * as S from './reviews.styled'
import {
    tokenSelector,
    userSelProdSelector,
    // userSelProdSelector,
    userSelector,
} from '../../store/selectors/selectors'
import noPhoto from '../img/no-photo.avif'
import { addComment } from '../../api/api'
import { tokenUpdate } from '../../store/reducers/reducers'
// import { getCommentsAdv } from '../../api/api'
// import { tokenUpdate } from '../../store/reducers/reducers'

function Reviews({ setShowReviews, getComments, reviewsComments }) {
    const dispatch = useDispatch()
    const user = useSelector(userSelector)

    const token = useSelector(tokenSelector)

    // тут лежит конкретное объяв выбранное юзером, нам нужно для получения id
    const UserSelectProduct = useSelector(userSelProdSelector)

    const [newComment, setNewComment] = useState()
    const [flyToBackend, setFlyToBackend] = useState(false)
    const [error, setError] = useState(false)

    const [disabled, setDisabled] = useState(false)

    // этот стейт для кнопки закрыть отзывы
    // const [closeForm, setCloseForm] = useState(false)

    // const clickCloseForm = () => {
    //     setCloseForm(true)
    // }

    const clickAddComment = async () => {
        const checkInput = () => {
            if (!newComment)
                throw new Error('Нельзя отправить пустой комментарий')
        }

        try {
            setDisabled(true)
            // 1 вар проверки - в useState
            // if (!newComment) {
            //     setError('Пожалуйста введите отзыв!')
            // }

            checkInput()

            const responsefromapi = await addComment({
                text: newComment,
                id: UserSelectProduct.id,
                token,
            })
            await getComments()
            dispatch(tokenUpdate(responsefromapi.newToken))
            // local
            setFlyToBackend(true)
        } catch (error1) {
            setError(error1.message)
        } finally {
            setNewComment('')
            setDisabled(false)
        }

        // const responseAddComment = await addComment({
        //     token: getTokenFromLocalStorage(),
        //     text: newComment,
        //     id: UserSelectProduct.id,
        // })
        //    await getComments()

        // зачем обновляем пока непонятно
        //    dispatch(tokenUpdate(responseAddComment.newToken))
    }

    return (
        <S.Wrapper>
            {/* логика кнопки закрытия */}
            {/* {showReviews ? null : ( */}
            <S.ContainerBg>
                <S.ModalBlock>
                    <S.ModalBtnClose>
                        <S.ModalBtnCloseLine
                            onClick={() => setShowReviews(false)}
                        >
                            Закрыть
                        </S.ModalBtnCloseLine>
                    </S.ModalBtnClose>
                    <S.ModalContent>
                        <S.ModalTitle>Отзывы о товаре</S.ModalTitle>
                    </S.ModalContent>
                    {/* <S.ModalBtnClose>
                        <S.ModalBtnCloseLine 
                        onClick={closeForm}
                         />
                    </S.ModalBtnClose> */}
                    <S.ModalScroll>
                        {/* Тут логика сообщения, на случай если юзер не авторизирован */}
                        {!user ? (
                            <S.formNewArt>
                                Для того чтобы оставить отзыв,{' '}
                                <Link to="/login">авторизируйтесь</Link>
                            </S.formNewArt>
                        ) : (
                            <S.ModalFormNewArt>
                                <S.formNewArtBlock>
                                    <S.formNewArt>Добавить отзыв</S.formNewArt>
                                    <S.formNewArtArea
                                        name="text"
                                        placeholder="Введите отзыв"
                                        value={newComment}
                                        onChange={(e) =>
                                            setNewComment(e.target.value)
                                        }
                                    />
                                </S.formNewArtBlock>
                                <S.formNewArtBtnPub
                                    type="button"
                                    disabled={disabled}
                                    onClick={(e) => clickAddComment(e)}
                                >
                                    Опубликовать
                                </S.formNewArtBtnPub>
                                {/* flyToBackend - переключаем на true, уже после ответа от апи */}
                                {flyToBackend ? (
                                    <S.formNewArt>
                                        Комментарий добавлен
                                    </S.formNewArt>
                                ) : (
                                    ''
                                )}
                                {error && <S.Error>{error}</S.Error>}
                            </S.ModalFormNewArt>
                        )}
                        <S.gridBlock>
                            <S.ModalReviews>
                                {/* полный блок коммента */}
                                <S.ReviewsReview>
                                    {reviewsComments &&
                                        reviewsComments.map((element) => (
                                            <S.ReviewItem key={element.id}>
                                                <S.ReviewLeft>
                                                    <S.ReviewImg>
                                                        {element.author
                                                            ?.avatar ? (
                                                            <S.ReviewImgImg
                                                                src={`http://localhost:8090/${element.author?.avatar}`}
                                                                alt=""
                                                            />
                                                        ) : (
                                                            <S.ReviewImgImg
                                                                src={noPhoto}
                                                            />
                                                        )}
                                                    </S.ReviewImg>
                                                </S.ReviewLeft>
                                                <S.ReviewRight>
                                                    <S.ReviewName>
                                                        {element.author?.name}

                                                        <S.ReviewNameSpan>
                                                            {new Date(
                                                                element.created_on
                                                            ).toLocaleString(
                                                                'ru',
                                                                {
                                                                    addSuffix: true,
                                                                }
                                                            )}
                                                        </S.ReviewNameSpan>
                                                    </S.ReviewName>
                                                    <S.ReviewTitle>
                                                        Комментарий
                                                    </S.ReviewTitle>
                                                    <S.ReviewText>
                                                        {element.text}
                                                    </S.ReviewText>
                                                </S.ReviewRight>
                                            </S.ReviewItem>
                                        ))}
                                </S.ReviewsReview>
                            </S.ModalReviews>
                        </S.gridBlock>
                    </S.ModalScroll>
                </S.ModalBlock>
            </S.ContainerBg>
            {/* )} */}
        </S.Wrapper>
    )
}

export default Reviews
