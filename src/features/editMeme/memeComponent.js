import { useParams } from "react-router-dom";
import MemeForm from "../../components/memeForm.jsx";
import { useSelector } from "react-redux";
import { selectAllMemes } from "../loadMemes/loadMemesSlice";
import { useEffect, useState } from "react";

const MemeComponent = () => {
  const [selectedMeme, setSelectedMeme] = useState(null);
  const allMemes = useSelector(selectAllMemes);
  const { id } = useParams();
  useEffect(() => {
    //checks if allmemes are loaded 
        if (allMemes) {
          setSelectedMeme(allMemes.find(item => item.id === id))
        }
      },[id, allMemes]);

  return (
    <main className="meme-component-main">
      {selectedMeme && (
        <div className="meme-div">
          <img alt={selectedMeme.name} src={selectedMeme.url}></img>
          <MemeForm id={id} textAmount={selectedMeme.box_count}/>
        </div>
      )}
    </main>
  )};
export default MemeComponent;


