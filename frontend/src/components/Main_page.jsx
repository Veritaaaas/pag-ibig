import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";
import Form from "./form/Form";
import Members from "./Members";

function Main_page() {

    const location = useLocation();
    const [members, setMembers] = useState([]);

    const getMembers = async () => {
        console.log("getMembers");
        try {
            const response = await fetch("http://127.0.0.1:5000/members");
            const jsonData = await response.json();
            setMembers(jsonData);
            console.log(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        if (location.pathname === "/members") {
            getMembers();
        }
    }, [location.pathname]);

    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full">
                <Header />
                {location.pathname === "/members" && <Members members={members}/>}
                {location.pathname === "/add-member" && <Form />}
                {location.pathname === "/presentEmp" && <h1>Present Employees</h1>}
                {location.pathname === "/prevEmp" && <h1>Previous Employees</h1>}
                {location.pathname === "/heirs" && <h1>Heirs</h1>}
            </div>
        </div>
    );
}

export default Main_page;