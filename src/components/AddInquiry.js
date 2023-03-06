import { useState } from "react";

function InfoContent({newInfo,setNewInfo,sendInfo}){
  return(
    <>
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
      <label htmlFor="userDate">등록일</label>
    </dt>
    <dd>
      <input 
        type="date"
        id="userDate"
        onChange = {(event) => setNewInfo({...newInfo,date:event.target.value})}/>
    </dd>
    <dt>
      <label htmlFor="userText">내용</label>
    </dt>
    <dd>
      <textarea rows="5" cols="22"
        id="userText"
        onChange = {(event) => setNewInfo({...newInfo,body:event.target.value})}></textarea>
    </dd>
    <dd>
    <button type="button"
        onClick={sendInfo}>문의하기</button>
    </dd>
    </>
  )
}


function AddInquiry({addInfo,newId}){

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
  <div className="addinquiry">
    <h3>문의하기</h3>
    <dl>
      <InfoContent
        newInfo={newInfo}
        setNewInfo={setNewInfo}
        sendInfo={sendInfo} />
    </dl>
  </div>
)
}

export default AddInquiry;