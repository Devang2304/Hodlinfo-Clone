import { useState } from 'react';
import BelowHeader from './components/BelowHeader/BelowHeader';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PlatformPrice from './components/PlatformPrice/PlatformPrice';

import data from './data'

import './App.scss'

const App = () => {

    const [platforms] = useState(data)
    const [lightMode, setlightMode] = useState(false)

    return (
        <div style={{
            backgroundColor: lightMode ? "#fff" : "#191d28",
            // color: lightMode ? "#000" : "#fff",
            transition: "all .5s"
        }}>
            <Header 
                lightMode={lightMode} 
                setlightMode={setlightMode} 
            />
            <BelowHeader 
                lightMode={lightMode} 
            />

            <PlatformPrice 
                platforms={platforms} 
                lightMode={lightMode} 
            />
            <Footer />
        </div>
    )
}

export default App

