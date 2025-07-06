import Sidebar from './Sidebar'


function DashboardLayout({ children }) {
    return <div className="flex">
        <Sidebar />
        <main className="ml-64 p-6 bg-gray-50 min-h-screen w-full">
            {children}
        </main>
    </div>
}

export default DashboardLayout
