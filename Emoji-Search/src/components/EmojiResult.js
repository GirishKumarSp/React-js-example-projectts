import React from 'react'
import EmojiRow from './EmojiResultRow'

const EmojiSearch = (props) => {
    const { data, showAlert } = props
    return (
        <div>
            {data.map((emojiData) => (
                <EmojiRow
                    key={emojiData.title}
                    symbol={emojiData.symbol}
                    title={emojiData.title}
                    showAlert={showAlert}
                />
            ))}
        </div>
    )
}

export default EmojiSearch