import { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import { MdOutlinePersonAddAlt } from 'react-icons/md';

function Header() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        if (searchTerm.trim()) {
            // Navigate to /search/:query, where :query is the user's input
            console.log(searchTerm);
            navigate(`/search/${encodeURIComponent(searchTerm.trim())}`);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="flex w-full justify-between pt-8 px-8">
            <div className="flex text-black items-center gap-4">
                <input
                    type="text"
                    placeholder="Search"
                    className="border-b-2 border-gray-300 p-2 font-semibold min-w-16 text-[17px]"
                    value={searchTerm}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
                <HiMiniMagnifyingGlass className="text-[25px] cursor-pointer" onClick={handleSearch}/>
            </div>
            <Link to='/add-member'>
                <div className={`flex items-center text-[#3564FD] gap-6 cursor-pointer p-2 rounded-xl ${location.pathname === '/add-member' ? 'active' : ''}`}>
                    <MdOutlinePersonAddAlt className="text-[40px]" />
                    <h1 className="text-[20px] font-bold">ADD MEMBER</h1>
                </div>
            </Link>
        </div>
    );
}

export default Header;