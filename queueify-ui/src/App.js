import './App.css';
import { Footer } from './Pages/Components/Foother/Footer';
import { Header } from './Pages/Components/Header/Header';

function App() {
  return (
    <div className='container'>
      <Header />
      <div className='content'>content</div>
      <Footer />
    </div>
  );
}

export default App;
