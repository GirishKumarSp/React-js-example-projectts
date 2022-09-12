import React from 'react'

const Display = (props) => {
    return (
        <div className='text-white bg-gray-500 mb-2 font-semibold text-right'>
            <div className='text-7xl p-5'>
                {props.value}
            </div>
        </div>
    )
}

export default Display