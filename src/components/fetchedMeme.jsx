import { selectMeme, selectIsLoading, selectIsFulfilled } from "../features/editMeme/memeFormSlice";
import {useSelector} from "react-redux";
import Failed from "./failed";

const FetchedMeme = () => {
    const newMeme = useSelector(selectMeme);
    const loading = useSelector(selectIsLoading)
    const fulfilled = useSelector(selectIsFulfilled)
    if (loading) {
        return (
            <main className="fetchedmeme-main">
                <h1>Loading...</h1>
            </main>
        )}
        
    if(fulfilled && newMeme) {
        return (
            <main className="fetchedmeme-main">
                <p>Click on the Meme to download it</p>
                <a target="_blank" rel="noreferrer" href={newMeme.data.url} download={newMeme.data.url}><img download={newMeme.data.url} alt="fetchedmeme" src={newMeme.data.url}></img></a>
            </main>
        )
    }

    else {
        return (
            <main className="fetchedmeme-main">
                <Failed />
            </main>
            
        )}
    
}

export default FetchedMeme;
