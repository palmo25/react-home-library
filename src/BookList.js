
import React from 'react'
import axios from 'axios'
import {Table} from 'react-bootstrap'


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
     <div className="container">
        <h2>Booklist</h2>
        <Table striped bordered condensed hover>
          <thead>
          <tr>
           <th>#</th>
           <th>Author</th>
           <th>Title</th>
         </tr>
           </thead>
           <tbody>

        {this.state.books.map((book) =>
              <tr key={book.id}>

              <td > {book.id}</td>
              <td></td>
              <td> {book.name}</td>
            
              </tr>
        )}

        </tbody>
        </Table>

        <button className="btn btn-success">Button Test</button>

   </div>
    )
  }
}


export default Booklist
