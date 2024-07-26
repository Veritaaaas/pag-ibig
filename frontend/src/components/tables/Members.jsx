import { useEffect, useState } from "react";
import MemberModal from "../modals/MemberModal";

function Members({ members, setMembers }) {


    const [showModal, setShowModal] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    const handleRowClick = (member) => {
        setSelectedMember(member);
        setShowModal(true);
    }

    const getMembers = async () => {
        try {
            const response = await fetch("http://127.0.0.1:5000/members");
            const jsonData = await response.json();
            setMembers(jsonData);
        } catch (err) {
            alert(err.message);
        }
    }

    useEffect(() => {
        getMembers();
    }, [showModal]);


    return (
        <div className="mt-12 px-8 overflow-x-auto h-full">
            <table className="text-[#636363]">
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
                    <tbody className="text-[18px] text-[#636363] font-semibold">
                        {members.map((member) => (
                            <tr key={member.pi_mid} className="border-b-2 border-gray-200" onClick={() => handleRowClick(member)}>
                                <td className="px-10 py-2">{member.PI_MID}</td>
                                <td className="px-10 py-2">{member.Occupational_Status}</td>
                                <td className="px-10 py-2">{member.Membership_category}</td>
                                <td className="px-10 py-2">{member.Membership_subcategory}</td>
                                <td className="px-10 py-2 whitespace-nowrap">{member.Name}</td>
                                <td className="px-10 py-2 whitespace-nowrap">{member.FatherName}</td>
                                <td className="px-10 py-2 whitespace-nowrap">{member.MotherName}</td>
                                <td className="px-10 py-2">{member.SpouseName}</td>
                                <td className="px-10 py-2 whitespace-nowrap">{member.BirthDate}</td>
                                <td className="px-10 py-2 whitespace-nowrap">{member.BirthPlace}</td>
                                <td className="px-10 py-2">{member.MaritalStatus}</td>
                                <td className="px-10 py-2">{member.Citizenship}</td>
                                <td className="px-10 py-2">{member.Sex}</td>
                                <td className="px-10 py-2">{member.Height}</td>
                                <td className="px-10 py-2">{member.Weight}</td>
                                <td className="px-10 py-2">{member.ProminentFeatures}</td>
                                <td className="px-10 py-2">{member.PaymentFrequency}</td>
                                <td className="px-10 py-2">{member.TIN}</td>
                                <td className="px-10 py-2">{member.SSS}</td>
                                <td className="px-10 py-2">{member.SerialBadge}</td>
                                <td className="px-10 py-2 whitespace-nowrap">{member.DivStationCode}</td>
                                <td className="px-10 py-2 whitespace-nowrap">{member.PernAddress}</td>
                                <td className="px-10 py-2 whitespace-nowrap">{member.CurrAddress}</td>
                                <td className="px-10 py-2 whitespace-nowrap">{member.MailAddress}</td>
                                <td className="px-10 py-2 whitespace-nowrap">{member.HomeCode}</td>
                                <td className="px-10 py-2 whitespace-nowrap">{member.CellNum}</td>
                                <td className="px-10 py-2 whitespace-nowrap">{member.BusinessDirectLine}</td>
                                <td className="px-10 py-2 whitespace-nowrap">{member.BusinessTrunkLine}</td>
                                <td className="px-10 py-2">{member.EmailAddress}</td>
                                <td className="px-10 py-2 whitespace-nowrap">{member.CompanyCode}</td>
                            </tr>
                        ))}
                    </tbody>
            </table>
            {showModal && <MemberModal member={selectedMember} setShowModal={setShowModal} />}
        </div>
    )
}

export default Members;