import { useState, useEffect } from "react";
import Meme from "../../components/meme";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFulfilled,
  selectAllMemes,
  loadAllMemes,
  selectIsLoading
} from "./loadMemesSlice";
import { Link, Routes, Route } from "react-router-dom";

const DisplayMemes = () => {
  const dispatch = useDispatch();
  const allMemes = useSelector(selectAllMemes);
  const loading = useSelector(selectIsLoading);
  const fulfilled = useSelector(selectFulfilled);

  useEffect(() => {
    dispatch(loadAllMemes());
    console.log(allMemes.memes);
  }, [dispatch]);

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
const createMemeComponent = (item) => (
  <Link to={`/memes/${item.id}`}>
    <Meme
      key={item.id}
      id={item.id}
      name={item.name}
      alt={item.name}
      img={item.url}
    />
  </Link>
);
