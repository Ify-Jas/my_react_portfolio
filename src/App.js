import Home from "./pages/home";
import Contact from "./pages/contact";
import Header from "./component/header";
import Footer from "./component/header";
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      
      <Header />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>

      </Routes>

            
      <Footer />
     


    </div>
  );
}

export default App;
