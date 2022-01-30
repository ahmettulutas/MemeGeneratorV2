import { selectMeme, selectIsLoading, selectIsFulfilled } from "../features/editMeme/memeFormSlice";
import { useSelector } from "react-redux";
import React from 'react';
import Failed from "./failed"
const FetchedMeme = () => {
        const newMeme = useSelector(selectMeme);
        const loading = useSelector(selectIsLoading)
        const fulfilled = useSelector(selectIsFulfilled)
        if(fulfilled && newMeme) {
            return (
                <main className="fetchedmeme-main">
                    <p>Click on the Meme to download it</p>
                    <a href={newMeme.data.url} download={newMeme.data.url}><img alt="fetchedmeme" src={newMeme.data.url}></img></a>
                </main>
            )
        }
        if (loading) {
            return (
                <main className="fetchedmeme-main">
                    <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_szlepvdh.json"  background="transparent"  speed="1"  style={{width: "300px", height: "300px;"}}  loop autoplay></lottie-player>;
                </main>
            )}
            
        else {
            return (
                <main className="fetchedmeme-main">
                    <p>Uppss... Something went wrong...</p>
                    <Failed />
                </main>
                
         )}
        
}

export default FetchedMeme;
