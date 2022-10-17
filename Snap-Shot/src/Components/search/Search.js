import axios from 'axios'
import React, { useState } from 'react'

const Search = () => {
    const [searchText, setSearchText] = useState("")
    const apiKey = '17241914-90da7b93c0ccceb734849dcd1'
    const apiUrl = 'https://pixabay.com/api'
    const [images, setImages] = useState([])

    const onTextChange = (e) => {
        setSearchText(e.target.value)
        if (searchText === "") {
            setImages([""])
        } else {
            axios
                .get(
                    `${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&safesearch=true`
                )
                .then(res => setImages(res.data.hits))
                .catch(err => console.log(err))
        }
    }

    const displayImage = () => {
        return (
            images.map(img => (
                <img src={img.largeImageURL} key={img.id} alt="images" height="200px" width="300px" style={{ margin: 10 }} />
            ))
        )
    }

    return (
        <div>
            <div>
                <input type="text"
                    style={{
                        backgroundColor: 'black',
                        color: 'white',
                        marginLeft: 500,
                        marginTop: 10,
                        paddingTop: 20,
                        paddingLeft: 70,
                        fontSize: 30,
                        borderTopStyle: "hidden",
                        borderRightStyle: "hidden",
                        borderLeftStyle: "hidden",
                        outline: "none",
                        borderBottomStyle: "groove",
                    }}
                    placeholder="search for images"
                    name='searchText'
                    value={searchText}
                    onChange={onTextChange}
                ></input>
            </div>
            <div style={{ marginLeft: 35 }}>
                {displayImage()}
            </div>
        </div>
    )
}

export default Search