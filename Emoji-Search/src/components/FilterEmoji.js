import { emojilist } from "./emojiList"

const FilterEmoji = (query, maxResults) => {
    // props = {data,query}
    const keys = ["title"]
    // const keys = ["title", "symbol", "keywords"] --can check for all the fields
    return emojilist.filter(
        (item) =>
            keys.some(key => item[key].toLowerCase().includes(query.toLowerCase()))
    )
        .slice(0, maxResults);
}

export default FilterEmoji