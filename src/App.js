
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topflash from './components/top-flash';
import Page2 from './components/page2/page2';
import Page3 from './components/page3/page3';
import Page4 from './components/page4/page4';
import Page5 from './components/page5/page5';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Topflash/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      <Footer/>
    </div>
  );
}

export default App;
