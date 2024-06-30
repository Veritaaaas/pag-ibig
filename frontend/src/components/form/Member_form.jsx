import CreatableSelect from 'react-select/creatable';
import { useState } from 'react';

function Member_form() {
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

    const [membershipCategory, setMembershipCategory] = useState('Mandatory'); 

    const customFilterOption = (option, rawInput) => {
        const words = rawInput.split(' ');
        return words.reduce(
          (acc, cur) => acc && option.label.toLowerCase().includes(cur.toLowerCase()),
          true,
        );
    };

    const handleMembershipChange = (event) => {
        setMembershipCategory(event.target.value);
    };

    return (
        <div className="">
            <h1 className="text-3xl font-semibold">Membership Details</h1>
            <div className="flex flex-col gap-8 px-6 mt-4 text-xl">
                <div className="flex gap-[400px]">
                    <div className="flex flex-col text-xl max-w-fit gap-2">
                        <label htmlFor="Pag-ibig MID">Pag-ibig MID</label>
                        <input type="text" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2" name="Pag-ibig MID" id="Pag-ibig MID" placeholder="00000000"/>
                    </div>
                    <div className="flex flex-col max-w-fit gap-2">
                        <h1>Occupational Status</h1>
                        <div className="flex gap-8">
                            <div className="flex gap-2">
                                <input type="radio" name="Occupational Status" id="Employed" value="Employed"/>
                                <label htmlFor="Employed">Employed</label>
                            </div>
                            <div className="flex gap-2">
                                <input type="radio" name="Occupational Status" id="Unemployed" value="Unemployed"/>
                                <label htmlFor="Unemployed">Unemployed</label>
                            </div>
                            <div className="flex gap-2">
                                <input type="radio" name="Occupational Status" id="First-time Job Seeker" value="First-time Job Seeker"/>
                                <label htmlFor="First-time Job Seeker">First-time Job Seeker</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-[400px]">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="Membership Category">Membership Category</label>
                        <div className="flex gap-8">
                            <div className="flex gap-2">
                                <input type="radio" name="Membership Category" id="Mandatory" value="Mandatory" checked={membershipCategory === 'Mandatory'} onChange={handleMembershipChange}/>
                                <label htmlFor="Mandatory">Mandatory</label>
                            </div>
                            <div className="flex gap-2">
                                <input type="radio" name="Membership Category" id="Voluntary" value="Voluntary" checked={membershipCategory === 'Voluntary'} onChange={handleMembershipChange}/>
                                <label htmlFor="Voluntary">Voluntary</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="Membership Sub-category">Membership Sub-category</label>
                        <CreatableSelect
                            options={membershipCategory === 'Mandatory' ? mandatoryOptions : voluntaryOptions}
                            isClearable
                            isSearchable
                            filterOption={customFilterOption}
                            placeholder="Select or type..."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Member_form;