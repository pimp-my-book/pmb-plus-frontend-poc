import React from "react";
import styled from "styled-components";


const PrimaryButtonStyles = styled.button`
font-family: 'Kanit', sans-serif
color: ${props => props.theme.white};
background-color: ${props => props.theme.pinkDarkest};
width: 160px;
font-size: 20px;
border-radius: 5px;

:hover {
 background-color: ${props => props.theme.white};
 color: ${props => props.theme.pinkDarkest}
   }
   border: 1px solid ${props => props.theme.pinkDarkest};
}`;

const PrimaryButton = ({
    onClick,
    text,
    ...props
}) =>{
    return (
        <PrimaryButtonStyles
        onClick={onClick}
        {...props}>
        {text}
        </PrimaryButtonStyles>
    )
}


export default PrimaryButton; 