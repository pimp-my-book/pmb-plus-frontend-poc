import React from 'react'
import styled from 'styled-components'
import {Navbar} from 'react-bootstrap'

const NavbarStyles = styled(Navbar)`
&&&{
    background-color: ${props => props.theme.blueDarkest};
    border-top: ${props => props.theme.pinkDarkest} 8px solid;
    height: 120px;
}

`


const NavigationBar = ({
    expand,
   
    ...props
}) => {
    return(
        <NavbarStyles
        expand="lg"
        {...props}>
        
        </NavbarStyles>
    )
}

export default NavigationBar