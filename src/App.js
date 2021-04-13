// Importing the css file from the same directory. Using the css file was the styling method used in this project instead of inline styles as this looks cleaner
import './App.css';

// Importing Home component which is the page that handles the rendering of the YOLO implementation.
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
