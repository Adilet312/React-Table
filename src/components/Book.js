import React ,{useState,useEffect,Fragment} from 'react';



const Book =({title,author,pages}) =>{

  return(
    <Fragment>
    <section>
      <h3>{title}</h3>
      <p>{author}</p>
      <div>{pages}</div>
    </section>
   </Fragment>
  )
}
export default Book;
