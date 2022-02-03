import "./styles.css";
import Header from "./components/header";
import MemeComponent from "./features/editMeme/memeComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllMemes from "./features/loadMemes/displayMemes";
import FetchedMeme from "./components/fetchedMeme";
import Footer from "./components/footer";
export default function App() {
  return (
    <main className="main-app-layout">  
        <Router>
          <Header />  
          <div className="routes-section">
          <Routes>
            <Route path="/" exact element={<AllMemes/>}/>
            <Route path="/memes/:id" element={<MemeComponent />}></Route>
            <Route path="/memes/:id/:fetchedmeme" element={<FetchedMeme />}></Route>
          </Routes>
          </div>  
          <Footer />
        </Router>
    </main>
  );
}
