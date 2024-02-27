import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


const Applayout = ()=> {
    
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
} 

const root = ReactDOM.createRoot(document.querySelector("body")); 
root.render(<Applayout />)