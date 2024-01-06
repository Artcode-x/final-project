import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './registration.styled'
import img from '../../components/img/logo_modal.png'
import { userStateUpdate } from '../../store/reducers/reducers'
import {
    formatMail,
    formatUrl,
    pressEnterKey,
    validateInputText,
} from '../../helpers/helpers'
import { addRegistrUser } from '../../api/api'

function Registration() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPass, setRepeatPass] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [city, setCity] = useState('')
    // other state`s
    const [disabled, setDisabled] = useState(false)
    const [showError, setShowError] = useState(null)

    const checkInputs = () => {
        if (!email) throw new Error('Не введен логин!')
        if (email.length < 3)
            throw new Error('email не должен быть короче 3 символов!')
        if (!password) throw new Error('Не введен пароль!')
        if (password.length < 5) throw new Error('Слишком короткий пароль!')
        if (!repeatPass) throw new Error('Вы не подтвердили пароль!')
        if (password !== repeatPass) throw new Error('Пароли не совпадают!')
    }

    const ClickRegisteration = async () => {
        try {
            setDisabled(true)
            checkInputs()
            const ResonseRegistration = await addRegistrUser({
                email,
                password,
                name,
                surname,
                city,
            })
            console.log(ResonseRegistration)
            dispatch(userStateUpdate(ResonseRegistration))
            localStorage.setItem('user', JSON.stringify(ResonseRegistration))
            navigate(
                `/profile/${formatUrl(formatMail(ResonseRegistration.email))}_${
                    ResonseRegistration.id
                }`
            )
        } catch (error) {
            console.log(error)
            if (error.message) {
                setShowError(error.message)
            } else if (error.response.status === 422) {
                setShowError('Введены недопустимые символы!')
            } else if (error.response.status === 400) {
                setShowError('Юзер с таким логином уже существует!')
            }
        } finally {
            setDisabled(false)
        }
    }

    return (
        <S.ContainerSignup>
            <S.ModalBlock>
                <S.ModalFormReg>
                    {/* блок с лого */}
                    <S.ModalLogo>
                        <S.ModalLogoImg src={img} />
                    </S.ModalLogo>
                    <S.ModalInputRegister
                        value={email}
                        onChange={(e) => setEmail(validateInputText(e))}
                        onKeyDown={(e) =>
                            pressEnterKey(e, ClickRegisteration, disabled)
                        }
                        maxLength={30}
                        type="text"
                        name="email"
                        placeholder="Введите email"
                    />
                    <S.ModalInputRegister
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={(e) =>
                            pressEnterKey(e, ClickRegisteration, disabled)
                        }
                        maxLength={30}
                        type="password"
                        name="password"
                        placeholder="Введите пароль"
                    />
                    <S.ModalInputRegister
                        value={repeatPass}
                        onChange={(e) => setRepeatPass(e.target.value)}
                        onKeyDown={(e) =>
                            pressEnterKey(e, ClickRegisteration, disabled)
                        }
                        maxLength={30}
                        type="password"
                        name="repeatPassword"
                        placeholder="Повторите пароль"
                    />
                    <S.ModalInputRegister
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={(e) =>
                            pressEnterKey(e, ClickRegisteration, disabled)
                        }
                        maxLength={25}
                        type="text"
                        name="name"
                        placeholder="Имя (необязательно)"
                    />
                    <S.ModalInputRegister
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        onKeyDown={(e) =>
                            pressEnterKey(e, ClickRegisteration, disabled)
                        }
                        maxLength={25}
                        type="text"
                        name="surname"
                        placeholder="Фамилия (необязательно)"
                    />
                    <S.ModalInputRegister
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        onKeyDown={(e) =>
                            pressEnterKey(e, ClickRegisteration, disabled)
                        }
                        maxLength={25}
                        type="text"
                        name="city"
                        placeholder="Город (необязательно)"
                    />
                    {/* Блок для отображения ошибки */}
                    {showError && <S.ForErrors>{showError}</S.ForErrors>}
                    {/* Блок с кнопкой */}
                    <S.ModalBtnReg>
                        <S.ModalBtnRegLink
                            // onClick={() => handleRegister(email, password, repeatPassword, name, city, lastName)}
                            onClick={ClickRegisteration}
                            disabled={disabled}
                            type="button"
                        >
                            {disabled
                                ? 'Идет процесс регистрации...'
                                : 'Зарегистрироваться'}
                        </S.ModalBtnRegLink>
                    </S.ModalBtnReg>
                    {/* если уже зарегистрирован выводить сообщение */}
                    <S.ModalBlockText>
                        Уже есть аккаунт, <Link to="/Login">Войдите</Link>
                    </S.ModalBlockText>
                </S.ModalFormReg>
            </S.ModalBlock>
        </S.ContainerSignup>
    )
}

export default Registration
