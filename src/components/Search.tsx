import React from 'react'

const Search = () => {
  return (
     <div
     className=' rounded-md w-[70vw] h-8 flex justify-center items-center p-3 mt-5 bg-amber-50'
     >
        <input type="text" placeholder="Procurar um som..." className="search-input w-full" />
     </div>
  )
}

export default Search