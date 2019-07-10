import React from 'react'
import styled from 'styled-components'
import {Navbar} from 'react-bootstrap'

const NavbarStyles = styled(Navbar)`
&&&{
    background-color: ${props => props.theme.blueDarkest};
    border-top: ${props => props.theme.pinkDarkest} 8px solid;
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
        <Navbar href="/">PMB Plus</Navbar>
        </NavbarStyles>
    )
}

export default NavigationBar