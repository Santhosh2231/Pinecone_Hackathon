import FileUploader from "./screens/FileUploader";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from "./screens/Home";
import CropDiseases from "./screens/CropDiseases";
import Disease from "./screens/Disease";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 via-violet-200 to-cyan-200">
    <BrowserRouter>
      
        <Navbar />
        <div className="min-h-screen">

        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/analyse" element={<FileUploader />} />
          <Route path="/cropdiseases" element={<CropDiseases />} />
          <Route path="/cropdiseases/:disease" element={<Disease />} />

        </Routes>
        </div>
        <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;

