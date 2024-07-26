import React, { useState } from 'react';

import Member_form from './Member_form';
import Personal_form from './Personal_form';
import Address_Contact_form from './Address_Contact_form';
import PresentEmpForm from './PresentEmpForm';
import PrevEmpForm from './PrevEmpForm';
import Heir_form from './Heir_form';

function Form() {

    const [memberFormData, setMemberFormData] = useState({
        pagIbigMID: '',
        occupationalStatus: '',
        membershipCategory: 'Mandatory',
        membershipSubCategory: ''
    });

    const [personalFormData, setPersonalFormData] = useState({
        fullName: '',
        birthDate: '',
        birthPlace: '',
        maritalStatus: '',
        citizenship: '',
        height: '',
        weight:'',
        sex: '',
        paymentFrequency: '',
        prominentDistinguishingMarks: '',
        TIN: '',
        SSS: '',
        companyCode: '',
        serialBadgeNo: '',
        divisionStationCode: '',
        fathersName: '',
        mothersName: '',
        spouseName: ''
    });

    const [addressContactFormData, setAddressContactFormData] = useState({});
    const [presentEmpFormData, setPresentEmpFormData] = useState({});
    const [prevEmpFormData, setPrevEmpFormData] = useState({});
    const [heirFormData, setHeirFormData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(addressContactFormData)
        console.log(presentEmpFormData)
       
        fetch('http://localhost:5000/add-member', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                memberFormData,
                personalFormData,
                addressContactFormData,
                presentEmpFormData,
                prevEmpFormData,
                heirFormData
            }),
        })
        .then(response => response.json())
        .then(data => {
            alert('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-10 mt-10 px-8 py-8">
                <Member_form 
                    memberFormData={memberFormData}
                    setMemberFormData={setMemberFormData}
                />
                <Personal_form
                    personalFormData={personalFormData}
                    setPersonalFormData={setPersonalFormData}
                />
                <Address_Contact_form
                    addressContactFormData={addressContactFormData}
                    setAddressContactFormData={setAddressContactFormData}
                />
                <PresentEmpForm 
                    presentEmpFormData={presentEmpFormData}
                    setPresentEmpFormData={setPresentEmpFormData}
                />
                <PrevEmpForm 
                    prevEmpFormData={prevEmpFormData}
                    setPrevEmpFormData={setPrevEmpFormData}
                />
                <Heir_form 
                    heirFormData={heirFormData}
                    setHeirFormData={setHeirFormData}
                />
                <div className="flex justify-center">
                    <button className="bg-[#2b2b2b] text-white px-10 py-2 rounded-lg">Submit</button>
                </div>
            </div>
        </form>
    );
}

export default Form;