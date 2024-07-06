
function PrevEmployer({ prevEmp }) {

    return (
        <div className="mt-12 px-8 w-full">
            <table className="text-[#636363] w-full">
                <thead className="text-[#2b2b2b] text-[18px]">
                    <tr className="border-b-4 border-gray-200">
                        <th>PrevEmp Code</th>
                        <th>Employer Name</th>
                        <th>Employer Address</th>
                    </tr>
                </thead>
                <tbody className="text-[18px] text-[#636363] font-semibold text-center">
                    {prevEmp.map((emp) => (
                        <tr key={emp.CompanyCode} className="border-b-2 border-gray-200">
                            <td className="px-10 py-2 whitespace-nowrap">{emp.PrevCompCode}</td>
                            <td className="px-10 py-2">{emp.PrevEmpAddress}</td>
                            <td className="px-10 py-2">{emp.PrevEmpName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PrevEmployer;