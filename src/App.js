import './App.css';
import Header from './components/Header';
import Services from './components/Services';
import Choose from './components/Choose';
import Value from './components/Value';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Choose />
      <Value />
      <Footer />
    </div>
  );
}

export default App;
