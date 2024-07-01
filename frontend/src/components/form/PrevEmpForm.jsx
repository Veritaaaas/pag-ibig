import React, { useState } from 'react';
import { IoIosAddCircle } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";

function PrevEmpForm() {
    const initialEmployment = {
        employerName: '',
        employerAddress: '',
        officeAssignment: '',
        fromDate: '',
        toDate: ''
    };

    const [employments, setEmployments] = useState([initialEmployment]);

    const addEmployment = () => {
        setEmployments([...employments, initialEmployment]);
    };

    const handleEmploymentChange = (index, event) => {
        const updatedEmployments = employments.map((employment, i) => {
            if (i === index) {
                return { ...employment, [event.target.name]: event.target.value };
            }
            return employment;
        });
        setEmployments(updatedEmployments);
    };

    return (
        <div>
            <h1 className="text-3xl font-semibold">Previous Employments Details</h1>
            <div className="flex flex-col gap-8 px-6 mt-4 text-xl">
                {employments.map((employment, index) => (
                    <div key={index} className="flex gap-16">
                        <div className="flex flex-col text-xl max-w-fit gap-2">
                            <label htmlFor={`employerName-${index}`}>Employer/Business Name</label>
                            <input type="text" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2" name="employerName" id={`employerName-${index}`} placeholder="Company Inc." value={employment.employerName} onChange={(e) => handleEmploymentChange(index, e)}/>
                        </div>
                        <div className="flex flex-col max-w-fit gap-2">
                            <label htmlFor={`employerAddress-${index}`}>Employer/Business Address</label>
                            <input type="text" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2" name="employerAddress" id={`employerAddress-${index}`} placeholder="123 Company St." value={employment.employerAddress} onChange={(e) => handleEmploymentChange(index, e)}/>
                        </div>
                        <div className="flex flex-col max-w-fit gap-2">
                            <label htmlFor={`officeAssignment-${index}`}>Office Assignment</label>
                            <div className="flex gap-8">
                                <div className='flex gap-2'>
                                    <input type="radio" name="officeAssignment" id={`headOffice-${index}`} value="Head Office" checked={employment.officeAssignment === 'Head Office'} onChange={(e) => handleEmploymentChange(index, e)}/>
                                    <label htmlFor={`headOffice-${index}`}>Head Office</label>
                                </div>
                                <div className='flex gap-2'>
                                    <input type="radio" name="officeAssignment" id={`branchOffice-${index}`} value="Branch Office" checked={employment.officeAssignment === 'Branch Office'} onChange={(e) => handleEmploymentChange(index, e)}/>
                                    <label htmlFor={`branchOffice-${index}`}>Branch Office</label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col max-w-fit gap-2">
                            <label htmlFor={`fromDate-${index}`}>From Date</label>
                            <input type="date" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2" name="fromDate" id={`fromDate-${index}`} value={employment.fromDate} onChange={(e) => handleEmploymentChange(index, e)}/>
                        </div>
                        <div className="flex flex-col max-w-fit gap-2">
                            <label htmlFor={`toDate-${index}`}>To Date</label>
                            <input type="date" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2" name="toDate" id={`toDate-${index}`} value={employment.toDate} onChange={(e) => handleEmploymentChange(index, e)}/>
                        </div>
                        <div className="flex items-end pb-4">
                            <button type="button" className="bg-[#3564FD] text-white rounded-xl p-2 px-4" onClick={() => setEmployments(employments.filter((_, i) => i !== index))}>
                                <FaTrashAlt className="text-[20px]"/>
                            </button>
                        </div>
                    </div>
                ))}
                <div>
                    <button type="button" className="flex items-center gap-2 bg-[#3564FD] text-white rounded-xl p-2 px-4" onClick={addEmployment}>
                        <IoIosAddCircle className="text-[30px]"/>
                        <h1>Add Another</h1>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PrevEmpForm;