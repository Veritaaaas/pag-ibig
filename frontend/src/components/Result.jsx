import React, { useState, useEffect } from 'react';


function Result({ searchResult }) {

    const [member, setMember] = useState([]);
    const [emp, setEmp] = useState([]);
    const [prevemployment, setPrevEmployment] = useState([]);
    const [prevemployer, setPrevEmployer] = useState([]);
    const [heirs, setHeirs] = useState([]);

    const search = async(searchResult) => {
        try {
            const response = await fetch(`http://127.0.0.1:5000/search/${searchResult}`);
            const jsonData = await response.json();
            setMember(jsonData.member);
            setEmp(jsonData.emp);
            setPrevEmployment(jsonData.prevemployment);
            console.log(jsonData.prevemployment)
            setPrevEmployer(jsonData.prevemployer);
            console.log(jsonData.prevemployer)
            setHeirs(jsonData.heirs);
        }
        catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        search(searchResult);
    }, [searchResult]);

    return (
        <div className="mt-12 px-8 w-full">
            <h1 className="text-[#2b2b2b] text-3xl font-bold">Search Result</h1>
            <div className="px-8">
                <div className="mt-12 overflow-x-auto">
                    <h1 className="text-[#2b2b2b] text-xl font-bold">Members Table</h1>
                    <table className="text-[#636363] w-full">
                        <thead className="text-[#2b2b2b] text-[18px]">
                            <tr className="border-b-4 border-gray-200">
                                <th className="px-10 py-2">PI_MID</th>
                                <th className="px-10 py-2">Occupational Status</th>
                                <th className="px-10 py-2">Membership Category</th>
                                <th className="px-10 py-2">Membership Subcategory</th>
                                <th className="px-10 py-2">Name</th>
                                <th className="px-10 py-2">Father's Name</th>
                                <th className="px-10 py-2">Mother's Name</th>
                                <th className="px-10 py-2">Spouse's Name</th>
                                <th className="px-10 py-2">Birth Date</th>
                                <th className="px-10 py-2">Birth Place</th>
                                <th className="px-10 py-2">Marital Status</th>
                                <th className="px-10 py-2">Citizenship</th>
                                <th className="px-10 py-2">Sex</th>
                                <th className="px-10 py-2">Height</th>
                                <th className="px-10 py-2">Weight</th>
                                <th className="px-10 py-2">Prominent Features</th>
                                <th className="px-10 py-2">Payment Frequency</th>
                                <th className="px-10 py-2">TIN</th>
                                <th className="px-10 py-2">SSS</th>
                                <th className="px-10 py-2">Serial Badge</th>
                                <th className="px-10 py-2">Div Station Code</th>
                                <th className="px-10 py-2">Permanent Address</th>
                                <th className="px-10 py-2">Current Address</th>
                                <th className="px-10 py-2">Mailing Address</th>
                                <th className="px-10 py-2">Home Code</th>
                                <th className="px-10 py-2">Cellphone Number</th>
                                <th className="px-10 py-2">Business Direct Line</th>
                                <th className="px-10 py-2">Business Trunk Line</th>
                                <th className="px-10 py-2">Email Address</th>
                                <th className="px-10 py-2">Company Code</th>
                            </tr>
                        </thead>
                        <tbody className="text-[18px] text-[#636363] font-semibold text-center">
                            {member.length > 0 && (
                                <tr className="border-b-2 border-gray-200">
                                    <td className="px-10 py-2">{member[0].PI_MID}</td>
                                    <td className="px-10 py-2">{member[0].Occupational_Status}</td>
                                    <td className="px-10 py-2">{member[0].Membership_category}</td>
                                    <td className="px-10 py-2">{member[0].Membership_subcategory}</td>
                                    <td className="px-10 py-2 whitespace-nowrap">{member[0].Name}</td>
                                    <td className="px-10 py-2 whitespace-nowrap">{member[0].FatherName}</td>
                                    <td className="px-10 py-2 whitespace-nowrap">{member[0].MotherName}</td>
                                    <td className="px-10 py-2">{member[0].SpouseName}</td>
                                    <td className="px-10 py-2 whitespace-nowrap">{member[0].BirthDate}</td>
                                    <td className="px-10 py-2 whitespace-nowrap">{member[0].BirthPlace}</td>
                                    <td className="px-10 py-2">{member[0].MaritalStatus}</td>
                                    <td className="px-10 py-2">{member[0].Citizenship}</td>
                                    <td className="px-10 py-2">{member[0].Sex}</td>
                                    <td className="px-10 py-2">{member[0].Height}</td>
                                    <td className="px-10 py-2">{member[0].Weight}</td>
                                    <td className="px-10 py-2">{member[0].ProminentFeatures}</td>
                                    <td className="px-10 py-2">{member[0].PaymentFrequency}</td>
                                    <td className="px-10 py-2">{member[0].TIN}</td>
                                    <td className="px-10 py-2">{member[0].SSS}</td>
                                    <td className="px-10 py-2">{member[0].SerialBadge}</td>
                                    <td className="px-10 py-2 whitespace-nowrap">{member[0].DivStationCode}</td>
                                    <td className="px-10 py-2 whitespace-nowrap">{member[0].PernAddress}</td>
                                    <td className="px-10 py-2 whitespace-nowrap">{member[0].CurrAddress}</td>
                                    <td className="px-10 py-2 whitespace-nowrap">{member[0].MailAddress}</td>
                                    <td className="px-10 py-2 whitespace-nowrap">{member[0].HomeCode}</td>
                                    <td className="px-10 py-2 whitespace-nowrap">{member[0].CellNum}</td>
                                    <td className="px-10 py-2 whitespace-nowrap">{member[0].BusinessDirectLine}</td>
                                    <td className="px-10 py-2 whitespace-nowrap">{member[0].BusinessTrunkLine}</td>
                                    <td className="px-10 py-2">{member[0].EmailAddress}</td>
                                    <td className="px-10 py-2 whitespace-nowrap">{member[0].CompanyCode}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="mt-12 overflow-x-auto">
                    <h1 className="text-[#2b2b2b] text-xl font-bold">Present Employment Table</h1>
                    <table className="text-[#636363] w-full mt-4">
                        <thead className="text-[#2b2b2b] text-[18px]">
                            <tr className="border-b-4 border-gray-200">
                                <th>Company Code</th>
                                <th>Occupation</th>
                                <th>PresentEmpStatus</th>
                                <th>Type of Work(OFW)</th>
                                <th>Employer's Name</th>
                                <th>Employer's Address</th>
                                <th>Monthly Income</th>
                                <th>Office Assignment</th>
                                <th>Hire Date</th>
                            </tr>
                        </thead>
                        <tbody className="text-[18px] text-[#636363] font-semibold text-center">
                            {emp.length > 0 && (
                                <tr className="border-b-2 border-gray-200">
                                    <td className="px-10 py-2 whitespace-nowrap">{emp[0].CompanyCode}</td>
                                    <td className="px-10 py-2">{emp[0].Occupation}</td>
                                    <td className="px-10 py-2">{emp[0].PresentEmpStatus}</td>
                                    <td className="px-10 py-2 whitespace-nowrap">{emp[0].OFW_TypeOfWork}</td>
                                    <td className="px-10 py-2 whitespace-nowrap">{emp[0].PresentEmpName}</td>
                                    <td className="px-10 py-2 whitespace-nowrap">{emp[0].PresentEmpAddress}</td>
                                    <td className="px-10 py-2">{emp[0].MonthlyIncome_Total}</td>
                                    <td className="px-10 py-2">{emp[0].PresentOfficeAssignment}</td>
                                    <td className="px-10 py-2 whitespace-nowrap">{emp[0].PresentDateEmployed}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="mt-12">
                    <h1 className="text-[#2b2b2b] text-xl font-bold">Previous Employment Table</h1>
                    <table className="text-[#636363] w-full mt-6">
                        <thead className="text-[#2b2b2b] text-[18px]">
                            <tr className="border-b-4 border-gray-200">
                                <th>Company Code</th>
                                <th>Pag-Ibig MID</th>
                                <th>Office Assignment</th>
                                <th>From Date</th>
                                <th>To Date</th>
                            </tr>
                        </thead>
                        <tbody className="text-[18px] text-[#636363] font-semibold text-center">
                            {prevemployment.map((emp) => (
                                <tr key={emp.PrevCompCode} className="border-b-2 border-gray-200">
                                    <td className="px-10 py-2 whitespace-nowrap">{emp.PrevCompCode}</td>
                                    <td className="px-10 py-2">{emp.PI_MID}</td>
                                    <td className="px-10 py-2">{emp.PrevEmpOfficeAssignment}</td>
                                    <td className="px-10 py-2">{emp.FromDate}</td>
                                    <td className="px-10 py-2">{emp.ToDate}</td>
                                </tr>
                             ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-12">
                    <h1 className="text-[#2b2b2b] text-xl font-bold">Previous Employers Table</h1>
                    <table className="text-[#636363] w-full mt-6">
                        <thead className="text-[#2b2b2b] text-[18px]">
                            <tr className="border-b-4 border-gray-200">
                                <th>PrevComp Code</th>
                                <th>Employer Name</th>
                                <th>Employer Address</th>
                            </tr>
                        </thead>
                        <tbody className="text-[18px] text-[#636363] font-semibold text-center">
                            {prevemployer.map((emp, index) => (
                                <tr key={index} className="border-b-2 border-gray-200">
                                    <td className="px-10 py-2">{emp[0].PrevCompCode}</td>
                                    <td className="px-10 py-2">{emp[0].PrevEmpName}</td>
                                    <td className="px-10 py-2">{emp[0].PrevEmpAddress}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-12">
                    <h1 className="text-[#2b2b2b] text-xl font-bold">Heirs Table</h1>
                    <table className="text-[#636363] w-full mt-6">
                        <thead className="text-[#2b2b2b] text-[18px]">
                            <tr className="border-b-4 border-gray-200">
                                <th>Heir ID</th>
                                <th>Pag-Ibig MID</th>
                                <th>Heir Name</th>
                                <th>Relation</th>
                                <th>Birth Date</th>
                            </tr>
                        </thead>
                        <tbody className="text-[18px] text-[#636363] font-semibold text-center">
                            {heirs.map((heir) => (
                                <tr key={heir.HeirID} className="border-b-2 border-gray-200 cursor-pointer">
                                    <td className="px-10 py-2 whitespace-nowrap">{heir.HeirID}</td>
                                    <td className="px-10 py-2">{heir.PI_MID}</td>
                                    <td className="px-10 py-2">{heir.HeirName}</td>
                                    <td className="px-10 py-2">{heir.HeirRelationship}</td>
                                    <td className="px-10 py-2">{heir.HeirBirthDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Result;