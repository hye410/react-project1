import { useCallback, useEffect, useState } from "react";
import AddRequest from "./AddRequest";
import Request from "./Request";
import Search from "./Search";
import './App.css';
import { BiArchive } from "react-icons/bi";
import Header from "./Header";
import Footer from "./Footer";

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
    <>
    <Header />
    <article id="wrap">
      <h3><BiArchive />&nbsp;해피콜 신청</h3>
      <Search
        onTextChange = {(value) => setText(value)}
        onOrderChange = {(standard) => setOrder(standard)}
      />
      <AddRequest 
        addInfo = {(newInfo) => setMyList([...myList,newInfo])}
        newId = {myList.reduce((max,item) => item.id > max? item.id : max,0)} 
      />
      <Request
        myList = {newList}
        DeleteList = {DeleteList}        
      />      
    </article>
    <Footer />
    </>
  );
}

export default App;
