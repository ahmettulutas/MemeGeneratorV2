import "./styles.css";
import HomePage from "./components/homepage";
import Meme from "./components/meme";
import MemeForm from "./features/editMeme/memeForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayMemes from "./features/loadMemes/displayMemes";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/memes/" element={<DisplayMemes />}></Route>
        <Route path="/memes/:id" element={<MemeForm />}></Route>
      </Routes>
    </Router>
  );
}
//        <Route path="/memes/:id" element={<Meme />}></Route>
