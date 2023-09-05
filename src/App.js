import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Slider from './component/Slider';
import  Image  from './component/img/1.jpg';
import  Image1  from './component/img/2.avif';
import  Image2  from './component/img/3.avif';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Slider/>
    </div>
  );
}

export default App;
