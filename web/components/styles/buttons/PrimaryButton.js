import React from "react";
import styled from "styled-components";


const PrimaryButtonStyles = styled.button`
font-family: 'Poppins', sans-serif;
color: var(--rasin-black);
background-color: var(--rose-pink);
border: ${props => props.border ? '2px solid var(--rose-pink)' : 'none'} ;
width: ${props => props.small ? '100px' : '180px'};
font-size: 20px;
padding: 2px;
:hover {
 background-color: var(--rose-pink);
 color: var(--linen);
   }
   border: 1px solid var(--rose-pink);
}


`