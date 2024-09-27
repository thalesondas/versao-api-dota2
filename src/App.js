import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Main from './components/Main.js';
import { DataProvider } from './context/DataContext.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Header />
      <DataProvider>
        <Main />
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
