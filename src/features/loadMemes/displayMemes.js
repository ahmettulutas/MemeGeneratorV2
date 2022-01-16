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

  },[dispatch]);

  if (loading) {
    return <>Loading... </>;
  }
  return (
    <div className="display-main">
      {fulfilled && allMemes.map(createMemeComponent)}
    </div>
  );
};
export default DisplayMemes;
const createMemeComponent = (meme) => (
  <Link to={`/memes/${meme.id}`}>
    <Meme
      key={meme.id}
      id={meme.id}
      name={meme.name}
      alt={meme.name}
      url={meme.url}
    />
  </Link>
);
