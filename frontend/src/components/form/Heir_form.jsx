import { useState, useEffect } from 'react';
import { IoIosAddCircle } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";

function Heir_form({ heirFormData, setHeirFormData }) {

    const initialHeir = {
        heirID: '',
        heirName: '',
        relationship: '',
        birth_date: '',
    };

    const [heirs, setHeirs] = useState([initialHeir]);

    const addHeir = () => {
        setHeirs([...heirs, initialHeir]);
    }

    const handleHeirChange = (index, event) => {
        const updatedHeirs = heirs.map((heir, i) => {
            if (i === index) {
                return { ...heir, [event.target.name]: event.target.value };
            }
            return heir;
        });
        setHeirs(updatedHeirs);
    }

    useEffect(() => {
        setHeirFormData(heirs);
    }, [heirs]);

    return (
        <div className="">
            <h1 className="text-3xl font-semibold">Heirs Details</h1>
            <div className="flex flex-col gap-8 px-6 mt-4 text-xl">
                {heirs.map((heir, index) => (
                    <div key={index} className="flex gap-32 text-lg">
                        <div className="flex flex-col text-lg max-w-fit gap-2">
                        <label htmlFor={`heirID-${index}`}>Heir ID</label>
                        <input type="text" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2" name="heirID" id={`heirID-${index}`} placeholder="H-1111" value={heir.heirID} onChange={(e) => handleHeirChange(index, e)}/>
                        </div>
                        <div className="flex flex-col text-lg max-w-fit gap-2">
                            <label htmlFor={`heirName-${index}`}>Heir Name</label>
                            <input type="text" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2" name="heirName" id={`heirName-${index}`} placeholder="Juan Dela Cruz" value={heir.heirName} onChange={(e) => handleHeirChange(index, e)}/>
                        </div>
                        <div className="flex flex-col max-w-fit gap-2">
                            <label htmlFor={`relationship-${index}`}>Relationship</label>
                            <input type="text" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2" name="relationship" id={`relationship-${index}`} placeholder="Father" value={heir.relationship} onChange={(e) => handleHeirChange(index, e)}/>
                        </div>
                        <div className='flex gap-16'>
                            <div className="flex flex-col max-w-fit gap-2">
                                <label htmlFor={`birth_date-${index}`}>Birth Date</label>
                                <input type="date" required className="rounded-xl border-[#bcbcbc] border-[1px] p-2" name="birth_date" id={`birth_date-${index}`} value={heir.birth_date} onChange={(e) => handleHeirChange(index, e)}/>
                            </div>
                            <div className="flex items-end pb-2">
                                <button type="button" className="bg-[#3564FD] text-white rounded-xl p-2 px-4" onClick={() => setHeirs(heirs.filter((_, i) => i !== index))}>
                                    <FaTrashAlt className="text-[20px]"/>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                <div>
                    <button type="button" className="flex items-center gap-2 bg-[#3564FD] text-white rounded-xl p-2 px-4" onClick={addHeir}>
                        <IoIosAddCircle className="text-[30px]"/>
                        <h1>Add Heir</h1>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Heir_form;