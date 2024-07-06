import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; 
import Select from 'react-select';  

function PrevEmploymentModal({ emp, setShowModal}) {
    
    const [empFormData, setEmpFormData] = useState(emp);

    const officeAssignmentOptions = [
        { value: 'Head Office', label: 'Head Office' },
        { value: 'Branch Office', label: 'Branch Office' },
    ];

    const defaultOfficeAssignment = officeAssignmentOptions.find(option => option.value === empFormData.PrevEmpOfficeAssignment);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmpFormData({ ...empFormData, [name]: value });
    }

    const handleSelectInput = (newValue) => {
        setEmpFormData({ ...empFormData, PrevEmpOfficeAssignment: newValue ? newValue.value : '' });
    }

    const handleUpdate = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/update-member', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                type: 'PrevEmployment',
                data: empFormData
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Employment record updated successfully!');
            setShowModal(false);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    const handleDelete = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/delete-member', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                type: 'PrevEmployment',
                id: empFormData.PrevCompCode || null,
                PI_MID: empFormData.PI_MID || null
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Employment record deleted successfully!');
            setShowModal(false);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }


    return (
        <form>
            <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-5 shadow-lg h-[300px] w-fit rounded-lg overflow-y-auto">
                    <div className="flex justify-end">
                        <button onClick={() => setShowModal(false)}><FaTimes /></button>
                    </div>
                    <div>
                        <h1 className="text-[#2b2b2b] text-xl font-bold">Previous Employment</h1>
                        <div className="flex flex-col gap-4 text-md mt-6">
                            <div className="flex gap-10">
                                <div className="flex flex-col max-w-fit gap-2">
                                    <label>Office Assignment</label>
                                    <Select
                                        options={officeAssignmentOptions}
                                        isClearable
                                        isSearchable
                                        placeholder="Select..."
                                        className="w-[200px]"
                                        onChange={handleSelectInput}
                                        defaultValue={defaultOfficeAssignment}
                                    />
                                </div>
                                <div className="flex flex-col max-w-fit gap-2">
                                    <label htmlFor='FromDate'>From Date</label>
                                    <input type="date" className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[200px]" name="FromDate" id="FromDate" value={empFormData.FromDate} onChange={handleInputChange}/>
                                </div>
                                <div className="flex flex-col max-w-fit gap-2">
                                    <label htmlFor='ToDate'>To Date</label>
                                    <input type="date" className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[200px]" name="ToDate" id="ToDate" value={empFormData.ToDate} onChange={handleInputChange}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-6">
                        <button className="bg-[#2b2b2b] text-white px-10 py-2 rounded-lg" onClick={handleUpdate}>Update</button>
                        <button className="bg-[#2b2b2b] text-white px-10 py-2 rounded-lg ml-4" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default PrevEmploymentModal;