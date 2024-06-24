import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaoutLayout() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}