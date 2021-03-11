import Title from './components/Title';
import VariedEventuali from './components/VariedEventuali';
import './App.css';

function App() {
  return (
    <div className="App">
      <Title page_title='Un primo, modesto tentativo...' description='Chiamiamolo il mio primo programma di CSS in JS...' />
      <VariedEventuali stuff='Ciao' double_stuff='ti saluto' />
    </div>
  );
}

export default App;
