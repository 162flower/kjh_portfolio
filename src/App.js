import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';
import Top from './sub_component/Top';

function App() {

  return (
    <div className="App">
      <div className='App_in'>
            <Header />
            <Main />
            <Footer />
            <Top />
      </div>
    </div>
  );
}

export default App;
