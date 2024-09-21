import "./SearchBox.css"
function SearchBox({handleOnClick, handleOnChange}) {


  return (
    <div className="search-box">
      <input onChange={handleOnChange}  type="text"/>
      <button onClick={handleOnClick}>Search</button>
    </div>

  )
}

export default SearchBox;