
import React from 'react'
import axios from 'axios'
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch } from 'react-axios'

class Booklist extends React.Component{
  constructor(){
    super();
   this.state = {
    books: [],
  }
}

componentDidMount(){
  axios.get('http://localhost:3000/books.json')
   .then((res) => {
     this.setState({books:res.data});
   });
}

 render(){
   return(
     <div>
        <h2>Booklist</h2>
        <ul>
        {this.state.books.map((book) =>
              <li key={book.id}> {book.name}</li>
        )}
        </ul>

   </div>
    )
  }
}


export default Booklist
