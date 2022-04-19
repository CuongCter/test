
import { useEffect, useState } from 'react';
import './App.css';
import ChangeColor from './component/ChangeColor';
import   SetName  from './component/SetName';
import Counter from './component/Counter';
import Home from './component/Home';
import ProductList from './component/ProductList';
import {BrowserRouter , Routes ,Route ,Link} from 'react-router-dom'
import Main from './component/Main';
import Content from './component/Content';

function App() {
  const a = 'Chuyển màu'
  const [counter, setCounter] = useState(1)
  const [name , setName] = useState('HIT');
   const [color , setColor] = useState('red');
  
  return (
      
     //<Content/>
    <Home/>
  );
}

export default App;
