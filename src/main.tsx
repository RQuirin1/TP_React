
import './index.css'
import {createBrowserRouter} from "react-router";
import {App} from "./App.tsx";
import {Home} from "./pages/Home.tsx";
import {Page1} from "./pages/Page 1.tsx";
import {Page2} from "./pages/Page 2.tsx";
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router";
import React from 'react';

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {path:"/",element:<Home/>},
            {path:"lienPage1", element:<Page1/>},
            {path:"lienPage2", element:<Page2/>}
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)
