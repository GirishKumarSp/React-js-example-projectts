import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

const EmojiRow = (props) => {
    const { symbol, title, showAlert } = props
    const codePointHex = symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
    return (
        <div >
            <CopyToClipboard text={symbol}>
                <div className='content-div group flex items-center border-b border-gray-300 px-5 py-2' onClick={() => { showAlert("Success", "Emoji Copied") }} >
                    <span className='content-span-img mr-4' >{<img className='w-8 h-8' alt={title} src={src} />}
                    </span><span className='content-span-title'>{title}</span>
                    <span className="info invisible group-hover:visible ml-auto text-gray-500">Click to copy emoji</span>
                </div>
            </CopyToClipboard>
        </div>
    )
}

export default EmojiRow