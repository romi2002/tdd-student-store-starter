import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductDetail from "../Product/ProductDetail/ProductDetail";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
          <Routes>
              <Route path="/" element={
                  <>
                      <Navbar />
                      <Sidebar />
                      <Home />
                  </>
              } />
              <Route path="products">
                  <Route path={":productId"} element={<ProductDetail/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}
