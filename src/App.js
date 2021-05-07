import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import Nav from './Components/Nav';

function App() {

    return (
        <div className="app">
            <Nav />
            <div id="site">
            <Header />
            <Main />
            </div>
            <Footer />
            
        </div>
    )
}

export default App
