import React, { useState, useEffect } from 'react';
import PrevEmploymentModal from '../modals/PrevEmploymentModal';

function PrevEmployment({ prevEmp, setPrevEmp }) {

    const [showModal, setShowModal] = useState(false);
    const [selectedEmp, setSelectedEmp] = useState({});

    const handleRowClick = (emp) => {
        setSelectedEmp(emp);
        setShowModal(true);
        console.log(emp);
    }

    const getPrevEmployment = async () => {
        try {
            const response = await fetch("http://127.0.0.1:5000/prevEmployment");
            const jsonData = await response.json();
            console.log(jsonData);
            setPrevEmp(jsonData);
        }
        catch (err) {
            alert(err.message);
        }
    }

    useEffect(() => {
        getPrevEmployment();
    }, [showModal]);

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
                        <tr key={emp.CompanyCode} className="border-b-2 border-gray-200" onClick={() => handleRowClick(emp)}>
                            <td className="px-10 py-2 whitespace-nowrap">{emp.PrevCompCode}</td>
                            <td className="px-10 py-2">{emp.PI_MID}</td>
                            <td className="px-10 py-2">{emp.PrevEmpOfficeAssignment}</td>
                            <td className="px-10 py-2">{emp.FromDate}</td>
                            <td className="px-10 py-2">{emp.ToDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showModal && <PrevEmploymentModal emp={selectedEmp} setShowModal={setShowModal} />}
        </div>
    )
}

export default PrevEmployment;