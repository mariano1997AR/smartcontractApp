
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HeadProvider } from 'react-head'
import './index.css'
import { Layout } from './components/Layout/Layout.tsx'
import { Inicio } from './pages/Inicio/Inicio.tsx'
import { Agendar } from './pages/Agendar/Agendar.tsx'

const router = createBrowserRouter([
  {
     path:"/",
     element:<Layout />,
     children:[
        {index:true,element:<Inicio />},
        {path:"inicio",element:<Inicio />},
        {path:"agendar",element:<Agendar />}
     ]
  }
]);

createRoot(document.getElementById('root')!).render(
   <HeadProvider>
       <RouterProvider router={router} />
   </HeadProvider>
)
