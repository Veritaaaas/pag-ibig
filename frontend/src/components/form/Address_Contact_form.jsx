
function Address_Contact_form() {

    return (
        <div>
            <h1 className="text-3xl font-semibold">Address and Contact Details</h1>
            <div className="flex flex-col gap-8 px-6 mt-4 text-xl">
                <div className="flex gap-32">
                    <div className='flex flex-col max-w-fit gap-2'>
                        <label htmlFor='Permanent Address'>Permanent Address</label>
                        <input type="text" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[350px]" name="Permanent Address" id="Permanent Address" placeholder="123 Street, Barangay, City"/>
                    </div>
                    <div className='flex flex-col max-w-fit gap-2'>
                        <label htmlFor='Current Address'>Current Address</label>
                        <input type="text" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[350px]" name="Current Address" id="Current Address" placeholder="123 Street, Barangay, City"/>
                    </div>
                    <div className='flex flex-col max-w-fit gap-2'>
                        <label htmlFor='Preferred Mail Address'>Preferred Mail Address</label>
                        <div className="flex gap-8">
                            <div className="flex gap-2">
                                <input type="radio" name="Preferred Mail Address" id="Permanent Address" value="Permanent Address"/>
                                <label htmlFor="Permanent Address">Permanent Address</label>
                            </div>
                            <div className="flex gap-2">
                                <input type="radio" name="Preferred Mail Address" id="Current Address" value="Current Address"/>
                                <label htmlFor="Current Address">Current Address</label>
                            </div>
                            <div className="flex gap-2">
                                <input type='radio' name='Preferred Mail Address' id='Employer/Business Address' value='Employer/Business Address'/>
                                <label htmlFor='Employer/Business Address'>Employer/Business Address</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-24">
                    <div className='flex flex-col max-w-fit gap-2'>
                        <label htmlFor='Home Code'>Home Code</label>
                        <input type="text" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[180px]" name="Home Code" id="Home Code" placeholder="123"/>
                    </div>
                    <div className='flex flex-col max-w-fit gap-2'>
                        <label htmlFor='Mobile Number'>Mobile Number</label>
                        <input type="text" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[180px]" name="Mobile Number" id="Mobile Number" placeholder="09123456789"/>
                    </div>
                    <div className='flex flex-col max-w-fit gap-2'>
                        <label htmlFor='Business Direct Line'>Business Direct Line</label>
                        <input type="text" className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[180px]" name="Business Direct Line" id="Business Direct Line" placeholder="123"/>
                    </div>
                    <div className='flex flex-col max-w-fit gap-2'>
                        <label htmlFor='Business Trunk Line'>Business Trunk Line</label>
                        <input type="text" className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[180px]" name="Business Trunk Line" id="Business Trunk Line" placeholder="123"/>
                    </div>
                    <div className='flex flex-col max-w-fit gap-2'>
                        <label htmlFor='Email Address'>Email Address</label>
                        <input type="email" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[320px]" name="Email Address" id="Email Address" placeholder="juan@gmai.com"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Address_Contact_form;