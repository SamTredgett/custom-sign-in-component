import React from 'react';
import './custom-button.styles.scss';

type CustomButtonProps  = {
    children: string,
    type: "submit" | "button" | "reset" | undefined
}

const CustomButton = (props: CustomButtonProps) => (
    <button className="custom-button" type={props.type}>
        {props.children}
    </button>
);

export default CustomButton;