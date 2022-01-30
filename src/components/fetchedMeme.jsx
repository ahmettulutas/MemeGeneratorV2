import { selectMeme, selectIsLoading } from "../features/editMeme/memeFormSlice";
import { useSelector } from "react-redux";
import React from 'react';

const FetchedMeme = () => {
        const newMeme = useSelector(selectMeme);
        const loading = useSelector(selectIsLoading)
        if(newMeme.success) {
            return (
                <main className="fetchedmeme-main">
                    <p>Click on the Meme to download it</p>
                    <a href={newMeme.data.url} download={newMeme.data.url}><img alt="fetchedmeme" src={newMeme.data.url}></img></a>
                </main>
            )
        }
        if (loading) {
            return <h1>Loading...</h1>

        }
        else {
            return (
                <main>
                    <h1>Failed to makeMeme</h1>
                </main>
                
                )}
        
}

export default FetchedMeme;
