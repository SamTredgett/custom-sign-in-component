import React, { useState } from 'react';

// Import Style here:
import './form-input.styles.scss';
{/* 
    Author: Sam Tredgett
    Date:  28-02-2022
    Description: 
    Reusable TypeScript Function form text field input that can inherit type dynamically.
    The CallBack function 'onChange' is passed down to allow state to be lifted up 
    within the functional component structure

    Classes for styling are as follows:
    @group: {div that contains main elements}
    @form-label: {HTML Label element}
    @form-input: {HTML Input element}

*/}

interface TEXTFIELDPROPS {
    placeholder: string;
    type: string;
    label: string;
    onChange: Function;
}


{/* 
    @Params: props   @Type: {string, string, string, Function}
*/}
function TextField(props: TEXTFIELDPROPS) {
    const handleChange = (e: { target: { value: any; }; }) => {
        props.onChange(e.target.value)
    }

    return (
        <div>
            <div className='group'>
                {/* Delete label as appropriate for styling */}
                <label className='form-label' >{props.label}: </label>
                <input 
                className='form-input'
                placeholder={props.placeholder} 
                type={props.type} 
                onChange={handleChange} />
            </div>
            
        </div>
    );
};


export default TextField;