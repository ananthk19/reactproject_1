import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals'
import BookList from './components/components.BookList';
import './components/styles/components.BookList.css'

/*function Heading(){
  return (
    <React.Fragment>
      <h1>Heading</h1>
    </React.Fragment>
  )
}

function Message(){
  return (
    <React.Fragment>
      <h3><i>Message</i></h3>
    </React.Fragment>
  )
}
*/
function Store(){
  return (
    <React.Fragment className='bookList'>
      <BookList />
      <BookList />
      <BookList />
    </React.Fragment>
    
  )
}
ReactDOM.render(<Store />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
