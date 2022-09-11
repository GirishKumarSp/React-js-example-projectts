import React from 'react'

const Alert = (props) => {
    return (
        props.alert && <div>
            <div className="bg-green-100  border-x-8 border-green-700 text-green-700 p-3 absolute -mt-3 w-full md:ml-[1000px]  rounded-md  md:w-3/12" role="alert">
                <p className="font-bold">{props.alert.type}</p>
                <p>{props.alert.msg}</p>
            </div>
        </div>
    )
}

export default Alert