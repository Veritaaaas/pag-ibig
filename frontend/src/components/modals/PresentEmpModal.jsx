import { FaTimes } from 'react-icons/fa';
import Select from 'react-select';
import { useState } from 'react';

function PresentEmpModal({ emp, setShowModal }) {

    const [ empFormData, setEmpFormData ] = useState(emp);

    const employmentStatusOptions = [
        { value: 'Permanent/Regular', label: 'Permanent/Regular' },
        { value: 'Contractual', label: 'Contractual' },
        { value: 'Part-time/Temporary', label: 'Part-time/Temporary' },
        { value: 'Casual', label: 'Casual'},
        { value: 'Project-based', label: 'Project-based'}
    ]

    const defaultEmpStatus = employmentStatusOptions.find(option => option.value === emp.PresentEmpStatus);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmpFormData({ ...empFormData, [name]: value });
    }

    const handleSelectChange = (newValue) => {
        setEmpFormData({ ...empFormData, PresentEmpStatus: newValue ? newValue.value : '' });
    }

    const handleUpdate = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/update-member', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                type: 'PresentEmp',
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
                type: 'PresentEmp',
                id: empFormData.CompanyCode
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
                <div className="bg-white p-5 shadow-lg w-[70%] max-h-[70%] rounded-lg overflow-y-auto">
                    <div className="flex justify-end">
                        <button onClick={() => setShowModal(false)}><FaTimes /></button>
                    </div>
                    <div>
                        <h1 className="text-[#2b2b2b] text-xl font-bold">Present Employment</h1>
                        <div className="flex flex-col gap-4 text-md mt-6">
                            <div className="flex gap-10">
                                <div className="flex flex-col max-w-fit gap-2">
                                    <label htmlFor='Occupation'>Occupation</label>
                                    <input type="text" className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[260px]" name="occupation" id="Occupation" placeholder="Software Developer" value={empFormData.Occupation} onChange={handleInputChange}/>
                                </div>
                                <div className="flex flex-col max-w-fit gap-2">
                                    <label htmlFor='employmentStatus'>Employment Status</label>
                                    <Select
                                        options={employmentStatusOptions}
                                        isClearable
                                        isSearchable
                                        placeholder="Select..."
                                        className="w-[260px]"
                                        onChange={handleSelectChange}
                                        defaultValue={defaultEmpStatus}
                                    />
                                </div>
                                <div className="flex flex-col max-w-fit gap-2">
                                    <label htmlFor='Type of Work'>Type of Work (For OFW)</label>
                                    <div className="flex gap-8">
                                        <div className="flex gap-2">
                                            <input type="radio" name="OFW_TypeOfWork" id="Land-based" value="Land-based" checked={empFormData.OFW_TypeOfWork === 'Land-based'} onChange={handleInputChange}/>
                                            <label htmlFor="Land-based">Land-based</label>
                                        </div>
                                        <div className="flex gap-2">
                                            <input type="radio" name="OFW_TypeOfWork" id="Sea-based" value="Sea-based" checked={empFormData.OFW_TypeOfWork === 'Sea-based'} onChange={handleInputChange}/>
                                            <label htmlFor="Sea-based">Sea-based</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <div className="flex flex-col max-w-fit gap-2">
                                    <label htmlFor='Employer/Business Name'>Employer/Business Name</label>
                                    <input type="text" className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[260px]" name="PresentEmpName" id="Employer/Business Name" placeholder="Company Inc." value={empFormData.PresentEmpName} onChange={handleInputChange}/>
                                </div>
                                <div className="flex flex-col max-w-fit gap-2">
                                    <label htmlFor='Employer/Business Address'>Employer/Business Address</label>
                                    <input type="text" className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[260px]" name="PresentEmpAddress" id="Employer/Business Address" placeholder="123 Company St." value={empFormData.PresentEmpAddress} onChange={handleInputChange}/>
                                </div>
                                <div className="flex flex-col max-w-fit gap-2">
                                    <label htmlFor='Office Assignment'>Office Assignment</label>
                                    <div className="flex gap-8">
                                        <div className='flex gap-2'>
                                            <input type="radio" name="PresentOfficeAssignment" id="Head Office" value="Head Office" checked={empFormData.PresentOfficeAssignment === 'Head Office'} onChange={handleInputChange}/>
                                            <label htmlFor="Head Office">Head Office</label>
                                        </div>
                                        <div className='flex gap-2'>
                                            <input type="radio" name="PresentOfficeAssignment" id="Branch Office" value="Branch Office" checked={empFormData.PresentOfficeAssignment === 'Branch Office'} onChange={handleInputChange}/>
                                            <label htmlFor="Branch Office">Branch Office</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <div className="flex flex-col max-w-fit gap-2">
                                    <label htmlFor='Monthly Income'>Monthly Income</label>
                                    <input type="text" className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[260px]" name="MonthlyIncome_Total" id="Monthly Income" placeholder="20000" value={empFormData.MonthlyIncome_Total} onChange={handleInputChange}/>
                                </div>
                                <div className="flex flex-col max-w-fit gap-2">
                                    <label htmlFor='Employment Date'>Employment Date</label>
                                    <input type="date" className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[260px]" name="PresentDateEmployed" id="Employment Date" value={empFormData.PresentDateEmployed} onChange={handleInputChange}/>
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

export default PresentEmpModal;