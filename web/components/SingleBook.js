import React, {Component} from 'react'
import {GET_ONE_BOOK} from '../graphql/Queries'
import {Query} from 'react-apollo'
import {useRouter} from 'next/router'
import HeadingTwo from '../components/styles/typography/HeadingOne'
import BodyText from '../components/styles/typography/BodyText'
import styled from 'styled-components'

const  SingleBook = () =>{

    const ProductGrid = styled.div`
      display: grid;
      grid-template-columns: repeat(2, 3fr);
      grid-gap: 10px;
    
    `

    const ProductImg = styled.img`
      width: 200px;
      height: 300px;
    `
        const router = useRouter()
        const {id} = router.query
        console.log(id)
        
        return(
            <Query
            query={GET_ONE_BOOK}
            variables={{
                ID: parseInt(id)
            }}>
            {({error, loading, data}) =>{
                if(error) return <p>Something Went wrong</p>;
                if(loading) return <p>Loading...</p>;
                if (!data) return <p>No Book found for this item</p>;
                const book = data.getOneBook
                return (
                    <ProductGrid>
                    <div>

                    <ProductImg
                    
                    src={book.image}
                    />
                    <BodyText>Author:{book.author}</BodyText>
                    <BodyText>ISBN:{book.ISBN}</BodyText>
                    
                    <BodyText> edition: {book.edition}</BodyText>
                    
                    <BodyText>Grade: {book.grade}</BodyText>
                    
                    
                   
                   
                    </div>
                    <div>

                        
                        <HeadingTwo>{book.title}</HeadingTwo>
                    
                    

                    <BodyText> ZAR {book.price}</BodyText>

                    <BodyText> Who is Selling it? {book.vendor}</BodyText>

                    
                    </div>
                    </ProductGrid>
                    
                )
            }}
            </Query>
        )
    }

    export default SingleBook