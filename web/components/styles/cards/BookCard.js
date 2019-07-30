import React from "react";
import styled from "styled-components";
import BodyText from "../typography/BodyText";
import HeadingThree from "../typography/HeadingThree"



const BookCardStyles = styled.div`
height: 450px;
width:330px;
background-color: ${props => props.theme.white};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
`

const CardImage = styled.img`
height: 150px;
width:330px;
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
            <div>
                <CardImage
                src={cardImg}
                />
            </div>
            <div>
                {bookTitle}
                {bookPrice}
                {bookGrade}
            </div>

        </BookCardStyles>
    )
}

export default BookCard