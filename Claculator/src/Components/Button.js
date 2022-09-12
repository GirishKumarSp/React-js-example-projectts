import React from 'react'

const Button = (props) => {
    const classNames = [
        "component-button",
        "w-1/4",
        "inline-flex",
        "flex-auto",
        props.wide ? "w-2/4" : ""
    ];

    const handleClick = () => {
        props.clickHandler(props.name);
    };

    const classNamesButton = [
        "text-4xl",
        "flex-auto",
        props.orange ? "bg-orange-700 text-white" : "",
        props.gray ? "bg-gray-500 mr-2" : "",
    ]

    return (
        <div className={classNames.join(" ")}>
            <button onClick={handleClick} className={classNamesButton.join(" ")}>{props.name}</button>
        </div>
    )
}

export default Button