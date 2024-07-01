

import Member_form from './Member_form';
import Personal_form from './Personal_form';
import Address_Contact_form from './Address_Contact_form';
import PresentEmpForm from './PresentEmpForm';
import PrevEmpForm from './PrevEmpForm';
import Heir_form from './Heir_form';

function Form() {



    return (
        <form action="">
            <div className="flex flex-col gap-10 mt-10 px-8 py-8">
                <Member_form />
                <Personal_form />
                <Address_Contact_form />
                <PresentEmpForm />
                <PrevEmpForm />
                <Heir_form />
            </div>
        </form>
    );
}

export default Form;