import { MdOutlinePeopleOutline } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { MdFaceUnlock } from "react-icons/md";

import Logo from '../assets/logo.png';

function Sidebar() {

    return (
        <div className="min-h-screen min-w-[15%] border-r-2 px-6 py-8">
            <div className='flex items-center justify-start gap-2'>
                <img src={Logo} alt="logo" className="w-12 h-12" />
                <h1 className='m-0 text-[20px] font-bold text-[#3564FD]'>Pag-Ibig Database</h1>
            </div>
            <div className="flex flex-col mt-16 gap-8">
                <div className="flex items-center gap-16">
                    <MdOutlinePeopleOutline className='text-[30px]' />
                    <h1 className="text-[16px] font-semibold">Employee</h1>
                </div>
                <div className="flex items-center gap-16">
                    <FaRegBuilding className='text-[30px]' />
                    <h1 className="text-[16px] font-semibold">Present Employers</h1>
                </div>
                <div className="flex items-center gap-16">
                    <BsBuildings className='text-[30px]' />
                    <h1 className="text-[16px] font-semibold">Previous Employers</h1>
                </div>
                <div className="flex items-center gap-16">
                    <MdFaceUnlock className='text-[30px]' />
                    <h1 className="text-[16px] font-semibold">Heirs</h1>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;