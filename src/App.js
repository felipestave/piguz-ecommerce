import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path='/' element={<ItemListContainer greeting={'Esto es una lista de productos'} />} />
    <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Esta es una lista de productos'} />} />
    <Route path='/item/:id' element={<ItemDetailContainer />} />
    </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
