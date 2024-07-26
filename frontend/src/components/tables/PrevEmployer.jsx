import React, { useState, useEffect } from 'react';
import PrevEmployerModal from '../modals/PrevEmployerModal';

function PrevEmployer({ prevEmp, setPrevEmp }) {

    const [showModal, setShowModal] = useState(false);
    const [selectedEmp, setSelectedEmp] = useState({});

    const handleRowClick = (emp) => {
        setSelectedEmp(emp);
        setShowModal(true);
        console.log(emp);
    }

    const getPrevEmployer = async () => {
        try {
            const response = await fetch("http://127.0.0.1:5000/prevEmployer");
            const jsonData = await response.json();
            console.log(jsonData);
            setPrevEmp(jsonData);
        }
        catch (err) {
            alert(err.message);
        }
    }

    useEffect(() => {
        getPrevEmployer();
    }, [showModal]);

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
                        <tr key={emp.CompanyCode} className="border-b-2 border-gray-200" onClick={() => handleRowClick(emp)}>
                            <td className="px-10 py-2 whitespace-nowrap">{emp.PrevCompCode}</td>
                            <td className="px-10 py-2">{emp.PrevEmpName}</td>
                            <td className="px-10 py-2">{emp.PrevEmpAddress}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showModal && <PrevEmployerModal emp={selectedEmp} setShowModal={setShowModal} />}
        </div>
    )
}

export default PrevEmployer;