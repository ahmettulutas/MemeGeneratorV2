import { useParams } from "react-router-dom";
import MemeForm from "../../components/memeForm.jsx";
import { useSelector, useDispatch } from "react-redux";
import { selectAllMemes } from "../loadMemes/loadMemesSlice";
import { useEffect, useState } from "react";

const MemeComponent = () => {
  const [selectedMeme, setSelectedMeme] = useState(null);
  const allMemes = useSelector(selectAllMemes);
  const dispatch = useDispatch();
  //const fulfilled = useSelector(selectFulfilled);
  const { id } = useParams();
  useEffect(() => { 
    if (allMemes) { //checks if allmemes are loaded
      setSelectedMeme(allMemes.find(item => item.id === id));
    }
  }, [dispatch]);
  return (
    <main>
      {selectedMeme && (
        <div style={{paddingTop:"35px"}}>
          <img style={{width:"300px", height:"auto"}}alt={selectedMeme.name} src={selectedMeme.url}></img>
          <MemeForm id={id} textAmount={selectedMeme.box_count}/>
        </div>
      )}
    </main>
  );
};
export default MemeComponent;


/*window.localStorage.getItem("meme") ? JSON.parse(window.localStorage.getItem("meme")) : null
      window.localStorage.setItem("meme", JSON.stringify(meme))*/
