import { useParams } from "react-router-dom";
import Meme from "../../components/meme";
import { useSelector, useDispatch } from "react-redux";
import { selectAllMemes, selectFulfilled } from "../loadMemes/loadMemesSlice";
import {} from "./memeFormSlice";
import { useEffect, useState, usestate } from "react";
const MemeForm = () => {
  const [meme, setMeme] = useState(window.localStorage.getItem("meme") ? JSON.parse(window.localStorage.getItem("meme")) : null);
  const allMemes = useSelector(selectAllMemes);
  const dispatch = useDispatch();
  const fulfilled = useSelector(selectFulfilled);
  const { id } = useParams();

  useEffect(() => {
    if (allMemes.data) {
      setMeme(allMemes.data.memes.filter((item) => item.id === id));
      window.localStorage.setItem("meme", JSON.stringify(meme))
    }
  }, [dispatch, meme]);
  console.log(meme);
  console.log(id);
  return (
    <main>
      {meme && (
        <div>
          <img src={meme[0].url}></img>
          <h1>{meme[0].id}</h1>
        </div>
      )}
    </main>
  );
};
export default MemeForm;
/*      {fulfilled && (
        <div>
          <figure src={meme.data.memes[id].url}></figure>
          <h1>{meme.data.memes[id].id}</h1>
        </div>
      )}

*/
