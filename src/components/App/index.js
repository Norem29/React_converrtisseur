// == Import
import Header from '../Header/Header';
import Currencies from '../Currencies/Currencies';
import Amount from '../Amount/Amount';

import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Currencies />
    <Amount />
  </div>
);

// == Export
export default App;
