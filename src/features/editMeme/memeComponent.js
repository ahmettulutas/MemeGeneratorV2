import { useParams } from "react-router-dom";
import Meme from "../../components/meme";
import MemeForm from "../../components/memeForm.jsx";
import { useSelector, useDispatch } from "react-redux";
import { selectAllMemes, selectFulfilled } from "../loadMemes/loadMemesSlice";

import { useEffect, useState, usestate } from "react";
const MemeComponent = () => {
  const [meme, setMeme] = useState(null);
  const allMemes = useSelector(selectAllMemes);
  const dispatch = useDispatch();
  const fulfilled = useSelector(selectFulfilled);
  const { id } = useParams();

  useEffect(() => { 
    if (allMemes) {
      setMeme(allMemes.filter((item) => item.id === id));
    }
    console.log(allMemes)
  }, [dispatch, allMemes,id]);
  console.log(meme);
  console.log(id);
  return (
    <main>
      {meme && (
        <div>
          <img alt={meme[0].name} src={meme[0].url}></img>
          <h1>{meme[0].id}</h1>
          <MemeForm textAmount={meme[0].box_count}/>
        </div>
      )}
    </main>
  );
};
export default MemeComponent;
/*      {fulfilled && (
        <div>
          <figure src={meme.data.memes[id].url}></figure>
          <h1>{meme.data.memes[id].id}</h1>
        </div>
      )}

*/

/*window.localStorage.getItem("meme") ? JSON.parse(window.localStorage.getItem("meme")) : null
      window.localStorage.setItem("meme", JSON.stringify(meme))*/
