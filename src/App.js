import './App.css';
import Home from './containers/Home';
import FooterComponent from './components/Footer';
import HeaderComponent from './components/Header';

function App() {
  return (
    <div className='App'>
      <HeaderComponent homedata="Cognizant QE Technology Stack" />
      <div className='Container'>
        <Home />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
