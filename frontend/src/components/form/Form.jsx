import CreatableSelect from 'react-select/creatable';
import { useState } from 'react';

import Member_form from './Member_form';
import Personal_form from './Personal_form';

function Form() {

    return (
        <form action="">
            <div className="flex flex-col gap-10 mt-14 px-8">
                <Member_form />
                <Personal_form />
            </div>
        </form>
    );
}

export default Form;