import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

function PrevEmployer({ emp, setShowModal }) {

    const [empFormData, setEmpFormData] = useState(emp);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmpFormData({ ...empFormData, [name]: value });
    }

    const handleUpdate = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/update-member', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                type: 'PrevEmployer',
                data: empFormData
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Employment record updated successfully!');
            setShowModal(false);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    const handleDelete = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/delete-member', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                type: 'PrevEmployer',
                id: empFormData.PrevCompCode || null,
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Employment record deleted successfully!');
            setShowModal(false);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <form>
            <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-5 shadow-lg h-[300px] w-fit rounded-lg overflow-y-auto">
                    <div className="flex justify-end">
                        <button onClick={() => setShowModal(false)}><FaTimes /></button>
                    </div>
                    <div>
                        <h1 className="text-[#2b2b2b] text-xl font-bold">Previous Employer</h1>
                        <div className="flex flex-col gap-4 text-md mt-6">
                            <div className="flex gap-10">
                                <div className="flex flex-col max-w-fit gap-2">
                                    <label htmlFor='Employer Name'>Employer Name</label>
                                    <input type='text' className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[200px]" name='PrevEmpName' value={empFormData.PrevEmpName} onChange={handleInputChange} />
                                </div>
                                <div className="flex flex-col max-w-fit gap-2">
                                    <label htmlFor='Employer Address'>Employer Address</label>
                                    <input type='text' className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[600px]" name='PrevEmpAddress' value={empFormData.PrevEmpAddress} onChange={handleInputChange} />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-6">
                            <button className="bg-[#2b2b2b] text-white px-10 py-2 rounded-lg" onClick={handleUpdate}>Update</button>
                            <button className="bg-[#2b2b2b] text-white px-10 py-2 rounded-lg ml-4" onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>

        </form>
    )
}

export default PrevEmployer;