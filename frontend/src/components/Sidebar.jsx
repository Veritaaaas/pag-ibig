import { Link, useLocation } from "react-router-dom";

import { MdOutlinePeopleOutline } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { MdFaceUnlock } from "react-icons/md";
import { FaSuitcase } from "react-icons/fa6";

import Logo from '../assets/logo.png';

function Sidebar() {
    const location = useLocation();

    return (
        <div className="min-h-screen min-w-[20%] border-r-2 px-6 py-8">
            <div className='flex items-center justify-start gap-2'>
                <img src={Logo} alt="logo" className="w-12 h-12" />
                <h1 className='m-0 text-[20px] font-bold text-[#3564FD]'>Pag-Ibig Database</h1>
            </div>
            <div className="flex flex-col mt-16 gap-8">
                <Link to='/members'>
                    <div className={`flex items-center gap-16 p-4 rounded-xl ${location.pathname === '/members' ? 'active' : ''}`}>
                        <MdOutlinePeopleOutline className='text-[30px]' />
                        <h1 className="text-[16px] font-semibold">Members</h1>
                    </div>
                </Link>
                <Link to='/presentEmp'>
                    <div className={`flex items-center gap-16 p-4 rounded-xl ${location.pathname === '/presentEmp' ? 'active' : ''}`}>
                        <FaRegBuilding className='text-[30px]' />
                        <h1 className="text-[16px] font-semibold">Present Employers</h1>
                    </div>
                </Link>
                <Link to='/prevEmployment'>
                    <div className={`flex items-center gap-16 p-4 rounded-xl ${location.pathname === '/prevEmployment' ? 'active' : ''}`}>
                        <FaSuitcase className='text-[30px]' />
                        <h1 className="text-[16px] font-semibold">Previous Employments</h1>
                    </div>
                </Link>
                <Link to='/prevEmployer'>
                    <div className={`flex items-center gap-16 p-4 rounded-xl ${location.pathname === '/prevEmployer' ? 'active' : ''}`}>
                        <BsBuildings className='text-[30px]' />
                        <h1 className="text-[16px] font-semibold">Previous Employers</h1>
                    </div>
                </Link>
                <Link to='/heirs'>
                    <div className={`flex items-center gap-16 p-4 rounded-xl ${location.pathname === '/heirs' ? 'active' : ''}`}>
                        <MdFaceUnlock className='text-[30px]' />
                        <h1 className="text-[16px] font-semibold">Heirs</h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;