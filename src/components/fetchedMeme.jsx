import { memeSelector } from "../features/editMeme/memeFormSlice";
import { useSelector } from "react-redux";
import React from 'react';

const FetchedMeme = () => {
        const newMeme = useSelector(memeSelector) 
        if(newMeme.success) {
            return (
                <main className="fetchedmeme-main">
                    <p>Click on the Meme to download it</p>
                    <a href={newMeme.data.url} download={newMeme.data.url}><img alt="fetchedmeme" src={newMeme.data.url}></img></a>
                </main>
            )
        }
        else {
            return (
                <main>
                    <h1>Failed to makeMeme</h1>
                </main>
                
                )}
}

export default FetchedMeme;
