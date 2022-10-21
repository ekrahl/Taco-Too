import Navbar from './components/Navbar/Navbar';
import { About, Contact, Header, Footer, Menu } from './containers'
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
