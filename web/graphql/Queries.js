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


export const GET_ONE_BOOK = gql`
query GET_ONE_BOOK($ID:String){
    getOneBook(ID:$ID){
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