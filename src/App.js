import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Dashboard from './components/pages/Dashboard';
import Sidebar from './components/Sidebar';
//import Dashboard from './components/Dashboard.js'
import './components/style.css'

function App() {
  return (
    <div>
      {/* <Dashboard/> */}
        <Header/>
        <Sidebar/>
        <Dashboard/>
        <Footer/>
    </div>
  );
}

export default App;
 