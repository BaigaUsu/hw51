import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Catalog } from './Catalog';
import { ItemPage } from './ItemPage';
const router = createBrowserRouter([
  {path: '/', element: <App/>,},

  { // 3 пункт, загрузка данных из api через loader
    path: 'catalog', 
    element: <Catalog/>, 
    loader: async () => {
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c');
      const data = await res.json();
      return data.meals.slice(0, 8);
    },
  },

  { // 5 пункт, загрузка отдельной страницы каждого элемента
    path: '/catalog/:itemId', 
    element: <ItemPage/>,
    loader: async ({params}) => {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.itemId}`,);
      const data = await res.json();
      return data.meals[0];
       
    },
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
