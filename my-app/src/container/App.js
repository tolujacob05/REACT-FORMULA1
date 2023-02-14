import First from './First';
import Home from './Home';
import About from './About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <>
            <Router>
                <div>
                    <Routes>
                        <Route exact path = '/' element={<First/>} />
                        <Route path='/home' element={<Home />} />   
                        <Route path='/about' element={<About />} />
                    </Routes>
                </div>
            </Router>
        </>
    )
}

export default App;