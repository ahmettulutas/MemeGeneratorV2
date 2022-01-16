import "./styles.css";
import HomePage from "./components/homepage";
import MemeComponent from "./features/editMeme/memeComponent";
import { BrowserRouter as Router, Navigate, Routes, Route, Link } from "react-router-dom";
import DisplayMemes from "./features/loadMemes/displayMemes";
import FetchedMeme from "./components/fetchedMeme";

export default function App() {
  return (
    <div>
    <Router>
    <Link to="/memes" >memes</Link>
      <Routes>
        
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/memes/" element={<DisplayMemes />}></Route>
        <Route path="/memes/:id" element={<MemeComponent />}></Route>
        <Route path="/memes/:id/:fetchedmeme" element={<FetchedMeme />}></Route>
        <Route
        path="*"
        element={<Navigate to="/" />}
    />
      </Routes>
    </Router>
    </div>
  );
}
