import {  useEffect } from "react";
import Meme from "../../components/meme";
import Failed from "../../components/failed";
import { useSelector, useDispatch } from "react-redux";

import {
  selectFulfilled,
  selectAllMemes,
  loadAllMemes,
  selectIsPending,
  selectRejected
} from "./loadMemesSlice";
import { Link } from "react-router-dom";

const DisplayMemes = () => {
    const dispatch = useDispatch();
    const allMemes = useSelector(selectAllMemes);
    const loading = useSelector(selectIsPending);
    const fulfilled = useSelector(selectFulfilled);
    const rejected = useSelector(selectRejected)

    useEffect(() => {
      // I'm getting good at this shit <3.
        dispatch(loadAllMemes())
      }, [dispatch]);

    if (loading) {
      return (
          <main className="all-memes-main-content">
              <h1>Loading...</h1>
          </main>
      )}
    if (fulfilled && allMemes) {
      return (
          <main className="all-memes-main-content">
             {allMemes.filter(item => item.box_count <4).map(createMemeComponent)}
          </main>
      )}
    if  (rejected) {
      return (
          <main className="all-memes-main-content">
             <Failed /> 
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