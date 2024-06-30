import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";
import Form from "./form/Form";

function Main_page() {

    const location = useLocation();

    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full">
                <Header />
                {location.pathname === "/members" && <h1>Members</h1>}
                {location.pathname === "/add-member" && <Form />}
                {location.pathname === "/presentEmp" && <h1>Present Employees</h1>}
                {location.pathname === "/prevEmp" && <h1>Previous Employees</h1>}
                {location.pathname === "/heirs" && <h1>Heirs</h1>}
            </div>
        </div>
    );
}

export default Main_page;