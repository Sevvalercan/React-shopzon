import React from 'react'

const Sorting = ({setSort}) => {
  return (
    <div className='bg-gray-100 my-5 p-5 flex items-center justify-end' >
        <select onClick={e => setSort(e.target.value)} className='bg-white-200 py-3 px-5' name=''>
            <option value="" disabled>Seçiniz</option>
            <option value="inc"> Artan</option>
            <option value="dec">Azalan</option>
        </select>
    </div>
  )
}

export default Sorting