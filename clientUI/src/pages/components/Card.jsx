function Card({ title, value, icon }) {
    return <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
        <div className="flex items-center justify-between">
            <div>
            <h4 className="text-gray-600 font-medium">{title}</h4>
            <p className="text-2xl font-bold text-blue-800">{value}</p>
            </div>
            <div className="text-3xl text-blue-600">
            {icon}
            </div>
        </div>
    </div>
}

export default Card
