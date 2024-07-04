import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { IoIosAddCircle } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";


import PropTypes from 'prop-types';

function PrevEmpForm({ PrevEmpFormData, setPrevEmpFormData }) {

    const officeAssignmentOptions = [
        { value: 'Head Office', label: 'Head Office' },
        { value: 'Branch Office', label: 'Branch Office' },
    ];

    const initialEmployment = {
        employerName: '',
        employerAddress: '',
        officeAssignment: '',
        fromDate: '',
        toDate: '',
    };

    const [employments, setEmployments] = useState([initialEmployment]);

    const addEmployment = () => {
        setEmployments([...employments, initialEmployment]);
    }

    const removeEmployment = (index) => {
        const updatedEmployments = [...employments];
        updatedEmployments.splice(index, 1);
        setEmployments(updatedEmployments);
    }

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedEmployments = employments.map((employment, i) => {
            if (i === index) {
                return { ...employment, [name]: value };
            }
            return employment;
        });
        setEmployments(updatedEmployments);
    }

    const handleSelectInput = (newValue, index) => {
        const updatedEmployments = employments.map((employment, i) => {
            if (i === index) {
                return { ...employment, officeAssignment: newValue ? newValue.value : '' };
            }
            return employment;
        });
        setEmployments(updatedEmployments);
    }

    useEffect(() => {
        setPrevEmpFormData(employments);
    }, [employments]);

    return (
        <div>
            <h1 className="text-3xl font-semibold">Previous Employments Details</h1>
            <div className="flex flex-col gap-8 px-6 mt-4 text-xl">
                {/* Employment details */}
                {employments.map((employment, index) => (
                    <div className="flex gap-8 text-lg" key={index}>
                        {/* Employer/Business Name */}
                        <div className="flex flex-col text-lg max-w-fit gap-2">
                            <label htmlFor='employerName'>Employer/Business Name</label>
                            <input
                                type="text"
                                className="rounded-xl border-[#bcbcbc] border-[1px] p-2"
                                name='employerName'
                                id={`employerName-${index}`}
                                value={employment.employerName}
                                onChange={(e) => handleInputChange(e, index)}
                                placeholder="Company Inc."
                            />
                        </div>
                        {/* Employer/Business Address */}
                        <div className="flex flex-col max-w-fit gap-2">
                            <label htmlFor='employerAddress'>Employer/Business Address</label>
                            <input
                                type="text"
                                className="rounded-xl border-[#bcbcbc] border-[1px] p-2"
                                name='employerAddress'
                                id={`employerAddress-${index}`}
                                value={employment.employerAddress}
                                onChange={(e) => handleInputChange(e, index)}
                                placeholder="123 Company St."
                            />
                        </div>
                        {/* Office Assignment */}
                        <div className="flex flex-col max-w-fit gap-2">
                            <label>Office Assignment</label>
                            <Select
                                options={officeAssignmentOptions}
                                isClearable
                                isSearchable
                                placeholder="Select..."
                                className="w-[200px]"
                                onChange={(newValue) => handleSelectInput(newValue, index)}
                            />
                        </div>
                        {/* From Date */}
                        <div className="flex flex-col max-w-fit gap-2">
                            <label htmlFor='fromDate'>From Date</label>
                            <input
                                type="date"
                                className="rounded-xl border-[#bcbcbc] border-[1px] p-2"
                                name='fromDate'
                                id={`fromDate-${index}`}
                                value={employment.fromDate}
                                onChange={(e) => handleInputChange(e, index)}

                            />
                        </div>
                        {/* To Date */}
                        <div className="flex flex-col max-w-fit gap-2">
                            <label htmlFor='toDate'>To Date</label>
                            <input
                                type="date"
                                className="rounded-xl border-[#bcbcbc] border-[1px] p-2"
                                name='toDate'
                                id={`toDate-${index}`}
                                value={employment.toDate}
                                onChange={(e) => handleInputChange(e, index)}
                            />
                        </div>
                        {/* Remove button */}
                        <div className="flex items-end pb-4">
                            <button
                                type="button"
                                className="bg-[#3564FD] text-white rounded-xl p-2 px-4"
                                onClick={() => removeEmployment(index)}
                            >
                                <FaTrashAlt className="text-[14px]" />
                            </button>
                        </div>
                    </div>
                ))}
                {/* Add another employment button */}
                <div>
                    <button
                        type="button"
                        className="flex items-center gap-2 bg-[#3564FD] text-white rounded-xl p-2 px-4"
                        onClick={addEmployment}
                    >
                        <IoIosAddCircle className="text-[30px]" />
                        <span>Add Another</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

// PropTypes validation
PrevEmpForm.propTypes = {
    PrevEmpFormData: PropTypes.array.isRequired,
    setPrevEmpFormData: PropTypes.func.isRequired,
};

export default PrevEmpForm;