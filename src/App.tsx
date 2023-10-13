import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>

        <Route path="/" element={ <Home /> } />
      </Routes>
    </>
  );
}

export default App;
