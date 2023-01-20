import './App.css';
import CardList from "./components/CardList"
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <CardList />
      </header>
    </div>
  );
}

export default App;
