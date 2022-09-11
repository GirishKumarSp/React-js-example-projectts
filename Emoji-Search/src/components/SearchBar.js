import React from 'react'

const SearchBar = (props) => {
    return (
        <>
            <div className='m-2'>
                <input
                    className="search w-full p-2 text-xl border border-black rounded-md"
                    type="text"
                    placeholder='search....'
                    onChange={(e) => props.textChange(e)}
                />
            </div>
            <div className='border-b border-black mt-1'></div>
        </>
    )
}

export default SearchBar
