import { useLocation, useParams, useMatch } from "react-router-dom";
import { useEffect, useState } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";
import Form from "./form/Form";
import Members from "./tables/Members";
import PresentEmp from "./tables/PresentEmp";
import PrevEmployment from "./tables/PrevEmployment";
import PrevEmployer from "./tables/PrevEmployer";
import Heirs from "./tables/Heirs";
import Result from "./Result";
import Shortcut from "./Shortcut";

function Main_page() {

    const { query } = useParams();
    const location = useLocation();
    const matchSearch = useMatch("/search/:query");

    const [members, setMembers] = useState([]);
    const [presentEmployer, setPresentEmployer] = useState([]);
    const [prevEmployment, setPrevEmployment] = useState([]);
    const [prevEmployer, setPrevEmployer] = useState([]);
    const [heirs, setHeirs] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

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

    const getPrevEmployment = async () => {
        try {
            const response = await fetch("http://127.0.0.1:5000/prevEmployment");
            const jsonData = await response.json();
            console.log(jsonData);
            setPrevEmployment(jsonData);
        }
        catch (err) {
            alert(err.message);
        }
    }

    const getPrevEmployer = async () => {
        try {
            const response = await fetch("http://127.0.0.1:5000/prevEmployer");
            const jsonData = await response.json();
            console.log(jsonData);
            setPrevEmployer(jsonData);
        }
        catch (err) {
            alert(err.message);
        }
    }

    const getHeirs = async () => {
        try {
            const response = await fetch("http://127.0.0.1:5000/heirs");
            const jsonData = await response.json();
            console.log(jsonData);
            setHeirs(jsonData);
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
        else if (location.pathname === "/prevEmployment") {
            getPrevEmployment();
        }
        else if (location.pathname === "/prevEmployer") {
            getPrevEmployer();
        }
        else if (location.pathname === "/heirs") {
            getHeirs();
        }

    }, [location.pathname]);

    useEffect(() => {
        if (query) {
            setSearchResult(query);
        }
    }, [query]);

    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full max-w-[80%]">
                <Header/>
                {location.pathname === "/members" && <Members members={members} setMembers={setMembers}/>}
                {location.pathname === "/add-member" && <Form />}
                {location.pathname === "/presentEmp" && <PresentEmp emp={presentEmployer} setEmp={setPresentEmployer}/>}
                {location.pathname === "/prevEmployment" && <PrevEmployment prevEmp={prevEmployment} setPrevEmp={setPrevEmployment} />}
                {location.pathname === "/prevEmployer" && <PrevEmployer prevEmp={prevEmployer} setPrevEmp={setPrevEmployer} />}
                {location.pathname === "/heirs" && <Heirs heirs={heirs} setHeirs={setHeirs} />}
                {location.pathname === "/shortcuts" && <Shortcut />}
                {matchSearch && <Result searchResult={searchResult} />}
            </div>
        </div>
    );
}

export default Main_page;