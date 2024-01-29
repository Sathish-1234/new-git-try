import React, { useState } from 'react';

function Droptrip() {
    const [fromOption, setFromOption] = useState('');
    const [toOption, setToOption] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('From Option:', fromOption);
        console.log('To Option:', toOption);
    };

    const handleFromChange = (event) => {
        setFromOption(event.target.value);
    };

    const handleToChange = (event) => {
        setToOption(event.target.value);
    };

    return (
        <div className='form_parent'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="fromOption" className="form-label">From</label>
                    <select
                        className="form-select"
                        id="fromOption"
                        value={fromOption}
                        onChange={handleFromChange}
                    >
                        <option value="">Select From</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="toOption" className="form-label">To</label>
                    <select
                        className="form-select"
                        id="toOption"
                        value={toOption}
                        onChange={handleToChange}
                    >
                        <option value="">Select To</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Droptrip;
