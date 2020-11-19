import React ,{useState,useEffect,Fragment,useContext} from 'react';
import Book from './Book';
import {ContextBook} from './App';
const style = {
  dispaly:"flex",
  flexDirection: "column",
  justifyContent: "space-around"
}

const ListBooks =() =>{
const {books} = useContext(ContextBook);
const {deleteBook} = useContext(ContextBook)

  return(
    <Fragment>
     <ul style = {{style}}>
     {
       books.map(book => <li onClick = {()=> deleteBook(book.id)} key ={book.id} style = {{listStyle:"none"}}><Book  title = {book.title} author = {book.author} pages = {book.pages}/></li>)
     }
     </ul>
   </Fragment>
  )
}

export default ListBooks;
