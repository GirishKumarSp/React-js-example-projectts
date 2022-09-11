import React from 'react'

const Heading = () => {
    return (
        <div className='flex justify-center my-8 text-3xl font-medium'>
            <img
                className='mx-5'
                src="//cdn.jsdelivr.net/emojione/assets/png/1F607.png"
                width="40"
                height="40"
                alt=""
            />
            Emoji Search
            <img
                className='mx-5'
                src="//cdn.jsdelivr.net/emojione/assets/png/1F609.png"
                width="40"
                height="40"
                alt=""
            />
        </div>
    )
}

export default Heading  