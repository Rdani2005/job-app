// ----------------------- Libraries --------------------------
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// ---------------------- views -------------------------------
import Job from './views/Job';
import Home from './views/Home';
import Login from './views/Login';
import SignUp from './views/SignUp';
import AplyJob from './views/AplyJob';
import Jobs from './views/Jobs';
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
                <Route path='/home' element={<Jobs/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/SignUp' element={<SignUp/>}></Route>
                <Route path='/jobs/job/:id' element={<Job/>}></Route>
                <Route path='/jobs/add' element={<Home/>} ></Route>
                <Route path='/jobs/apply' element={<AplyJob/>}></Route>
            </Routes>
            <Footer></Footer>
        </Router>
    );
}

export default App;
