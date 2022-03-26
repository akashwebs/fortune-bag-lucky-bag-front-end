import './App.css';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
import QusAnswer from './QusAnswer/QusAnswer';

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Products></Products>
      <QusAnswer></QusAnswer>
    </div>
  );
}

export default App;
