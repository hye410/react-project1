import { useCallback, useEffect, useState } from "react";
import AddInquiry from "./AddInquiry";
import Inquiry from "./Inquiry";
import Search from "./Search";
import './App.css';
import { BiArchive } from "react-icons/bi";

function App() {
  const [mylist,setMylist] = useState([]);
  const [order,setOrder] = useState('people');
  const [text,setText] = useState('');

  const fetchData =
    useCallback(() => {
    fetch('./data.json')
    .then(response => response.json())
    .then(result => setMylist(result))
  },[]);

  useEffect(fetchData,[fetchData]);

  const DeleteList = (btnId) => setMylist(mylist.filter((item) => item.id !== btnId))

  const newList =    
      mylist.filter((item) => {
        return(
          item.people.toLowerCase().includes(text.toLowerCase()) ||
          item.body.includes(text.toLowerCase()) ||
          item.title.includes(text.toLowerCase())
        )
      }).sort((a,b) => b[order] - a[order])


  return (
    <div id="wrap">
      <h1><BiArchive />문의내역</h1>
      <Search
      onTextChange = {(value) => setText(value)}
      onOrderChange = {(standard) => setOrder(standard)}
       />
      <div id="content">
        <AddInquiry 
        addInfo = {(newinfo) => setMylist([...mylist,newinfo])}
        newId = {mylist.reduce((max,item) => item.id > max? item.id : max,0)} 
        />
        <Inquiry
        mylist = {newList}
        DeleteList = {DeleteList}        
         />           

      </div>
    </div>
  );
}

export default App;
