import Select from 'react-select';

function PresentEmpForm({ presentEmpFormData, setPresentEmpFormData}) {

    const employmentStatusOptions = [
        { value: 'Permanent/Regular', label: 'Permanent/Regular' },
        { value: 'Contractual', label: 'Contractual' },
        { value: 'Part-time/Temporary', label: 'Part-time/Temporary' },
        { value: 'Casual', label: 'Casual'},
        { value: 'Project-based', label: 'Project-based'}
    ]

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPresentEmpFormData({ ...presentEmpFormData, [name]: value });
    }

    const handleSelectChange = (newValue) => {
        setPresentEmpFormData({ ...presentEmpFormData, employmentStatus: newValue ? newValue.value : '' });
    }

    return (
        <div>
            <h1 className="text-3xl font-semibold">Present Employment Details</h1>
            <div className="flex flex-col gap-8 px-6 mt-4 text-xl">
                <div className="flex gap-24">
                    <div className="flex flex-col max-w-fit gap-2">
                        <label htmlFor='Occupation'>Occupation</label>
                        <input type="text" className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[260px]" name="occupation" id="Occupation" placeholder="Software Developer" onChange={handleInputChange}/>
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
                        />
                    </div>
                    <div className="flex flex-col max-w-fit gap-2">
                        <label htmlFor='Type of Work'>Type of Work (For OFW)</label>
                        <div className="flex gap-8">
                            <div className="flex gap-2">
                                <input type="radio" name="typeofWork" id="Land-based" value="Land-based" onChange={handleInputChange}/>
                                <label htmlFor="Land-based">Land-based</label>
                            </div>
                            <div className="flex gap-2">
                                <input type="radio" name="typeofWork" id="Sea-based" value="Sea-based" onChange={handleInputChange}/>
                                <label htmlFor="Sea-based">Sea-based</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-24">
                    <div className="flex flex-col max-w-fit gap-2">
                        <label htmlFor='Employer/Business Name'>Employer/Business Name</label>
                        <input type="text" className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[260px]" name="employer/BusinessName" id="Employer/Business Name" placeholder="Company Inc." onChange={handleInputChange}/>
                    </div>
                    <div className="flex flex-col max-w-fit gap-2">
                        <label htmlFor='Employer/Business Address'>Employer/Business Address</label>
                        <input type="text" className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[260px]" name="employer/BusinessAddress" id="Employer/Business Address" placeholder="123 Company St." onChange={handleInputChange}/>
                    </div>
                    <div className="flex flex-col max-w-fit gap-2">
                        <label htmlFor='Office Assignment'>Office Assignment</label>
                        <div className="flex gap-8">
                            <div className='flex gap-2'>
                                <input type="radio" name="officeAssignment" id="Head Office" value="Head Office" onChange={handleInputChange}/>
                                <label htmlFor="Head Office">Head Office</label>
                            </div>
                            <div className='flex gap-2'>
                                <input type="radio" name="officeAssignment" id="Branch Office" value="Branch Office" onChange={handleInputChange}/>
                                <label htmlFor="Branch Office">Branch Office</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-24">
                    <div className="flex flex-col max-w-fit gap-2">
                        <label htmlFor='Monthly Income'>Monthly Income</label>
                        <input type="number" className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[260px]" name="monthlyIncome" id="Monthly Income" placeholder="50000" onChange={handleInputChange}/>
                    </div>
                    <div className="flex flex-col max-w-fit gap-2">
                        <label htmlFor='Employment Date'>Employment Date</label>
                        <input type="date" className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[260px]" name="employmentDate" id="Employment Date" onChange={handleInputChange}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PresentEmpForm;