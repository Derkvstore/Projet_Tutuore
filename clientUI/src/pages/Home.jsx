import Navbar from './components/Navbar'
import {  Outlet } from 'react-router-dom'


function Home() {
    return <div>
        <Navbar />

        <Outlet />

    </div>
}

export default Home