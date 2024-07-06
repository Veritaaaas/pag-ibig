import { useEffect, useState } from "react";
import PresentEmpModal from "./modals/PresentEmpModal";

function PresentEmp({ emp, setEmp }) {

    const [showModal, setShowModal] = useState(false);
    const [selectedEmp, setSelectedEmp] = useState(null);

    const handleRowClick = (emp) => {
        setSelectedEmp(emp);
        setShowModal(true);
    }

    const getPresentEmployer = async () => {
        try {
            const response = await fetch("http://127.0.0.1:5000/presentEmp");
            const jsonData = await response.json();
            console.log(jsonData);
            setEmp(jsonData);
        } catch (err) {
            alert(err.message);
        }
    }

    useEffect(() => {
        getPresentEmployer();
    }, [showModal]);

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
                        <tr key={emp.CompanyCode} className="border-b-2 border-gray-200" onClick={() => handleRowClick(emp)}>
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
            {showModal && <PresentEmpModal emp={selectedEmp} setShowModal={setShowModal} />}
        </div>
    )
}

export default PresentEmp;