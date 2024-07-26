import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { useState } from 'react';

function Shortcut() {

    const [queryResults, setQueryResults] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState();  

    const CustomAccordion = styled(Accordion)(({ theme }) => ({
        backgroundColor: 'white',
        border: '1px solid rgba(0, 0, 0, .125)',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
      }));

    const descriptions = [
        {
            query: "Query 1",
            description: "Display the name of the member who are older than 20 years based on their birthdate, whose permanent address contains 'Manila', or whose sex is 'Male'. Order by the name in descending order.",
        },
        {
            query: "Query 2",
            description: "Display the names, birthplaces, and current addresses of members whose current address and birthplace are both in 'Manila'. Order by name and birthplace in descending by birthplace."
        },
        {
            query:"Query 3",
            description: "Display the names and payment frequencies of members who are married and older than 40 years based on their birthdate, or they belong to the 'Government' membership subcategory. Order the results by name."
        },
        {
            query: "Query 4",
            description: "Display the present employee status. Calculate the average monthly income total of the employee who are assigned to the 'Head Office' (PresentOfficeAssignment). Only include those with an average income greater than 50000. Order the results based on the average income in ascending order."
        },
        {
            query: "Query 5",
            description: "Display the occupation (Occupation), total monthly income (MonthlyIncome_Total) , and the number of members. Include only those with a total monthly income greater than 50000. Group the results by occupation and total monthly income."
        },
        {
            query: "Query 6",
            description: "Display the Occupation status, membership category and count the number of members. Include members who are older than 20. Male members should have a height less than 170. Group the results by occupational status and membership category. Order the results by the number of members in ascending order."
        },
        {
            query: "Query 7",
            description: "Count the number of members while displaying the occupation of members who are employed more than 1 year or those classified as contractual. Group the results by occupation. Sort by the number of members and occupation."
        },
        {
            query: "Query 8",
            description: "Compute the average monthly income total. Display the average monthly income total, membership category, and membership subcategory. Only include the members in ‘Private’. Group the results based on membership category."
        },
        {
            query: "Query 9",
            description: "Count the number of heirs and display the name of the member whose number of heirs is greater than 1. Sort by number of heirs in descending order."
        },
        {
            query: "Query 10",
            description: "Display the name, monthly income total, and the total number of employment. Include those who have worked for more than 2 employers. Sort the results by the total monthly income in descending order. "
        }
    ]

    const columnOrder = [
        ['Name'],
        ['Name', 'BirthPlace', 'CurrAddress'],
        ['Name', 'PaymentFrequency'],
        ['PresentEmpStatus','Average_Income'],
        ['Occupation', 'MonthlyIncome_Total', 'Num_members'],
        ['Occupational_Status', 'Membership_category', 'Num_members'],
        ['Occupation', 'Num_members'],
        ['Membership_category', 'Membership_subcategory', 'Average_MonthlyIncome'],
        ['Name', 'NumHeirs'],
        ['Name', 'MonthlyIncome_Total', 'NumEmployment']
    ]

    const renderTable = (index) => {
        if (queryResults.length === 0) {
            return <p>No data to display</p>;
        }


        return (
            <table className="min-w-full leading-normal">
                <thead>
                    <tr>
                        {columnOrder[index].map((header, index) => (
                            <th key={index} className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {queryResults.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columnOrder[index].map((column, columnIndex) => (
                                <td key={columnIndex} className="px-5 py-5 border-b border-gray-200 bg-white text-sm whitespace-nowrap">
                                    {row[column]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    const runQuery = async(index) => {
        try {
            setSelectedIndex(index);
            const response = await fetch("http://127.0.0.1:5000/queries/" + index);
            const jsonData = await response.json();
            console.log(jsonData);
            setQueryResults(jsonData);
        }
        catch (err) {
            alert(err.message);
        }
    }

    return (
        <div className="mt-12 px-8 overflow-x-auto">
            <div className="grid grid-cols-2">
                <div>
                    <h1 className="text-[#2b2b2b] text-3xl font-bold">Shortcuts</h1>
                    {descriptions.map((desc, index) => (
                        <CustomAccordion key={index}>
                            <AccordionSummary
                            expandIcon={<ArrowDropDownIcon />}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                            >
                            <Typography>{desc.query}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                {desc.description}
                            </Typography>
                                <button className="bg-[#3564FD] text-white p-2 rounded-xl w-[100px] mt-4" onClick={() => runQuery(index)}>Run Query</button>
                            </AccordionDetails>
                        </CustomAccordion>
                    ))}
                </div>
                <div className='px-8'>
                    <h1 className="text-[#2b2b2b] text-3xl font-bold">Query Results</h1>
                    <div className="mt-4 border-2 overflow-x-auto">
                        {renderTable(selectedIndex)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shortcut;