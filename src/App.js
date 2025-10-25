import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import React, { useState, useEffect } from "react";
import './styles.css';
import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CategoryPage from "./pages/CollectionPage";
import ProductDetail from "./pages/productDetail";
function App() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const back45 = "back45.jpg"                                                  
	const cat = [
	{ title: "Home", link: "/"},
    { title: "Shein", link: "/collections/shein"},
    { title: "Mobile and Electronics", link: "/collections/electronics" },
    { title: "Supplements", link: "/collections/supplments" },
    { title: "Skin care Products", link: "/collections/skincare"},
    { title: "About Us", link: "/about"}
  ];
    useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
  }, [isSidebarOpen]);
   return ( <BrowserRouter>
      <Navbar
  onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
  isOpen={isSidebarOpen}
/>
<Routes>
<Route path="/" element={<> <Header hImage = {back45}/> <Home /> </>} />
        <Route path="/about" element={<About />} />
         <Route path="/collections/:categoryName" element={<CategoryPage />}/>\
         <Route path="/product/:id" element={<ProductDetail />}/>
     </Routes>

      {isSidebarOpen && <Sidebar
  cats={cat}
  className={isSidebarOpen ? "sidebar open" : "sidebar"}
  onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
/> }
      
     
     
    </BrowserRouter>
  );
}

export default App;
