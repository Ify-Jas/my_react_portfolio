import Header from "./components/header";
import Footer from './components/footer';
import About from "./pages/about";
import Stack from './pages/stack';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Landing from './components/landing'


import { Routes, Route } from "react-router-dom";




function App() {
  return (
    <>
      <Header />
    

      <Routes>
        <Route path={'/my_react_portfolio'} element={<Landing />}/>
        <Route path={'/my_react_portfolio/about'} element={<About />}/>
        <Route path={'/my_react_portfolio/portfolio'} element={<Portfolio />}/>
        <Route path={'/my_react_portfolio/stack'} element={<Stack />} />
        <Route path={'/my_react_portfolio/contact'} element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
