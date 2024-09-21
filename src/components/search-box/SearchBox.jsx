import "./SearchBox.css"

function SearchBox({handleOnClick, handleOnChange}) {

  return (
    <form onSubmit={handleOnClick} className="search-box">
      <input onChange={handleOnChange} type="text"/>
      <button type={"submit"}>Search</button>
    </form>

  )
}

export default SearchBox;