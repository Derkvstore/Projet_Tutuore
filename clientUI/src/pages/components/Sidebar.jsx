import { Link } from 'react-router-dom'

function Sidebar() {
    return <div>
        <aside className="w-64 h-screen bg-blue-800 text-white p-4 space-y-4 fixed">
        <h2 className="text-xl font-bold mb-6">E-School</h2>
        <nav className="flex flex-col space-y-2">
            <Link to="/dashboard/admin" className="hover:bg-blue-700 p-2 rounded">Accueil admin</Link>
            <Link to="/dashboard/admin/users" className="hover:bg-blue-700 p-2 rounded">Utilisateurs</Link>
            <Link to="/dashboard/admin/courses" className="hover:bg-blue-700 p-2 rounded">Cours</Link>
            <Link to="/dashboard/admin/payments" className="hover:bg-blue-700 p-2 rounded">Paiements</Link>
        </nav>
        </aside>
    </div>
}

export default Sidebar
