
const Search = ({ searchCountry }) => {
    
    return (
        <input
            type="search"
            id="search"
            name="search"
            onChange={searchCountry}
            placeholder="Search for a country..."
            className="search-input" />
    )
}

export default Search