import { Link } from "react-router-dom";

import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { MdOutlinePersonAddAlt } from "react-icons/md";

function Header() {
    return (
        <div className="flex w-full justify-between pt-8 px-8 max-w-[82%]">
            <div className="flex text-black items-center gap-4">
                <input type="text" placeholder="Search" className="border-b-2 border-gray-300 p-2 font-semibold min-w-16 text-[17px]" />
                <HiMiniMagnifyingGlass className="text-[25px]" />
            </div>
            <Link to='/add-member'>
                <div className="flex items-center text-[#3564FD] gap-6 cursor-pointer">
                    <MdOutlinePersonAddAlt className="text-[40px]" />
                    <h1 className="text-[20px] font-bold">ADD MEMBER</h1>
                </div>
            </Link>
        </div>
    );
}

export default Header;