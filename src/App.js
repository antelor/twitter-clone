import './App.css';
import TweetsContainer from './components/TweetsContainer';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <TweetsContainer />
      <Rightbar />
    </div>
  );
}

export default App;
