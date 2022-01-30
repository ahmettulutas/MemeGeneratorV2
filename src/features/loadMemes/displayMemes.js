import {  useEffect } from "react";
import Meme from "../../components/meme";
import Failed from "../../components/failed";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFulfilled,
  selectAllMemes,
  loadAllMemes,
  selectIsLoading,
  selectIsFailed
} from "./loadMemesSlice";
import { Link } from "react-router-dom";

const DisplayMemes = () => {
    const dispatch = useDispatch();
    const allMemes = useSelector(selectAllMemes);
    const loading = useSelector(selectIsLoading);
    const fulfilled = useSelector(selectFulfilled);
    const failed = useSelector(selectIsFailed)
    useEffect(() => {
        dispatch(loadAllMemes());    
    },[dispatch]);

    if (loading) {
      return <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_szlepvdh.json"  background="transparent"  speed="1"  style={{width: "300px", height: "300px;"}}  loop autoplay></lottie-player>;
    }
    if (fulfilled && allMemes) {
      return (
          <main className="all-memes-main-content">
             {allMemes.filter(item => item.box_count <4).map(createMemeComponent)}
          </main>
      )}
    else {
      return <Failed />
    }

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