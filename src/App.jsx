import './App.css';
import {useState} from "react";
// import Aaa from "./aaa/aaa";

function App() {
    const [isShow, setIsShow] = useState(false);

    const toggleMenu = () => setIsShow(!isShow);

    return (
        <>
            {/*<Example />*/}
            {/*<Aaa />*/}
            <div className="app">
                <button className={`item item-1 ${isShow ? 'show' : 'hide'}`}>
                    <span>Another one</span>
                    <span className={`icon ${isShow ? 'animation' : ''}`}>icon</span>
                </button>
                <button className={`item item-2 ${isShow ? 'show' : 'hide'}`}>
                    <span>Another</span>
                    <span className={`icon ${isShow ? 'animation' : ''}`}>icon</span>
                </button>
                <button className={`item item-3 ${isShow ? 'show' : 'hide'}`}>
                    <span>One</span>
                    <span className={`icon ${isShow ? 'animation' : ''}`}>icon</span>
                </button>
                <button className={`item item-4 ${isShow ? 'show' : 'hide'}`}>
                    <span>Three Three Three</span>
                    <span className={`icon ${isShow ? 'animation' : ''}`}>icon</span>
                </button>
                <button className={`item item-5 ${isShow ? 'show' : 'hide'}`}>
                    <span>texttexttext</span>
                    <span className={`icon ${isShow ? 'animation' : ''}`}>icon</span>
                </button>

                <button className="menu" onClick={toggleMenu}/>
            </div>
        </>
    );
}

export default App;
