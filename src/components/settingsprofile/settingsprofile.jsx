import { useSelector } from 'react-redux'
import { useState } from 'react'
import * as S from './settingsprofile.styled'
import noPhoto from '../img/myprofile.png'
import { userSelector } from '../../store/selectors/selectors'

function SettingsProfile() {
    const user = useSelector(userSelector)

    const [surname, setSurname] = useState()
    const [city, setCity] = useState()

    return (
        <S.MainProfile>
            <S.ProfileContent>
                <S.ProfileTitle>Настройки профиля</S.ProfileTitle>
                <S.ProfileSettings>
                    <S.SettingsLeft>
                        <S.SettingsImg>
                            {/*  логика */}
                            {user.avatar ? (
                                <S.Img
                                    src={`http://localhost:8090/${user.avatar}`}
                                />
                            ) : (
                                <S.Img src={noPhoto} />
                            )}
                        </S.SettingsImg>
                        <S.SettingsChangeFoto>Заменить</S.SettingsChangeFoto>
                    </S.SettingsLeft>
                    <S.SettingsRight>
                        <S.SettingsForm>
                            <S.SettingsDiv>
                                <S.SettingsFormLabel>Имя</S.SettingsFormLabel>
                                <S.SettingsFormInput
                                    name="name"
                                    type="text"
                                    placeholder={user.name}
                                />
                            </S.SettingsDiv>
                            <S.SettingsDiv>
                                <S.SettingsFormLabel>
                                    Фамилия
                                </S.SettingsFormLabel>
                                <S.SettingsFormInput
                                    name="surname"
                                    value={surname}
                                    type="text"
                                    placeholder={user.surname}
                                    onChange={(e) => setSurname(e)}
                                />
                            </S.SettingsDiv>
                            <S.SettingsDiv>
                                <S.SettingsFormLabel>Город</S.SettingsFormLabel>
                                <S.SettingsFormInput
                                    name="city"
                                    value={city}
                                    type="text"
                                    placeholder={user.city}
                                    onChange={(e) => setCity(e)}
                                />
                            </S.SettingsDiv>
                            <S.SettingsDiv>
                                <S.SettingsFormLabel>
                                    Телефон
                                </S.SettingsFormLabel>

                                <S.PhoneInput
                                    name="phone"
                                    type="tel"
                                    placeholder={user.phone}
                                />
                            </S.SettingsDiv>
                            <S.SettingsBtn
                            // id='settingsBtn'
                            // onClick={(e) => {
                            //     e.preventDefault();
                            //     setOpenFormChangePassword(true)
                            // }};
                            >
                                Сохранить
                            </S.SettingsBtn>
                        </S.SettingsForm>
                    </S.SettingsRight>
                </S.ProfileSettings>
            </S.ProfileContent>
        </S.MainProfile>
    )
}

export default SettingsProfile
