import { BiTrash,BiCalendarCheck } from "react-icons/bi";
import './css/Request.css';

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
      <dd>
        <figure>
          <img src={data.image} alt="사진" />
          <figcaption>
            {data.body}
          </figcaption>
        </figure>
      </dd>
      <dd>
        <button 
        type="button"
        onClick={() => DeleteList(data.id)}
        >
        <BiTrash />
        </button>
      </dd>
    </dl>
  </li>
  )
}

function Request({myList,DeleteList}){
return(
  <section id="list">
    <h4><BiCalendarCheck />신청내역</h4>
    <ul>
      {myList.map((data) => 
      <RequestList
        key = {data.id}
        data = {data}
        DeleteList = {DeleteList}
      />)}
    </ul>
  </section>
)
}
export default Request;