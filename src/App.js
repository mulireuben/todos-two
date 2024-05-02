import './App.css';
import Hello from './components/Hello';
import Taska from './components/Taska';
import Counter from './components/Counter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todo from './components/todos/Todo';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hello />} />
          <Route path='/taska' element={<Taska />} />
          <Route path ='/Counter' element={<Counter/>}/>
        </Routes>
      </BrowserRouter> */}
      {/* <Counter /> */}
      <Header />
      <Todo />
    </div>
  );
}

export default App;
