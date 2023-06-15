import React from "react";

const SelectionComponent = ({ handleSelection }) => {
    return (
        <select onChange={(e) => handleSelection(e.target.value)} className='mb-4'>
            <option value="Contact Section">Contact Section</option>
            <option value="Skill Section">Skill Section</option>
            <option value="Education Section">Education Section</option>
            <option value="Work Experience Section">Work Experience Section</option>
            <option value="Interest Section">Interest Section</option>
            <option value="Summary Section">Summary Section</option>
            <option value="Project Section">Project Section</option>
        </select>
    );
};

export default SelectionComponent;
