import React, { useState } from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import Nav from './Components/Nav';

function App() {
    const [display,setDisplay] = useState(true);

    return (
        <div className="app">
            <Nav setDisplay={() => setDisplay(true)} display={display}  />
            <div id="site">
            <Header display={display} setDisplay={() => setDisplay(false)} display={display} />
            <Main display={display} />
            </div>
            <Footer display={display} />
            
        </div>
    )
}

export default App
