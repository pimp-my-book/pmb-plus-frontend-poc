import React from 'react'
import styled from 'styled-components'
import {NavBar} from 'react-bootstrap'

const NavbarStyles = styled(NavBar)`
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
        </NavbarStyles>
    )
}

export default NavigationBar