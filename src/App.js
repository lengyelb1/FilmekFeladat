import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import SingleDisplay from './SingleDisplay';
import 'bootstrap/dist/css/bootstrap.css';
import Update from './Update';
import NewFilm from './NewFilm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="SingleDisplay/:id" element={<SingleDisplay />}/>
          <Route path="Update/:id" element={<Update />}/>
          <Route path="NewFilm" element={<NewFilm/>}/>

          <Route path="*" element={<h1>There are no such page 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
