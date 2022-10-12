import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/home/Home';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/topics/Topics';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>,
        },
        {
          path: '/topics/:topicsId',
          loader: async({params}) =>{
            // console.log(params.topicsId);
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicsId}`)
          },
          element: <Topics></Topics>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ],

    },
    {
      path:'*',
      element: <div><h1>404 page</h1></div>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
