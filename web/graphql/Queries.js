import gql from 'graphql-tag'


export const GET_ALL_BOOKS = gql`
query GET_ALL_BOOKS{
    getAllBooks{
        ID
        price
        image
        title
        author
        ISBN
        edition
        grade
        vendor
    }
}
`