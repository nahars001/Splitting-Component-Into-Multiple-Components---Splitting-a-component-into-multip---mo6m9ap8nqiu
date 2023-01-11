import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
function App() {
    return (
        <div className="container">
            <Header id="my-header" content = "This is the header" > </Header>
            <main id="my-main">This is the main</main>
            <footer id="my-footer">This is the footer</footer>
        </div>
    );
}

export default App;
