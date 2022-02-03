import "./styles.css";
import Header from "./components/header";
import MemeComponent from "./features/editMeme/memeComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllMemes from "./features/loadMemes/displayMemes";
import FetchedMeme from "./components/fetchedMeme";
import Footer from "./components/footer";

export default function App() {

  return (
          <Router>
            <main className="main-app-layout">
            <Header />  
                <div className="routes-section">
                <Routes >
                  <Route  path="/" exact element={<AllMemes/>}/>
                  <Route path="/:id" element={<MemeComponent />}></Route>
                  <Route path="/:id/:fetchedmeme" element={<FetchedMeme />}></Route>
                </Routes>
              </div>  
            <Footer />
            </main>
          </Router>
  );
}
