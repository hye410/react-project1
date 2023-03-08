import { BiTrash } from "react-icons/bi";

function RequestList({data,DeleteList}){
  
  function changeDate(){
    const date =  new Date(Number(data.date));
    return(
    `
    ${date.getFullYear()}년
    ${date.getMonth() + 1}월
    ${date.getDate()}일
    `
    )
  }

  return(
    <li>
    <dl>
      <dt>이름</dt>
      <dd>{data.people}</dd>
      <dt>등록일</dt>
      <dd>{changeDate(data.date)}</dd>
      <dt>제목</dt>
      <dd>{data.title}</dd>
      <dt>내용</dt>
      <dd>{data.body}</dd>
    </dl>
    <button 
    type="button"
    onClick={() => DeleteList(data.id)}
    >
      <BiTrash />
      </button>
  </li>
  )
}

function Request({myList,DeleteList}){
return(
  <div className="request">
    <h3>신청 내역</h3>
    <ul>
      {myList.map((data) => 
      <RequestList
      key = {data.id}
      data = {data}
      DeleteList = {DeleteList}
      />)}
    </ul>
  </div>
)
}
export default Request;