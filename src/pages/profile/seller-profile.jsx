import { useSelector } from 'react-redux'
import { useState } from 'react'
import * as S from './seller-profile.styled'
import CustomHeader from '../../components/custom-header/custom-header'
import UpMenu from '../../components/up-menu/up-menu'
import noPhoto from '../../components/img/no-photo.avif'
import { userSelProdSelector } from '../../store/selectors/selectors'
import Products from '../../components/products/products'

function SellerProfile() {
    // обращаемся к данным с редакса, для получения объявления что выбрал user, и используем как ключ
    // тут будет записана инфа о конкретном обьявлении что выбрали
    const UserSelectProd = useSelector(userSelProdSelector)

    const [showSellerPhoneBtn, setShowSellerPhoneBtn] = useState(false)

    const showSellerPhone = () => {
        // показать номер по нажатию
        setShowSellerPhoneBtn(true)
    }

    // useEffect(() => {
    //     console.log(UserSelectProd.user.id)
    // })

    return (
        <>
            <CustomHeader />
            <S.MainContainer>
                {/* <S.MainMenu> */}
                <UpMenu />
                {/* </S.MainMenu> */}
                <S.MainContainer>
                    <S.MainCenterBlock>
                        ..
                        <S.MainH2>Профиль продавца</S.MainH2>
                        <S.MainProfileSell>
                            <S.ProfileSellContent>
                                <S.ProfileSellSeller>
                                    <S.SellerLeft>
                                        <S.SellerImg>
                                            {UserSelectProd.user?.avatar ? (
                                                <S.SellerImgImg
                                                    src={`http://localhost:8090/${UserSelectProd.user.avatar}`}
                                                    alt="avaUsera"
                                                />
                                            ) : (
                                                <S.SellerImgImg
                                                    src={noPhoto}
                                                    alt="noAva"
                                                />
                                            )}
                                        </S.SellerImg>
                                    </S.SellerLeft>
                                    <S.SellerRight>
                                        <S.SellerTitle>
                                            {UserSelectProd?.user.name}
                                        </S.SellerTitle>
                                        <S.SellerCity>
                                            {UserSelectProd?.user.city}
                                        </S.SellerCity>
                                        <S.SellerInf>
                                            Продает товары с{' '}
                                            {new Date(
                                                UserSelectProd?.user.sells_from
                                            ).toLocaleString('ru', {
                                                year: 'numeric',
                                                month: 'long',
                                            })}
                                        </S.SellerInf>

                                        <S.SellerImgMobBlock>
                                            <S.SellerImgMob>
                                                <S.SellerImgMobImg
                                                    src="#"
                                                    alt=""
                                                />
                                            </S.SellerImgMob>
                                        </S.SellerImgMobBlock>

                                        <S.ArticleBtn onClick={showSellerPhone}>
                                            {showSellerPhoneBtn === true
                                                ? UserSelectProd.user.phone
                                                : 'Показать телефон'}

                                            <S.ArticleBtnSpan />
                                        </S.ArticleBtn>
                                    </S.SellerRight>
                                </S.ProfileSellSeller>
                            </S.ProfileSellContent>
                        </S.MainProfileSell>
                        <S.MainTitle>Товары продавца</S.MainTitle>
                    </S.MainCenterBlock>
                    <S.MainContent>
                        <Products id={UserSelectProd?.user.id} />
                    </S.MainContent>
                </S.MainContainer>
            </S.MainContainer>
        </>
    )
}

export default SellerProfile
