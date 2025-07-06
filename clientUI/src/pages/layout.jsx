import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Header from './components/Header'
import Footer from './components/Footer'


function Layout() {

    return (
        <div className= 'min-h-[110vh] flex flex-col justify-between' >
            <div>
                <Toaster position="top-center" reverseOrder={false} />

                <Header />

                <Outlet />
            </div>

            <Footer />
        </div>
    );
}

export default Layout;