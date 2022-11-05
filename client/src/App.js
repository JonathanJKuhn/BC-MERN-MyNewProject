import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Main from './views/Main'
import Detail from './components/Detail'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Navigate to='/people'/>} path='/' />
          <Route element={<Main/>} path='/people' />
          <Route element={<Detail/>} path='/people/:id' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
