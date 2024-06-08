import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductsContext from './Context/ProductsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <ProductsContext>
    <App />
    </ProductsContext>
); 

reportWebVitals();
