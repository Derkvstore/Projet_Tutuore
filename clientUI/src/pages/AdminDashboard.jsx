import DashboardLayout from './components/DashboardLayout'
import Card from './components/Card'
import Table from './components/Table'
// import { FaUsers, FaBook, FaMoneyBill } from 'react-icons/fa'

function AdminDashboard() {
    return <div>
        <DashboardLayout>
        <h1 className="text-2xl font-bold mb-6">Tableau de bord Administrateur</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* <Card title="Étudiants" value="1280" icon={<FaUsers />} /> */}
            {/* <Card title="Cours" value="42" icon={<FaBook />} /> */}
            {/* <Card title="Paiements" value="7,500 FCFA" icon={<FaMoneyBill />} /> */}
        </div>

        <Table
            columns={['Nom', 'Email', 'Statut']}
            data={[
            ['Moussa Koné', 'moussa@school.com', 'Étudiant'],
            ['Aminata Diallo', 'aminata@school.com', 'Admin'],
            ]}
        />
        </DashboardLayout>
    </div>
}

export default AdminDashboard