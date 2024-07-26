import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

function HeirModal({ heir, setShowModal }) {

    const [heirFormData, setHeirFormData] = useState(heir);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setHeirFormData({ ...heirFormData, [name]: value });
    }

    const handleUpdate = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/update-member', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                type: 'Heir',
                data: heirFormData
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Heir record updated successfully!');
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
                type: 'Heir',
                id: heirFormData.HeirID || null,
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Heir record deleted successfully!');
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
                        <h1 className="text-[#2b2b2b] text-xl font-bold">Heir</h1>
                        <div className="flex flex-col gap-8 text-md mt-6">
                            <div className="flex gap-16">
                                <div className="flex flex-col gap-4">
                                    <label>Heir Name</label>
                                    <input type="text" className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[260px]" name="HeirName" value={heirFormData.HeirName} onChange={handleInputChange} />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <label>Relation</label>
                                    <input type="text" className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[260px]" name="HeirRelationship" value={heirFormData.HeirRelationship} onChange={handleInputChange} />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <label>Birth Date</label>
                                    <input type="date" className="rounded-xl border-[#bcbcbc] border-[1px] p-2 w-[260px]" name="HeirBirthDate" value={heirFormData.HeirBirthDate} onChange={handleInputChange} />
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

export default HeirModal;