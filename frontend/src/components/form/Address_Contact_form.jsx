
function Address_Contact_form({ addressContactFormData, setAddressContactFormData }) {

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddressContactFormData({ ...addressContactFormData, [name]: value });
    }

    return (
        <div>
            <h1 className="text-3xl font-semibold">Address and Contact Details</h1>
            <div className="flex flex-col gap-8 px-6 mt-4 text-xl">
                <div className="flex gap-16">
                    <div className='flex flex-col max-w-fit gap-2'>
                        <label htmlFor='Permanent Address'>Permanent Address</label>
                        <input type="text" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[260px]" name="permAddress" id="Permanent Address" placeholder="123 Street, Barangay, City" onChange={handleInputChange}/>
                    </div>
                    <div className='flex flex-col max-w-fit gap-2'>
                        <label htmlFor='Current Address'>Current Address</label>
                        <input type="text" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[260px]" name="currAddress" id="Current Address" placeholder="123 Street, Barangay, City" onChange={handleInputChange}/>
                    </div>
                    <div className='flex flex-col max-w-fit gap-2'>
                        <label htmlFor='mailAddress'>Preferred Mail Address</label>
                        <div className="flex gap-8">
                            <div className="flex gap-2">
                                <input type="radio" name="mailAddress" id="Permanent Address" value="Permanent Address" onChange={handleInputChange}/>
                                <label htmlFor="Permanent Address">Permanent Address</label>
                            </div>
                            <div className="flex gap-2">
                                <input type="radio" name="mailAddress" id="Current Address" value="Current Address" onChange={handleInputChange}/>
                                <label htmlFor="Current Address">Current Address</label>
                            </div>
                            <div className="flex gap-2">
                                <input type='radio' name="mailAddress" id='Employer/Business Address' value='Employer/Business Address' onChange={handleInputChange}/>
                                <label htmlFor='Employer/Business Address'>Employer/Business Address</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-14">
                    <div className='flex flex-col max-w-fit gap-2'>
                        <label htmlFor='Home Code'>Home Code</label>
                        <input type="text" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[150px]" name="homeCode" id="Home Code" placeholder="123" onChange={handleInputChange}/>
                    </div>
                    <div className='flex flex-col max-w-fit gap-2'>
                        <label htmlFor='Mobile Number'>Mobile Number</label>
                        <input type="text" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[150px]" name="cellNum" id="Mobile Number" placeholder="09123456789" onChange={handleInputChange}/>
                    </div>
                    <div className='flex flex-col max-w-fit gap-2'>
                        <label htmlFor='Business Direct Line'>Business Direct Line</label>
                        <input type="text" className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[150px]" name="businessDirectLine" id="Business Direct Line" placeholder="123" onChange={handleInputChange}/>
                    </div>
                    <div className='flex flex-col max-w-fit gap-2'>
                        <label htmlFor='Business Trunk Line'>Business Trunk Line</label>
                        <input type="text" className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[150px]" name="businessTrunkLine" id="Business Trunk Line" placeholder="123" onChange={handleInputChange}/>
                    </div>
                    <div className='flex flex-col max-w-fit gap-2'>
                        <label htmlFor='Email Address'>Email Address</label>
                        <input type="email" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[260px]" name="emailAddress" id="Email Address" placeholder="juan@gmai.com" onChange={handleInputChange}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Address_Contact_form;