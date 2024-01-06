import axios from 'axios'

const way = 'http://localhost:8090'

// Получение всех постов, в конце адреса можно добавить сортировку: ?sorting=new
async function GetAllAds() {
    const response = await axios.get(`${way}/ads`)
    // возвр нужн-ю нам инфо, она в data
    return response.data
}
// &sorting=new

// Получение постов конкретного продавца
export async function GetUserAd({ id }) {
    console.log(id)
    const response = await axios.get(`${way}/ads?user_id=${id}`)
    // возвр нужн-ю нам инфо, она в data
    return response.data
}

// Регистрация
export async function addRegistrUser({ email, password, name, surname, city }) {
    const response = await axios({
        method: 'POST',
        url: `${way}/auth/register`,
        data: {
            email: `${email}@gmail.com`,
            password,
            name,
            surname,
            city,
        },
    })

    return response.data
}

// Получаем токен
export async function getToken({ email, password }) {
    const response = await axios({
        method: 'POST',
        url: `${way}/auth/login`,
        data: {
            email: `${email}@gmail.com`,
            password,
        },
    })
    return response.data
}

// Получить текущего юзера
// принимаем токен со стр логина
export async function GetUser({ token }) {
    const response = await axios({
        method: 'GET',
        url: `${way}/user`,
        headers: {
            authorization: `Bearer ${token}`,
        },
    })
    return response.data
}

// тестим получение с localStorage
export const getTokenFromLocalStorage = () => {
    const token = localStorage.getItem('token')
    return token ? JSON.parse(token) : null
}

// получение комментариев/отзывов к объявлению
export async function getCommentsAdv({ id }) {
    const response = await axios.get(`${way}/ads/${id}/comments`)
    console.log(response.data)
    return response.data
}

// обновляет токен
export async function refreshTokens({ token }) {
    const response = await axios({
        method: 'PUT',
        url: `${way}/auth/login`,
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token.access_token}`,
        },
        data: {
            access_token: token.access_token,
            refresh_token: token.refresh_token,
        },
    })
    return response.data
}

// добавление комментария/отзыва
export async function addComment({ id, token, text }) {
    const newToken = await refreshTokens({ token })

    //
    const newComment = await axios(`${way}/ads/${id}/comments`, {
        method: 'POST',
        data: JSON.stringify({ text }),
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${newToken.access_token}`,
        },
    })
    return { newComment, newToken }
}

// export async function getTest() {
//     const resp = await fetch('http://localhost:8090/ads')
//     return resp.json()
// }

export default GetAllAds

//  function GetAllAds() {
//     return axios.get(`http://localhost:8090/ads`).then((resp) => resp.data)
// }
