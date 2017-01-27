
import React, {Component} from 'react'
import {Table} from 'react-bootstrap'

class Booklist extends Component{
  render(){
   return(
     <div className="container">
        <h2>Booklist</h2>
        <p>{this.props.city} </p>
        <Table striped bordered condensed hover>
          <thead>
          <tr>
           <th>#</th>
           <th>Author</th>
           <th>Title</th>
         </tr>
           </thead>
           <tbody>

          {this.props.books.map((book) =>
                <tr key={book.id}>
                  <td > {book.id} </td>
                  <td>  {book.author} </td>
                  <td>  {book.name} </td>
                </tr>
          )}

        </tbody>
        </Table>
   </div>
    )
  }
}


export default Booklist
