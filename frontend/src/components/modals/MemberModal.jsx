import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';

function MemberModal({ member, setShowModal }) {

    const [memberFormData, setMemberFormData] = useState(member);

    const mandatoryOptions = [
        { value: 'Private', label: 'Private' },
        { value: 'Government', label: 'Government' },
        { value: 'Private Household', label: 'Private Household' },
        { value: 'OFW', label: 'OFW' },
        { value: 'Business Owner', label: 'Business Owner' },
        { value: 'Job Order Personnel', label: 'Job Order Personnel' },
    ];

    const voluntaryOptions = [
        { value: 'Foreign Government', label: 'Foreign Government' },
        { value: 'Barangay Official', label: 'Barangay Official' },
        { value: 'Cooperative Member', label: 'Cooperative Member' },
        { value: 'Trade Union Member', label: 'Trade Union Member' },
        { value: 'Non-Working Spouse', label: 'Non-Working Spouse' },
        { value: 'Religious Group Member', label: 'Religious Group Member' },
        { value: 'Overseas Filipino Immigrant', label: 'Overseas Filipino Immigrant' },
        { value: 'Pensioner', label: 'Pensioner'},
        { value: 'Investor', label: 'Investor'},
        { value: 'Lessor', label: 'Lessor'}
    ];

    const maritalStatusOptions = [
        { value: 'Single', label: 'Single' },
        { value: 'Married', label: 'Married' },
        { value: 'Widowed', label: 'Widowed' },
        { value: 'Legally Separated', label: 'Legally Separated' },
        { value: 'Annulled', label: 'Annulled' },
    ];

    const allOptions = [...mandatoryOptions, ...voluntaryOptions];

    // Find the default option based on Membership_Subcategory
    const defaultOption = allOptions.find(option => option.value === memberFormData.Membership_subcategory);

    const defaultMaritalStatusOption = maritalStatusOptions.find(option => option.value === memberFormData.MaritalStatus);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMemberFormData({ ...memberFormData, [name]: value });
    }

    const handleSelectChange = (newValue) => {
        setMemberFormData({ ...memberFormData, Membership_subcategory: newValue ? newValue.value : '' });
    }

    const handleDelete = (e) => {
        e.preventDefault();
        console.log(memberFormData.PI_MID)
        
        fetch('http://localhost:5000/delete-member', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                PI_MID: memberFormData.PI_MID
            }),
        })
        .then(response => response.json())
        .then(data => {
            alert('Success Deletion');
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        setShowModal(false);
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(memberFormData);

        fetch('http://localhost:5000/update-member', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                memberFormData
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Success Update');
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
                        <h1 className="text-xl font-semibold">Membership Details</h1>
                        <div className="flex flex-col gap-4 text-md mt-6">
                            <div className="flex gap-10">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="occupationalStatus">Occupational Status</label>
                                    <div className="flex gap-4">
                                        <div className="flex gap-2">
                                            <input type="radio" name="Occupational_Status" id="Employed" value="Employed" onChange={handleInputChange} checked={memberFormData.Occupational_Status === 'Employed'}/>
                                            <label htmlFor="Employed">Employed</label>
                                        </div>
                                        <div className="flex gap-2">
                                            <input type="radio" name="Occupational_Status" id="Unemployed" value="Unemployed" onChange={handleInputChange} checked={memberFormData.Occupational_Status === 'Unemployed'}/>
                                            <label htmlFor="Unemployed">Unemployed</label>
                                        </div>
                                        <div className="flex gap-2">
                                            <input type="radio" name="Occupational_Status" id="First-time Job Seeker" value="First-time Job Seeker" onChange={handleInputChange} checked={memberFormData.Occupational_Status === 'First-time Job Seeker'}/>
                                            <label htmlFor="First-time Job Seeker">First-time Job Seeker</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="membershipCategory">Membership Category</label>
                                    <div className="flex gap-4">
                                        <div className="flex gap-2">
                                            <input type="radio" name="Membership_category" id="Mandatory" value="Mandatory" checked={memberFormData.Membership_category === 'Mandatory'} onChange={handleInputChange}/>
                                            <label htmlFor="Mandatory">Mandatory</label>
                                        </div>
                                        <div className="flex gap-2">
                                            <input type="radio" name="Membership_category" id="Voluntary" value="Voluntary" checked={memberFormData.Membership_category === 'Voluntary'} onChange={handleInputChange}/>
                                            <label htmlFor="Voluntary">Voluntary</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="Membership Sub-category">Membership Sub-category</label>
                                    <CreatableSelect
                                        options={memberFormData.Membership_category === 'Mandatory' ? mandatoryOptions : voluntaryOptions}
                                        isClearable
                                        isSearchable
                                        placeholder="Select or type..."
                                        onChange={handleSelectChange}
                                        defaultInputValue={defaultOption ? defaultOption.label : ''}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h1 className="text-xl font-semibold">Personal Information</h1>
                        <div className="flex flex-col gap-4 text-md mt-6">
                            <div className="flex gap-10">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="fullName">Full Name</label>
                                    <input type="text" required className="rounded-lg border-[#bcbcbc] border-[1px] p-2" name="Name" id="fullName" placeholder="Juan Dela Cruz" value={memberFormData.Name} onChange={handleInputChange}/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="birthDate">Date of Birth</label>
                                    <input type="date" required className="rounded-lg border-[#bcbcbc] border-[1px] p-2" name="BirthDate" id="birthDate" value={memberFormData.BirthDate} onChange={handleInputChange}/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="birthPlace">Place of Birth</label>
                                    <input type="text" required className="rounded-lg border-[#bcbcbc] border-[1px] p-2" name="BirthPlace" id="birthPlace" placeholder="Manila" value={memberFormData.BirthPlace} onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="maritalStatus">Marital Status</label>
                                    <Select
                                        options={maritalStatusOptions}
                                        isClearable
                                        isSearchable
                                        placeholder="Select..."
                                        className="w-[260px]"
                                        onChange={(newValue) => setMemberFormData({ ...memberFormData, MaritalStatus: newValue ? newValue.value : '' })}
                                        defaultInputValue={defaultMaritalStatusOption ? defaultMaritalStatusOption.label : ''}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="citizenship">Citizenship</label>
                                    <input type="text" required className="rounded-lg border-[#bcbcbc] border-[1px] p-2" name="Citizenship" id="citizenship" placeholder="Filipino" value={memberFormData.Citizenship} onChange={handleInputChange}/>
                                </div>
                                <div className="flex gap-8">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="height">Height</label>
                                        <input type="text" required className="rounded-lg border-[#bcbcbc] border-[1px] p-2" name="Height" id="height" placeholder="150cm" value={memberFormData.Height} onChange={handleInputChange}/>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="weight">Weight</label>
                                        <input type="text" required className="rounded-lg border-[#bcbcbc] border-[1px] p-2" name="Weight" id="weight" placeholder="50kg" value={memberFormData.Weight} onChange={handleInputChange}/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor='Sex'>Sex</label>
                                    <div className="flex gap-4">
                                        <div className="flex gap-2">
                                            <input type="radio" name="Sex" id="sex" value="Male" onChange={handleInputChange} checked={memberFormData.Sex === 'Male'} />
                                            <label htmlFor="Male">Male</label>
                                        </div>
                                        <div className="flex gap-2">
                                            <input type="radio" name="Sex" id="sex" value="Female" onChange={handleInputChange} checked={memberFormData.Sex === 'Female'} />
                                            <label htmlFor="Male">Female</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="PaymentFrequency">Payment Frequency</label>
                                    <div className="flex gap-4">
                                        <div className="flex gap-2">
                                            <input type="radio" name="PaymentFrequency" id="Monthly" value="Monthly" onChange={handleInputChange} checked={memberFormData.PaymentFrequency === 'Monthly'}/>
                                            <label htmlFor="Monthly">Monthly</label>
                                        </div>
                                        <div className="flex gap-2">
                                            <input type="radio" name="PaymentFrequency" id="Quarterly" value="Quarterly" onChange={handleInputChange} checked={memberFormData.PaymentFrequency === 'Quarterly'}/>
                                            <label htmlFor="Quarterly">Quarterly</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="prominentDistinguishingMarks">Prominent Distinguishing Marks</label>
                                    <input type="text" className="rounded-lg border-[#bcbcbc] border-[1px] p-2" name="ProminentFeatures" id="prominentDistinguishingMarks" placeholder="Tattoo on left arm" value={memberFormData.ProminentFeatures} onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="TIN">TIN</label>
                                    <input type="text" required className="rounded-lg border-[#bcbcbc] border-[1px] p-2" name="TIN" id="TIN" placeholder="000-000-000" value={memberFormData.TIN} onChange={handleInputChange}/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="SSS">SSS</label>
                                    <input type="text" required className="rounded-lg border-[#bcbcbc] border-[1px] p-2" name="SSS" id="SSS" placeholder="000-000-000" value={memberFormData.SSS} onChange={handleInputChange}/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="companyCode">Company Code</label>
                                    <input type="text" required className="rounded-lg border-[#bcbcbc] border-[1px] p-2" name="CompanyCode" id="companyCode" placeholder="000000" value={memberFormData.CompanyCode} onChange={handleInputChange}/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="serialBadgeNo">Serial Badge No.</label>
                                    <input type="text" className="rounded-lg border-[#bcbcbc] border-[1px] p-2" name="SerialBadge" id="serialBadgeNo" placeholder="000000" value={memberFormData.SerialBadge} onChange={handleInputChange}/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="divisionStationCode">Division/Station Code</label>
                                    <input type="text" className="rounded-lg border-[#bcbcbc] border-[1px] p-2" name="DivStationCode" id="divisionStationCode" placeholder="000000" value={memberFormData.DivStationCode} onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="fathersName">Father's Name</label>
                                    <input type="text" required className="rounded-lg border-[#bcbcbc] border-[1px] p-2" name="FatherName" id="fathersName" placeholder="Juan Dela Cruz" value={memberFormData.FatherName} onChange={handleInputChange}/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="mothersName">Mother's Name</label>
                                    <input type="text" required className="rounded-lg border-[#bcbcbc] border-[1px] p-2" name="MotherName" id="mothersName" placeholder="Maria Dela Cruz" value={memberFormData.MotherName} onChange={handleInputChange}/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="spouseName">Spouse's Name</label>
                                    <input type="text" className="rounded-lg border-[#bcbcbc] border-[1px] p-2" name="SpouseName" id="SpouseName" placeholder="Maria Dela Cruz" value={memberFormData.SpouseName} onChange={handleInputChange}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h1 className="text-xl font-semibold">Address and Contact Information</h1>
                        <div className="flex flex-col gap-4 text-md mt-6">
                            <div className="flex gap-10">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="permanentAddress">Permanent Address</label>
                                    <input type="text" required className="rounded-lg border-[#bcbcbc] border-[1px] p-2" name="PernAddress" id="permanentAddress" placeholder="123 Street, Barangay, City" value={memberFormData.PernAddress} onChange={handleInputChange}/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="currentAddress">Current Address</label>
                                    <input type="text" required className="rounded-lg border-[#bcbcbc] border-[1px] p-2" name="CurrAddress" id="currentAddress" placeholder="123 Street, Barangay, City" value={memberFormData.CurrAddress} onChange={handleInputChange}/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="mailAddress">Preferred Mail Address</label>
                                    <div className="flex gap-8">
                                        <div className="flex gap-2">
                                            <input type="radio" name="MailAddress" id="Permanent Address" value="Present Home Address" onChange={handleInputChange} checked={memberFormData.MailAddress === 'Present Home Address'}/>
                                            <label htmlFor="Permanent Address">Present Home Address</label>
                                        </div>
                                        <div className="flex gap-2">
                                            <input type="radio" name="MailAddress" id="Current Address" value="Permanent Home Address" onChange={handleInputChange} checked={memberFormData.MailAddress === 'Permanent Home Address'}/>
                                            <label htmlFor="Current Address">Permanent Home Address</label>
                                        </div>
                                        <div className="flex gap-2">
                                            <input type='radio' name="MailAddress" id='Employer/Business Address' value='Employer/Business Address' onChange={handleInputChange} checked={memberFormData.MailAddress === 'Employer/Business Address'}/>
                                            <label htmlFor='Employer/Business Address'>Employer/Business Address</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="homeCode">Home Code</label>
                                    <input type="text" className="rounded-lg border-[#bcbcbc] border-[1px] p-2" name="HomeCode" id="homeCode" placeholder="123" value={memberFormData.HomeCode} onChange={handleInputChange}/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="cellNum">Mobile Number</label>
                                    <input type="text" required className="rounded-lg border-[#bcbcbc] border-[1px] p-2" name="CellNum" id="cellNum" placeholder="09123456789" value={memberFormData.CellNum} onChange={handleInputChange}/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="businessDirectLine">Business Direct Line</label>
                                    <input type="text" className="rounded-lg border-[#bcbcbc] border-[1px] p-2" name="BusinessDirectLine" id="businessDirectLine" placeholder="123" value={memberFormData.BusinessDirectLine} onChange={handleInputChange}/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="businessTrunkLine">Business Trunk Line</label>
                                    <input type="text" className="rounded-lg border-[#bcbcbc] border-[1px] p-2" name="BusinessTrunkLine" id="businessTrunkLine" placeholder="123" value={memberFormData.BusinessTrunkLine} onChange={handleInputChange}/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="emailAddress">Email Address</label>
                                    <input type="email" required className="rounded-lg border-[#bcbcbc] border-[1px] p-2" name="EmailAddress" id="emailAddress" placeholder="jaun@gmai.com" value={memberFormData.EmailAddress} onChange={handleInputChange}/>
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

export default MemberModal