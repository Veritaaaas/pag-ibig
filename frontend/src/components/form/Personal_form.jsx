import Select from 'react-select';

function Personal_form({ personalFormData, setPersonalFormData}) {

    const maritalStatusOptions = [
        { value: 'Single', label: 'Single' },
        { value: 'Married', label: 'Married' },
        { value: 'Widowed', label: 'Widowed' },
        { value: 'Legally Separated', label: 'Legally Separated' },
        { value: 'Annulled', label: 'Annulled' },
    ];

    const handleTextInput = (e) => {
        const { name, value } = e.target;
        setPersonalFormData({ ...personalFormData, [name]: value });
    }

    const handleSelectInput = (newValue) => {
        setPersonalFormData({ ...personalFormData, maritalStatus: newValue ? newValue.value : '' });
    }

    return (
        <div className=''>
            <h1 className="text-3xl font-semibold">Personal Details</h1>
            <div className="flex flex-col gap-8 px-6 mt-4 text-xl">
                <div className='flex gap-20'>
                    <div className='flex flex-col text-xl max-w-fit gap-2'>
                        <label htmlFor="Full Name">Full Name</label>
                        <input type="text" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[260px]" name="fullName" id="Full Name" placeholder="Juan Dela Cruz" onChange={handleTextInput}/>
                    </div>
                    <div className='flex flex-col text-xl max-w-fit gap-2'>
                        <label htmlFor="Date of Birth">Date of Birth</label>
                        <input type="date" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[260px]" name="birthDate" id="Date of Birth" onChange={handleTextInput}/>
                    </div>
                    <div className='flex flex-col text-xl max-w-fit gap-2'>
                        <label htmlFor="Place of Birth">Place of Birth</label>
                        <input type="text" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[260px]" name="birthPlace" id="Place of Birth" placeholder="Manila" onChange={handleTextInput}/>
                    </div>
                </div>
                <div className='flex gap-20'>
                    <div className='flex flex-col text-xl max-w-fit gap-2'>
                        <label htmlFor='maritalStatus'>Marital Status</label>
                        <Select
                            options={maritalStatusOptions}
                            isClearable
                            isSearchable
                            placeholder="Select..."
                            className="w-[260px]"
                            onChange={handleSelectInput}
                        />
                    </div>
                    <div className='flex flex-col text-xl max-w-fit gap-2'>
                        <label htmlFor="Citizenship">Citizenship</label>
                        <input type="text" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[260px]" name="citizenship" id="Citizenship" placeholder="Filipino" onChange={handleTextInput}/>
                    </div>
                    <div className='flex gap-16'>
                        <div className='flex flex-col text-xl max-w-fit gap-2'>
                            <label htmlFor="Height">Height</label>
                            <input type="text" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[150px]" name="height" id="Height" placeholder="150cm" onChange={handleTextInput}/>
                        </div>
                        <div className='flex flex-col text-xl max-w-fit gap-2'>
                            <label htmlFor="Weight">Weight</label>
                            <input type="text" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[150px]" name="weight" id="Weight" placeholder="50kg" onChange={handleTextInput}/>
                        </div>
                    </div>
                </div>
                <div className='flex gap-32'>
                    <div className='flex flex-col text-xl max-w-fit gap-2'>
                        <label htmlFor="Sex">Sex</label>
                        <div className="flex gap-8">
                            <div className="flex gap-2">
                                <input type="radio" name="sex" id="Male" value="Male" onChange={handleTextInput}/>
                                <label htmlFor="Male">Male</label>
                            </div>
                            <div className="flex gap-2">
                                <input type="radio" name='sex' id='Female' value='Female' onChange={handleTextInput}/>
                                <label htmlFor='Female'>Female</label>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col text-xl max-w-fit gap-2'>
                        <label htmlFor='Payment Frequency'>Payment Frequency</label>
                        <div className='flex gap-8'>
                            <div className='flex gap-2'>
                                <input type='radio' name='paymentFrequency' id='Monthly' value='Monthly'onChange={handleTextInput}/>
                                <label htmlFor='Monthly'>Monthly</label>
                            </div>
                            <div className='flex gap-2'>
                                <input type='radio' name='paymentFrequency' id='Quarterly' value='Quarterly' onChange={handleTextInput}/>
                                <label htmlFor='Quarterly'>Quarterly</label>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col text-xl max-w-fit gap-2'>
                        <label htmlFor='Prominent Distinguishing Marks'>Prominent Distinguishing Marks</label>
                        <input type='text' className='rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[350px]' name='prominentDistinguishingMarks' id='Prominent Distinguishing Marks' placeholder='Mole on left cheek' onChange={handleTextInput}/>
                    </div>
                </div>
                <div className='flex gap-12'>
                    <div className='flex flex-col text-lg max-w-fit gap-2'>
                        <label htmlFor='TIN'>TIN</label>
                        <input type='text' required className='rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[150px]' name='TIN' id='TIN' placeholder='000-000-000' onChange={handleTextInput}/>
                    </div>
                    <div className='flex flex-col text-lg max-w-fit gap-2'>
                        <label htmlFor='SSS/GSIS'>SSS/GSIS</label>
                        <input type='text' required className='rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[150px]' name='SSS' id='SSS' placeholder='00000000000' onChange={handleTextInput}/>
                    </div>
                    <div className='flex flex-col text-lg max-w-fit gap-2'>
                        <label htmlFor='Company Code'>Company Code</label>
                        <input type='text' required className='rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[150px]' name='companyCode' id='Company Code' placeholder='000000000000' onChange={handleTextInput}/>
                    </div>
                    <div className='flex flex-col text-lg max-w-fit gap-2'>
                        <label htmlFor='Serial/Badge No.'>Serial/Badge No. (Optional) </label>
                        <input type='text' className='rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[150px]' name='serialBadgeNo' id='Serial/Badge No.' placeholder='000000' onChange={handleTextInput}/>
                    </div>
                    <div className='flex flex-col text-lg max-w-fit gap-2'>
                        <label htmlFor='Division-Station Code'>Division-Station Code (Optional)</label>
                        <input type='text' className='rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[150px]' name='divisionStationCode' id='Division-Station Code' placeholder='000000' onChange={handleTextInput}/>
                    </div>
                </div>
                <div className='flex gap-20'>
                    <div className='flex flex-col text-xl max-w-fit gap-2'>
                        <label htmlFor="Father's Name">Father's Name</label>
                        <input type="text" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[260px]" name="fathersName" id="Father's Name" placeholder="Juan Dela Cruz" onChange={handleTextInput}/>
                    </div>
                    <div className='flex flex-col text-xl max-w-fit gap-2'>
                        <label htmlFor="Mother's Name">Mother's Name</label>
                        <input type="text" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[260px]" name="mothersName" id="Mother's Name" placeholder="Maria Dela Cruz" onChange={handleTextInput}/>
                    </div>
                    <div className='flex flex-col text-xl max-w-fit gap-2'>
                        <label htmlFor="Spouse's Name">Spouse's Name (If applicable)</label>
                        <input type="text" className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[260px]" name="spouseName" id="Spouse's Name" placeholder="Maria Dela Cruz" onChange={handleTextInput}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personal_form;