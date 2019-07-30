import React from "react";
import styled from "styled-components";

const BookCardStyles = styled.div`
height: 450px;
width:330px;
background-color: ${props => props.theme.white};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
`

const BookCard = ({
    text,
    cardImg,
    bookTitle,
    bookPrice,
    bookGrade,
}) => {
    return(
        <BookCardStyles>

        </BookCardStyles>
    )
}

export default BookCard