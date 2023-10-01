
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './routing';

function App() {
  return (
    <BrowserRouter basename="/">
       <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
