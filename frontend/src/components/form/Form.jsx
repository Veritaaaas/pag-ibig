import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';
import { useState } from 'react';

import Member_form from './Member_form';

function Form() {
    
    const maritalStatusOptions = [
        { value: 'Single', label: 'Single' },
        { value: 'Married', label: 'Married' },
        { value: 'Widowed', label: 'Widowed' },
        { value: 'Legally Separated', label: 'Legally Separated' },
        { value: 'Annulled', label: 'Annulled' },
    ];

    return (
        <form action="">
            <div className="flex flex-col gap-10 mt-14 px-8">
                <Member_form />
                <div className='mt-'>
                    <h1 className="text-3xl font-semibold">Personal Details</h1>
                    
                </div>
            </div>
        </form>
    );
}

export default Form;