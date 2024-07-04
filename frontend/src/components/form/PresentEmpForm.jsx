import Select from 'react-select';

function PresentEmpForm() {

    const employmentStatusOptions = [
        { value: 'Permanent/Regular', label: 'Permanent/Regular' },
        { value: 'Contractual', label: 'Contractual' },
        { value: 'Part-time/Temporary', label: 'Part-time/Temporary' },
        { value: 'Casual', label: 'Casual'},
        { value: 'Project-based', label: 'Project-based'}
    ]

    return (
        <div>
            <h1 className="text-3xl font-semibold">Present Employment Details</h1>
            <div className="flex flex-col gap-8 px-6 mt-4 text-xl">
                <div className="flex gap-24">
                    <div className="flex flex-col max-w-fit gap-2">
                        <label htmlFor='Occupation'>Occupation</label>
                        <input type="text" className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[260px]" name="Occupation" id="Occupation" placeholder="Software Developer"/>
                    </div>
                    <div className="flex flex-col max-w-fit gap-2">
                        <label htmlFor='Employment Status'>Employment Status</label>
                        <Select
                            options={employmentStatusOptions}
                            isClearable
                            isSearchable
                            placeholder="Select..."
                            className="w-[260px]"
                        />
                    </div>
                    <div className="flex flex-col max-w-fit gap-2">
                        <label htmlFor='Type of Work'>Type of Work (For OFW)</label>
                        <div className="flex gap-8">
                            <div className="flex gap-2">
                                <input type="radio" name="Type of Work" id="Land-based" value="Land-based"/>
                                <label htmlFor="Land-based">Land-based</label>
                            </div>
                            <div className="flex gap-2">
                                <input type="radio" name="Type of Work" id="Sea-based" value="Sea-based"/>
                                <label htmlFor="Sea-based">Sea-based</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-24">
                    <div className="flex flex-col max-w-fit gap-2">
                        <label htmlFor='Employer/Business Name'>Employer/Business Name</label>
                        <input type="text" className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[260px]" name="Employer/Business Name" id="Employer/Business Name" placeholder="Company Inc."/>
                    </div>
                    <div className="flex flex-col max-w-fit gap-2">
                        <label htmlFor='Employer/Business Address'>Employer/Business Address</label>
                        <input type="text" className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[260px]" name="Employer/Business Address" id="Employer/Business Address" placeholder="123 Company St."/>
                    </div>
                    <div className="flex flex-col max-w-fit gap-2">
                        <label htmlFor='Office Assignment'>Office Assignment</label>
                        <div className="flex gap-8">
                            <div className='flex gap-2'>
                                <input type="radio" name="Office Assignment" id="Head Office" value="Head Office"/>
                                <label htmlFor="Head Office">Head Office</label>
                            </div>
                            <div className='flex gap-2'>
                                <input type="radio" name="Office Assignment" id="Branch Office" value="Branch Office"/>
                                <label htmlFor="Branch Office">Branch Office</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-24">
                    <div className="flex flex-col max-w-fit gap-2">
                        <label htmlFor='Monthly Income'>Monthly Income</label>
                        <input type="number" className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[260px]" name="Monthly Income" id="Monthly Income" placeholder="50000"/>
                    </div>
                    <div className="flex flex-col max-w-fit gap-2">
                        <label htmlFor='Employment Date'>Employment Date</label>
                        <input type="date" className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[260px]" name="Employment Date" id="Employment Date"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PresentEmpForm;