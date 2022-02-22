import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import MemeComponent from "./features/editMeme/memeComponent";
import AllMemes from "./features/loadMemes/displayMemes";
import FetchedMeme from "./components/fetchedMeme";
import Footer from "./components/footer";

export default function App() {
  return (
    <Router>
      <main className="main-app-layout">
      <Header />  
        <section className="routes-section">
          <Routes>
            <Route  path="/" exact element={<AllMemes/>}/>
            <Route path="/:id" element={<MemeComponent />}></Route>
            <Route path="/:id/:fetchedmeme" element={<FetchedMeme />}></Route>
          </Routes>
        </section>  
      <Footer />
      </main>
    </Router>
  );
}
