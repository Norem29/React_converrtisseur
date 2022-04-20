// == Import
import Header from '../Header/Header';
import Currencies from '../Currencies/Currencies';
import Amount from '../Amount/Amount';
import data from '../../../data/currencies';

import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Header baseCurrency={1} baseAmount='euro'/>
    <Currencies currencies={data}/>
    <Amount />
  </div>
);

// == Export
export default App;
