import logo from '../assets/logo.svg';
import '../styles/App.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Esta es una prueba tecnica para <code>AstecL</code> realizada por <code>Luis Ernesto Zuniga</code>.
        </p>
        <Link
          className="App-link"
          to='/table'
        >
          Ir a la Prueba Tecnica
        </Link>
        <a
          className="App-link"
          href="https://ernestozuniga.github.io/?lang=es-Es"
          target="_blank"
          rel="noopener noreferrer"
        >
          Curriculum Vitae Ernesto Zuniga
        </a>
      </header>
    </div>
  );
}

export default Home;
