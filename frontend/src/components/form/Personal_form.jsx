import Select from 'react-select';

function Personal_form() {

    const maritalStatusOptions = [
        { value: 'Single', label: 'Single' },
        { value: 'Married', label: 'Married' },
        { value: 'Widowed', label: 'Widowed' },
        { value: 'Legally Separated', label: 'Legally Separated' },
        { value: 'Annulled', label: 'Annulled' },
    ];

    return (
        <div className=''>
            <h1 className="text-3xl font-semibold">Personal Details</h1>
            <div className="flex flex-col gap-8 px-6 mt-4 text-xl">
                <div className='flex gap-32'>
                    <div className='flex flex-col text-xl max-w-fit gap-2'>
                        <label htmlFor="Full Name">Full Name</label>
                        <input type="text" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[350px]" name="Full Name" id="Full Name" placeholder="Juan Dela Cruz"/>
                    </div>
                    <div className='flex flex-col text-xl max-w-fit gap-2'>
                        <label htmlFor="Date of Birth">Date of Birth</label>
                        <input type="date" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[350px]" name="Date of Birth" id="Date of Birth"/>
                    </div>
                    <div className='flex flex-col text-xl max-w-fit gap-2'>
                        <label htmlFor="Place of Birth">Place of Birth</label>
                        <input type="text" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[350px]" name="Place of Birth" id="Place of Birth" placeholder="Manila"/>
                    </div>
                </div>
                <div className='flex gap-32'>
                    <div className='flex flex-col text-xl max-w-fit gap-2'>
                        <label htmlFor='Marital Status'>Marital Status</label>
                        <Select
                            options={maritalStatusOptions}
                            isClearable
                            isSearchable
                            placeholder="Select..."
                            className="w-[350px]"
                        />
                    </div>
                    <div className='flex flex-col text-xl max-w-fit gap-2'>
                        <label htmlFor="Citizenship">Citizenship</label>
                        <input type="text" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[350px]" name="Citizenship" id="Citizenship" placeholder="Filipino"/>
                    </div>
                    <div className='flex gap-16'>
                        <div className='flex flex-col text-xl max-w-fit gap-2'>
                            <label htmlFor="Height">Height</label>
                            <input type="text" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[150px]" name="Height" id="Height" placeholder="150cm"/>
                        </div>
                        <div className='flex flex-col text-xl max-w-fit gap-2'>
                            <label htmlFor="Weight">Weight</label>
                            <input type="text" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[150px]" name="Weight" id="Weight" placeholder="50kg"/>
                        </div>
                    </div>
                </div>
                <div className='flex gap-32'>
                    <div className='flex flex-col text-xl max-w-fit gap-2'>
                        <label htmlFor="Sex">Sex</label>
                        <div className="flex gap-8">
                            <div className="flex gap-2">
                                <input type="radio" name="Sex" id="Male" value="Male" />
                                <label htmlFor="Male">Male</label>
                            </div>
                            <div className="flex gap-2">
                                <input type="radio" name='Sex' id='Female' value='Female' />
                                <label htmlFor='Female'>Female</label>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col text-xl max-w-fit gap-2'>
                        <label htmlFor='Payment Frequency'>Payment Frequency</label>
                        <div className='flex gap-8'>
                            <div className='flex gap-2'>
                                <input type='radio' name='Payment Frequency' id='Monthly' value='Monthly'/>
                                <label htmlFor='Monthly'>Monthly</label>
                            </div>
                            <div className='flex gap-2'>
                                <input type='radio' name='Payment Frequency' id='Quarterly' value='Quarterly'/>
                                <label htmlFor='Quarterly'>Quarterly</label>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col text-xl max-w-fit gap-2'>
                        <label htmlFor='Prominent Distinguishing Marks'>Prominent Distinguishing Marks</label>
                        <input type='text' className='rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[350px]' name='Prominent Distinguishing Marks' id='Prominent Distinguishing Marks' placeholder='Mole on left cheek'/>
                    </div>
                </div>
                <div className='flex gap-24'>
                    <div className='flex flex-col text-xl max-w-fit gap-2'>
                        <label htmlFor='TIN'>TIN</label>
                        <input type='text' required className='rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[150px]' name='TIN' id='TIN' placeholder='000-000-000'/>
                    </div>
                    <div className='flex flex-col text-xl max-w-fit gap-2'>
                        <label htmlFor='SSS/GSIS'>SSS/GSIS</label>
                        <input type='text' required className='rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[150px]' name='SSS' id='SSS' placeholder='00000000000'/>
                    </div>
                    <div className='flex flex-col text-xl max-w-fit gap-2'>
                        <label htmlFor='Company Code'>Company Code</label>
                        <input type='text' required className='rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[150px]' name='Company Code' id='Company Code' placeholder='000000000000'/>
                    </div>
                    <div className='flex flex-col text-xl max-w-fit gap-2'>
                        <label htmlFor='Serial/Badge No.'>Serial/Badge No. (If applicable) </label>
                        <input type='text' className='rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[150px]' name='Serial/Badge No.' id='Serial/Badge No.' placeholder='000000'/>
                    </div>
                    <div className='flex flex-col text-xl max-w-fit gap-2'>
                        <label htmlFor='Division-Station Code'>Division-Station Code (If applicable)</label>
                        <input type='text' className='rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[150px]' name='Division-Station Code' id='Division-Station Code' placeholder='000000'/>
                    </div>
                </div>
                <div className='flex gap-32'>
                    <div className='flex flex-col text-xl max-w-fit gap-2'>
                        <label htmlFor="Father's Name">Father's Name</label>
                        <input type="text" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[350px]" name="Father's Name" id="Father's Name" placeholder="Juan Dela Cruz"/>
                    </div>
                    <div className='flex flex-col text-xl max-w-fit gap-2'>
                        <label htmlFor="Mother's Name">Mother's Name</label>
                        <input type="text" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[350px]" name="Mother's Name" id="Mother's Name" placeholder="Maria Dela Cruz"/>
                    </div>
                    <div className='flex flex-col text-xl max-w-fit gap-2'>
                        <label htmlFor="Spouse's Name">Spouse's Name (If applicable)</label>
                        <input type="text" className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[350px]" name="Spouse's Name" id="Spouse's Name" placeholder="Maria Dela Cruz"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personal_form;