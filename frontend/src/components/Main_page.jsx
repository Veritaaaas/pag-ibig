import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";
import Form from "./form/Form";
import Members from "./Members";
import PresentEmp from "./PresentEmp";
import PrevEmp from "./PrevEmp";

function Main_page() {

    const location = useLocation();
    const [members, setMembers] = useState([]);
    const [presentEmployer, setPresentEmployer] = useState([]);
    const [prevEmployer, setPrevEmployer] = useState([]);

    const getMembers = async () => {
        try {
            const response = await fetch("http://127.0.0.1:5000/members");
            const jsonData = await response.json();
            setMembers(jsonData);
            console.log(jsonData);
        } catch (err) {
            alert(err.message);
        }
    }

    const getPresentEmployer = async () => {
        try {
            const response = await fetch("http://127.0.0.1:5000/presentEmp");
            const jsonData = await response.json();
            console.log(jsonData);
            setPresentEmployer(jsonData);
        } catch (err) {
            alert(err.message);
        }
    }

    const getPrevEmployer = async () => {
        try {
            const response = await fetch("http://127.0.0.1:5000/prevEmp");
            const jsonData = await response.json();
            console.log(jsonData);
            setPrevEmployer(jsonData);
        }
        catch (err) {
            alert(err.message);
        }
    }


    useEffect(() => {
        if (location.pathname === "/members") {
            getMembers();
        }
        else if (location.pathname === "/presentEmp") {
            getPresentEmployer();
        }
        else if (location.pathname === "/prevEmp") {
            getPrevEmployer();
        }
    }, [location.pathname]);

    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full">
                <Header />
                {location.pathname === "/members" && <Members members={members}/>}
                {location.pathname === "/add-member" && <Form />}
                {location.pathname === "/presentEmp" && <PresentEmp emp={presentEmployer} />}
                {location.pathname === "/prevEmp" && <PrevEmp prevEmp={prevEmployer} />}
                {location.pathname === "/heirs" && <h1>Heirs</h1>}
            </div>
        </div>
    );
}

export default Main_page;