import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import AppRoutes from './AppRoutes'
import {
    tokenUpdate,
    userSelProdUpdate,
    userStateUpdate2,
} from './store/reducers/reducers'

function Avito() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        dispatch(tokenUpdate(JSON.parse(localStorage.getItem('token')) || {}))
        dispatch(
            userStateUpdate2(JSON.parse(localStorage.getItem('user')) || {})
        )
        dispatch(
            userSelProdUpdate(
                JSON.parse(localStorage.getItem('UserSelectedAd')) || {}
            )
        )
        setLoading(true)
    }, [])

    return loading && <AppRoutes />
}
export default Avito
