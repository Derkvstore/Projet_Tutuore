function Table({ columns, data }) {
    return <div className="overflow-x-auto mt-6">
        <table className="min-w-full bg-white border">
            <thead className="bg-blue-800 text-white">
            <tr>
                {columns.map((col, i) => (
                <th key={i} className="py-2 px-4 border-b text-left">{col}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row, i) => (
                <tr key={i} className="hover:bg-gray-100">
                {row.map((cell, j) => (
                    <td key={j} className="py-2 px-4 border-b">{cell}</td>
                ))}
                </tr>
            ))}
            </tbody>
        </table>
    </div>
}

export default Table
