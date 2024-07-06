

function PresentEmp({ emp }) {

    return (
        <div className="mt-12 px-8 overflow-x-auto">
            <table className="text-[#636363]">
                <thead className="text-[#2b2b2b] text-[18px]">
                    <tr className="border-b-4 border-gray-200">
                        <th>Company Code</th>
                        <th>Occupation</th>
                        <th>PresentEmpStatus</th>
                        <th>Type of Work(OFW)</th>
                        <th>Employer's Name</th>
                        <th>Employer's Address</th>
                        <th>Monthly Income</th>
                        <th>Office Assignment</th>
                        <th>Hire Date</th>
                    </tr>
                </thead>
                <tbody className="text-[18px] text-[#636363] font-semibold">
                    {emp.map((emp) => (
                        <tr key={emp.CompanyCode} className="border-b-2 border-gray-200">
                            <td className="px-10 py-2 whitespace-nowrap">{emp.CompanyCode}</td>
                            <td className="px-10 py-2">{emp.Occupation}</td>
                            <td className="px-10 py-2">{emp.PresentEmpStatus}</td>
                            <td className="px-10 py-2 whitespace-nowrap">{emp.OFW_TypeOfWork}</td>
                            <td className="px-10 py-2 whitespace-nowrap">{emp.PresentEmpName}</td>
                            <td className="px-10 py-2 whitespace-nowrap">{emp.PresentEmpAddress}</td>
                            <td className="px-10 py-2">{emp.MonthlyIncome_Total}</td>
                            <td className="px-10 py-2">{emp.PresentOfficeAssignment}</td>
                            <td className="px-10 py-2">{emp.PresentDateEmployed}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default PresentEmp;