import Home from "./pages/home";
import Contact from "./pages/contact";
import Header from "./component/header";
import Footer from "./component/footer";
import List from "./pages/list";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path={"/"} element={<Home />} ></Route>
          <Route path={"/contact"} element={<Contact />} ></Route>
          <Route path={"/list"} element={<List />} ></Route>


        </Routes>


        <Footer />
      </BrowserRouter>
      
     
     


    </div>
  );
}

export default App;
