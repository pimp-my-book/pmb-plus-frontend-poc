import React, {Component} from 'react'
import {GET_ONE_BOOK} from '../graphql/Queries'
import {Query} from 'react-apollo'

export default class SingleBook extends Component{
    render(){
        return(
            <Query
            query={GET_ONE_BOOK}
            variables={{
                ID: this.props.id
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
}