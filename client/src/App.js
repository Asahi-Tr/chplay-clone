import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Header from './components/Header';
import Container from './components/Container';

import './base.css';
import './main.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Container />
      </div>
    </Router>

  );
}

export default App;
