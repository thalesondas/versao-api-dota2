import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
