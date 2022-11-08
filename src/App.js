import './App.css';
import Home from './containers/Home';
import ChildrenContainer from './containers/ChildrenContainer';
import FooterComponent from './components/Footer';
import HeaderComponent from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import { Link } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import {motion} from 'framer-motion';
function App() {

  const reloadHome = () =>{
    window.location.reload();
  }

  return (
    <Router>
      <div className='App'>
        <HeaderComponent homedata="Quality Engineering Technology Stack" />
        <div className='Container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='testing' element={<ChildrenContainer />} />
          </Routes>
        </div>
        <motion.div style={{ marginLeft: '1%', cursor: 'move' }} drag dragConstraints={{ top: '10px', bottom: '30px' }}
        >
          <Fab color="info" aria-label="add">
            <Link to='/home' onClick={reloadHome}><HomeRoundedIcon/></Link>
          </Fab>
        </motion.div>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
