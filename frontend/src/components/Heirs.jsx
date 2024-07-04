
function Heirs({ heirs }) {

    return (
        <div className="mt-12 px-8 w-full">
            <table className="text-[#636363] w-full">
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
                        <tr key={heir.HeirID} className="border-b-2 border-gray-200">
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
    )
}

export default Heirs;