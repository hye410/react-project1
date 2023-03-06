import { BiTrash } from "react-icons/bi";

function Addlist({data,DeleteList}){
  
  function date2(){
    const ddate =  new Date(Number(data.date));
    return(
    `${ddate.getFullYear()}년
    ${ddate.getMonth() + 1}월
    ${ddate.getDate()}일
    `
    )
  }

  return(
    <li>
    <dl>
      <dt>이름</dt>
      <dd>{data.people}</dd>
      <dt>등록일</dt>
      <dd>{date2(data.date)}</dd>
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

function Inquiry({mylist,DeleteList}){
return(
  <div className="inquiry">
    <ul>
      {mylist.map((data) => 
      <Addlist
      key = {data.id}
      data = {data}
      DeleteList = {DeleteList}
      />)}
    </ul>
  </div>
)
}
export default Inquiry;