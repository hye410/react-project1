import { useState } from "react";
import { BiCaretDown,BiSearch } from "react-icons/bi";
import './css/Search.css';

function Toggle({dropDown,onOrderChange}){
  if(dropDown){
    return null
  }
  return(
    <ul>
      <li onClick={() => onOrderChange('')}>고객명</li>
      <li onClick={() => onOrderChange('date')}>요청일</li>
    </ul>
  )
}

function Search({onTextChange,onOrderChange}){
  const[dropDown,setDropDown] = useState('true');

return(
  <div id="search">
    <div>
      <BiSearch />
      <input 
      type="text"
      onChange={(event) => {onTextChange(event.target.value)}}
      />
        <button 
        type="button"
        onClick={()=>setDropDown(!dropDown)}>
        <BiCaretDown />
        </button>
    </div>
    <Toggle
        dropDown = {dropDown}
        onOrderChange = {onOrderChange} />
  </div>
)
}

export default Search;