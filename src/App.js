import './App.css';
import Dictionary from './components/Dictionary';
import Experts from './components/Experts';
import Footer from './components/Footer';
import Header from './components/Header';
import Rootmap from './components/Rootmap';
import Wallpaper from './components/Wallpaper';


function App() {
  return (
    <div className="App">
      <Header />
      <Wallpaper />
      <Rootmap />
      <Experts />
      <Dictionary />
      <Footer />
    </div>
  );
}

export default App;
