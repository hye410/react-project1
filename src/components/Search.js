import { useState } from "react";
import { BiCaretDown,BiSearch } from "react-icons/bi";
function Toggle({dropDown,onOrderChange}){
  if(dropDown){
    return null
  }
  return(
    <ul>
      <li onClick={() => onOrderChange('people')}>고객명</li>
      <li onClick={() => onOrderChange('date')}>등록일</li>
    </ul>
  )
}

function Search({onTextChange,onOrderChange}){
  const[dropDown,setDropDown] = useState('true');

return(
  <div id="search">
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
      <Toggle
      dropDown = {dropDown}
      onOrderChange = {onOrderChange} />
  </div>
)
}

export default Search;