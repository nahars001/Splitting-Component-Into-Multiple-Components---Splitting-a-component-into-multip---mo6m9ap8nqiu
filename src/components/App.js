import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
function App() {
    return (
        <div className="container">
            <Header id="header" content = "This is the header" > </Header>
            <Main id="main" content= "This is the main"></Main>
            <Footer id="footer" content ="This is the footer" > </Footer>
        </div>
    );
}

export default App;
