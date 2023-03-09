import { useCallback, useEffect, useState } from "react";
import AddRequest from "./AddRequest";
import Request from "./Request";
import Search from "./Search";
import './App.css';
import { BiArchive } from "react-icons/bi";

function App() {
  const [myList,setMyList] = useState([]);
  const [order,setOrder] = useState('date');
  const [text,setText] = useState('');
  
  const fetchData =
    useCallback(() => {
    fetch('./data.json')
    .then(response => response.json())
    .then(result => setMyList(result))
  },[]);

  useEffect(fetchData,[fetchData]);

  const DeleteList = (btnId) => setMyList(myList.filter((item) => item.id !== btnId))

  const newList =    
      myList.filter((item) => {
        return(
          item.people.toLowerCase().includes(text.toLowerCase()) ||
          item.body.includes(text.toLowerCase()) ||
          item.title.includes(text.toLowerCase())
        )
      }).sort((a,b) => order === 'date' ? b[order] - a[order] : 
              a['people'] < b['people'] ? -1 : 
              a['people'] > b['people'] ? 1 : 0);

  return (
    <div id="wrap">
      <h1><BiArchive />&nbsp;해피콜 신청</h1>
      <Search
      onTextChange = {(value) => setText(value)}
      onOrderChange = {(standard) => setOrder(standard)}
       />
      <div id="content">
        <AddRequest 
        addInfo = {(newInfo) => setMyList([...myList,newInfo])}
        newId = {myList.reduce((max,item) => item.id > max? item.id : max,0)} 
        />
        <Request
        myList = {newList}
        DeleteList = {DeleteList}        
         />           

      </div>
    </div>
  );
}

export default App;
