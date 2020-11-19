import React ,{useState,useEffect,Fragment} from 'react';
import {without} from 'lodash';
import ListBooks from './ListBooks';
import Search from './Search';

export const ContextBook = React.createContext();
const App =() =>{
  const [books,setBooks] = useState([]);
  const [searchTerm,setSearchTerm] = useState('')

  useEffect(()=>{
    const getData = async () => {
      const request = await fetch('./bookList.json');
      const data = await request.json();
      setBooks(data)
    }
    getData()
  },[])
  const deleteBook = (id) =>{
      let tempBooks = books.filter(book => (book.id!==id) && book)
      setBooks(tempBooks)

  }
  const onSearch = (searchWord) =>{
    setSearchTerm(searchWord)
    let searchBooks = books.filter( book => book.title.toLowerCase().includes(searchWord.toLowerCase()));
    setBooks(searchBooks);
  }
  return(
    <Fragment>
       <ContextBook.Provider value = {{books,deleteBook,onSearch,searchTerm } }>
          <Search/>
          <ListBooks/>
       </ContextBook.Provider>
   </Fragment>
  )
}
export default App;
