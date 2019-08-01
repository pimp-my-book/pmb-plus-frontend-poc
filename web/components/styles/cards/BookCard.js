import React from "react";
import styled from "styled-components";
import BodyText from "../typography/BodyText";
import HeadingThree from "../typography/HeadingThree"



const BookCardStyles = styled.div`
height: 450px;
width:330px;
padding: 10px;
background-color: ${props => props.theme.white};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
`

const CardImage = styled.img`
height: 150px;
width:330px;
`
const CardGrid = styled.div`
display:grid;
grid-template-rows: repeat(3, 0.25fr);
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

            <CardGrid>
           <HeadingThree>{bookTitle}</HeadingThree>
           <BodyText>{bookPrice}</BodyText>
           <BodyText>{bookGrade}</BodyText>
              
                
            </CardGrid>

        </BookCardStyles>
    )
}

export default BookCard