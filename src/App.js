import {BrowserRouter , Routes , Route} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import Editform from './component/Editform';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
         <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<Editform/>} path='/edituser/:id'/>

         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
