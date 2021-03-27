import React, { useContext, createContext, useState } from 'react';
import Login from './src/screens/Login';
import Products from './src/screens/Product/index';
import Rootnavigation from './src/navigations';
import ProductDetail from './src/screens/ProductDetail/index';
import Context from './src/screens/Context';
import AddJob from './src/screens/AddJob/index';

export default function App() {
  const [context, setContext] = useState([])

  return (
    <Context.Provider value={[context, setContext]}>
       <Rootnavigation></Rootnavigation>
    </Context.Provider>
  
  );
}