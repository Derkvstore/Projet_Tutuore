import { useState } from 'react'
import { loginAPI } from '../../apiCalls/auth'
import toast from 'react-hot-toast'

function Login() {
    let [user, setUser] = useState({
        mail: '',
        passW: '',
    })

    async function handleLogin(e) {
        e.preventDefault()
        let response = null;
        let formData = new FormData()

        formData.append('mail', user.mail)
        formData.append('passW', user.passW)

        try {
            response = await loginAPI(user);
            
            if (response.success) {
                localStorage.setItem('token', response.token);
                toast.success(response.message);
                window.location.href = '/profil';
            } else {
                console.log(response.message);
                toast.error(response.message);
            }
        } catch (error) {
            console.log(response.message);
            toast.error(error.message);
        }
    }

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
            <form
                onSubmit={handleLogin}
                className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl bg-white text-gray-800 rounded-xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 grid gap-6 animate-fade-in-up"
            >
                {/* Logo Techno-Lab */}
                <div className="flex justify-center">
                    <img
                        src="/assets/logo.jpg"
                        alt="Logo Techno-Lab"
                        className="w-20 h-20 rounded-full border-4 border-blue-600 shadow-md object-cover mb-4"
                    />
                </div>

                <h2 className="text-2xl font-bold text-center text-blue-700">CONNEXION TECHNO-LAB ISTA</h2>

                <input
                    type="email"
                    placeholder="Adresse e-mail"
                    value={user.mail}
                    onChange={(e) => setUser({ ...user, mail: e.target.value })}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    required
                />

                <input
                    type="password"
                    placeholder="Mot de passe"
                    value={user.passW}
                    onChange={(e) => setUser({ ...user, passW: e.target.value })}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    required
                />

                <button
                    type="submit"
                    className="w-full text-sm sm:text-base bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-lg font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                    🚪 Se connecter
                </button>

                <p className="text-center text-sm text-gray-600">
                    Vous n'avez pas encore de compte ?{' '}
                    <a
                        href="/register"
                        className="text-blue-700 font-semibold hover:underline hover:text-blue-900 transition-colors"
                    >
                        Inscrivez-vous ici
                    </a>
                </p>
            </form>
        </div>
    )
}

export default Login
