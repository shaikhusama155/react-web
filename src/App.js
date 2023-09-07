import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Slider from "./component/Slider";
import Cards from "./component/Cards";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <br />
      <br />
      <Cards/>
    </div>
  );
}

export default App;
