import {  useEffect } from "react";
import Meme from "../../components/meme";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFulfilled,
  selectAllMemes,
  loadAllMemes,
  selectIsLoading
} from "./loadMemesSlice";
import { Link } from "react-router-dom";

const DisplayMemes = () => {
    const dispatch = useDispatch();
    const allMemes = useSelector(selectAllMemes);
    const loading = useSelector(selectIsLoading);
    const fulfilled = useSelector(selectFulfilled);

    useEffect(() => {
      dispatch(loadAllMemes());
      console.log("kajsdsas")
    },[]);

    if (loading) {
      return <h1>Loading...</h1>;
    }
    if(fulfilled) {
      return (
          <main className="all-memes-main-content">
            {/*filters memes with 4 boxes */}
             {allMemes.filter(item => item.box_count <4).map(createMemeComponent)} 
            
          </main>
      )}

};

export default DisplayMemes;
const createMemeComponent = (meme) => (
  <Link style={{ textDecoration: 'none' }} to={`/memes/${meme.id}`}>
    <Meme
      key={meme.id}
      id={meme.id}
      name={meme.name}
      alt={meme.name}
      url={meme.url}
    />
  </Link>
);