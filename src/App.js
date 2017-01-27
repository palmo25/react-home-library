import React, { Component } from 'react';
import logo from './logo.svg';
import Booklist from './BookList';
import Bookform from './Form';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './App.css';

class App extends Component {
constructor(props){
    super(props);
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
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Home Library</h2>
        </div>
         <Booklist books={this.state.books} city="Rome"/>
         <br/>
         <Bookform />
      </div>
    );
  }
}

export default App;
