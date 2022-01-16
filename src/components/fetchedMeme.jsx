import { memeSelector } from "../features/editMeme/memeFormSlice";
import { useSelector } from "react-redux";
import React from 'react';

const FetchedMeme = () => {
        const newMeme = useSelector(memeSelector) 
        if(newMeme.success) {
            return (
                <main>
                    <img alt="fetchedmeme" src={newMeme.data.url}></img>
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
