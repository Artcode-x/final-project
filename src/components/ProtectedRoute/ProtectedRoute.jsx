import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { userSelector } from '../../store/selectors/selectors'

function ProtectedRoute() {
    const user = useSelector(userSelector)

    if (user.id) return <Outlet />

    return <Navigate to="/" replace />
}

export default ProtectedRoute
