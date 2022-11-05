import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '../views/Main'
import PersonForm from './components/PersonForm'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path='/home' default />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
