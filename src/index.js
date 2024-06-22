import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShopContextProvider from './Context/ShopContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <ShopContextProvider>
    <App />
    </ShopContextProvider>
);

/*By wrapping App with ShopContextProvider, the App component and all its children have access to the context value provided by ShopContext. This means any component within App can access the all_product data without needing to pass it down through props manually. */


