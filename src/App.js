
import { useLocation } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ResumeCreaterPage from './pages/ResumeCreaterPage';
import { useEffect } from 'react';

function App() {
  const location = useLocation()
  console.log(location, "loaction")
  useEffect(() => {

  }, [location])
  return (
    <div className="App">
      {location.pathname == "/" && < HomePage />}
      {location.pathname == "/create" && <ResumeCreaterPage />}
    </div>
  );
}

export default App;
