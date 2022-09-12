import React from 'react'
import Button from './Button'

const ButtonPanel = (props) => {

    const handleClick = (buttonName) => {
       props.clickHandler(buttonName);
    };

    return (
        <div className='component-button-pannel flex flex-wrap flex-auto'>
            <div className='w-full mb-2 border-black flex flex-auto'>
                <Button name="AC" clickHandler={handleClick} gray />
                <Button name="+/-" clickHandler={handleClick} gray />
                <Button name="%" clickHandler={handleClick} gray />
                <Button name="÷" clickHandler={handleClick} orange />
            </div>
            <div className='w-full mb-2 border-black flex flex-auto'>
                <Button name="7" clickHandler={handleClick} gray />
                <Button name="8" clickHandler={handleClick} gray />
                <Button name="9" clickHandler={handleClick} gray />
                <Button name="x" clickHandler={handleClick} orange />
            </div>
            <div className='w-full mb-2 border-black flex flex-auto'>
                <Button name="4" clickHandler={handleClick} gray />
                <Button name="5" clickHandler={handleClick} gray />
                <Button name="6" clickHandler={handleClick} gray />
                <Button name="-" clickHandler={handleClick} orange />
            </div>
            <div className='w-full mb-2 border-black flex flex-auto'>
                <Button name="1" clickHandler={handleClick} gray />
                <Button name="2" clickHandler={handleClick} gray />
                <Button name="3" clickHandler={handleClick} gray />
                <Button name="+" clickHandler={handleClick} orange />
            </div>
            <div className='w-full mb-2 border-black flex flex-auto'>
                <Button name="0" clickHandler={handleClick} gray wide />
                <Button name="." clickHandler={handleClick} gray />
                <Button name="=" clickHandler={handleClick} orange />
            </div>
        </div>
    )
}

export default ButtonPanel