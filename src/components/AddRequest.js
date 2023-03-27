import { useState } from "react";
import './css/AddRequest.css';
import { BiCalendarPlus,BiChevronsDown } from "react-icons/bi";

function InfoContent({newInfo,setNewInfo,sendInfo}){

  const now = new Date().toISOString().slice(0,10);
  const nowDate = new Date().getDate() + 7;
  // console.log(nowDate)
  const ableDate = new Date().setDate(nowDate);
  const maxDate = new Date(ableDate).toISOString().slice(0,10)
  // console.log(maxDate)
  
  const [toggle,setToggle] = useState(false);
  
  return(
    <section id="add">
      <h4 
      onClick={()=>{setToggle(!toggle);
                    setNewInfo({...newInfo,date:now})}}>
        <span>
          <BiCalendarPlus />신청하기
        </span>
        <BiChevronsDown />
      </h4>
      {
        toggle !== false ? 
        <div>
        <dl>
        <dt>
          <label htmlFor="userName">
            고객이름
          </label>
        </dt>
        <dd>      
          <input
            type="text" 
            id="userName"
            placeholder="이름을 입력해주세요"
            onChange = {(event) => setNewInfo({...newInfo,people:event.target.value})}
            />
        </dd>
        <dt>
          <label htmlFor="userTitle">제목</label>
        </dt>
        <dd>
          <input 
          type="text"
          id="userTitle"
          placeholder="패키지명을 입력해주세요"
          onChange = {(event) => setNewInfo({...newInfo,title:event.target.value})} />
        </dd>
        <dt>
          <label htmlFor="userDate">콜 요청 날짜</label>
        </dt>
        <dd>
          <input 
            type="date"
            id="userDate"
            name="userDate"
            defaultValue={now}
            min = {now}
            max = {maxDate}
            onChange = 
            {
              (event) => {setNewInfo({...newInfo,date:event.target.value})}
            }
            />

        </dd>
        <dt>
          <label htmlFor="userPicture">사진 첨부</label>
        </dt>
        <dd>
          <input 
          type="file" 
          id="userPicture" 
          name="userPicture"
          onChange = 
          {(event) => setNewInfo({...newInfo,image:event.target.value})
          }/>
        </dd>
        <dt>
          <label htmlFor="userText">내용</label>
        </dt>
        <dd>
          <textarea rows="10" cols="40"
            id="userText"
            onChange = {(event) => setNewInfo({...newInfo,body:event.target.value})}></textarea>
        </dd>
      </dl>
      <p>
        <button type="button"
          onClick={()=>{sendInfo(); setToggle(!toggle)}}>
            신청하기
        </button>
      </p>
      </div>
      : null
      }
    </section>
  )
}


function AddRequest({addInfo,newId}){

  const clear = {
    people: "",
    date:"",
    title: "",
    body: ""
  }

  const [newInfo,setNewInfo] = useState(clear);

  function sendInfo(){
    const day = new Date(newInfo.date).getTime();
    

    const add = {
      people: newInfo.people,
      id: newId + 1,
      title : newInfo.title,
      date :day,
      body: newInfo.body
    }
    addInfo(add);
    setNewInfo(clear); 
  }

return(
  <InfoContent
    newInfo={newInfo}
    setNewInfo={setNewInfo}
    sendInfo={sendInfo} />
  )
}

export default AddRequest;