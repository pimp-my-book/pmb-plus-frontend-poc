import React, {Component} from 'react'
import {GET_ONE_BOOK} from '../graphql/Queries'
import {Query} from 'react-apollo'
import {useRouter} from 'next/router'

const  SingleBook = () =>{


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
                    <div>
                    {book.title}
                    {book.vendor}
                    {book.price}
                    {book.image}

                    {book.author}
                    {book.ISBN}
                    {book.edition}
                    {book.grade}
                    </div>
                    
                )
            }}
            </Query>
        )
    }

    export default SingleBook