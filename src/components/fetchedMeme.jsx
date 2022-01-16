import { memeSelector } from "../features/editMeme/memeFormSlice";
import { useSelector } from "react-redux";
import React from 'react';

const FetchedMeme = () => {
const newMeme = useSelector(memeSelector) 
if(newMeme.success) {
    return (
        <div>
            <img src={newMeme.data.url}></img>
        </div>
    )
}
else {
    return <h1>Failed to makeMeme</h1>
}
}

export default FetchedMeme;
