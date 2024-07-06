
function PrevEmployment({ prevEmp }) {

    return (
        <div className="mt-12 px-8 w-full">
            <table className="text-[#636363] w-full">
                <thead className="text-[#2b2b2b] text-[18px]">
                    <tr className="border-b-4 border-gray-200">
                        <th>Company Code</th>
                        <th>Pag-Ibig MID</th>
                        <th>Office Assignment</th>
                        <th>From Date</th>
                        <th>To Date</th>
                    </tr>
                </thead>
                <tbody className="text-[18px] text-[#636363] font-semibold text-center">
                    {prevEmp.map((emp) => (
                        <tr key={emp.CompanyCode} className="border-b-2 border-gray-200">
                            <td className="px-10 py-2 whitespace-nowrap">{emp.PrevCompCode}</td>
                            <td className="px-10 py-2">{emp.PI_MID}</td>
                            <td className="px-10 py-2">{emp.PrevEmpOfficeAssignment}</td>
                            <td className="px-10 py-2">{emp.FromDate}</td>
                            <td className="px-10 py-2">{emp.ToDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PrevEmployment;