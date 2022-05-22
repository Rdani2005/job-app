// ----------------------- Libraries --------------------------
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// ---------------------- views -------------------------------
import Job from './views/Job';
import Home from './views/Home';
import Login from './views/Login';
import SignUp from './views/SignUp';
import AplyJob from './views/AplyJob';
// --------------- Components --------------------------------
import Header from './components/screen/Header'
import Footer from './components/screen/Footer'
// --------------- Main Component ----------------------------
function App() {
    return (

        <Router>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/SignUp' element={<SignUp/>}></Route>
                <Route path='/jobs' element={<Job/>}></Route>
                <Route path='/jobs/add' element={<Home/>} ></Route>
                <Route path='/jobs/aply/:id' element={<AplyJob/>}></Route>
            </Routes>
            <Footer></Footer>
        </Router>
    );
}

export default App;
