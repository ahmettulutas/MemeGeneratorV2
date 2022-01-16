import { useParams } from "react-router-dom";
import Meme from "../../components/meme";
import MemeForm from "../../components/memeForm.jsx";
import { useSelector, useDispatch } from "react-redux";
import { selectAllMemes, selectFulfilled } from "../loadMemes/loadMemesSlice";

import { useEffect, useState, useRef } from "react";
const MemeComponent = () => {
  const [memes, setMemes] = useState(null);
  const allMemes = useSelector(selectAllMemes);
  const dispatch = useDispatch();
  //const fulfilled = useSelector(selectFulfilled);
  const { id } = useParams();
  useEffect(() => { 
    if (allMemes) {
      setMemes(allMemes.find(item => item.id === id));
    }
  }, [dispatch]);
  return (
    <main>
      {memes && (
        <div style={{paddingTop:"35px"}}>
          <img style={{width:"300px", height:"auto"}}alt={memes.name} src={memes.url}></img>
          <MemeForm id={id} textAmount={memes.box_count}/>
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
