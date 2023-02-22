import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
const Search = () => {
    return (
        <div>
            <div className="input-group">
                <input type="search" className="form-control " placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <button type="submit" className="btn search_btn "><SearchIcon /></button>
            </div>
        </div>
    )
}

export default Search