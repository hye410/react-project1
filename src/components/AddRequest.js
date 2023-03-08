import { useState } from "react";


function InfoContent({newInfo,setNewInfo,sendInfo}){
  
  const now = new Date().toISOString().slice(0,10);
  const nowDate = new Date().getDate() + 7;
  // console.log(nowDate)
  const ableDate = new Date().setDate(nowDate);
  const maxDate = new Date(ableDate).toISOString().slice(0,10)
  // console.log(maxDate)

  return(
    <>
    <dl>
    <dt>
      <label htmlFor="userName">고객이름</label>
    </dt>
    <dd>      
      <input
        type="text" 
        id="userName"
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
        onChange = {(event) => setNewInfo({...newInfo,date:event.target.value})}/>
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
        onClick={sendInfo}>신청하기</button>
    </p>
    </>
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

    const day = new Date(newInfo.date);
    const dday = day.getTime();

    const add = {
      people: newInfo.people,
      id: newId + 1,
      title : newInfo.title,
      date :dday,
      // date: newInfo.date,
      body: newInfo.body
    }
    addInfo(add);
    setNewInfo(clear); 
    // console.log(newInfo)
  }

return(
  <div className="addRequest">
    {/* <h3>신청하기</h3> */}
      <InfoContent
        newInfo={newInfo}
        setNewInfo={setNewInfo}
        sendInfo={sendInfo} />
  </div>
)
}

export default AddRequest;