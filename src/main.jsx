import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Contact from './pages/contact.jsx'
import Junk from './pages/junk.jsx'
import JunkNew from './pages/JunkCreate.jsx'
import JunkRowEdit from './pages/JunkRowEdit.jsx'
import JunkItemShow from './pages/JunkItemShow.jsx'
import {loader as JunkItemShowLoader} from './pages/JunkItemShow.jsx'
import {loader as JunkRowEditLoader} from './pages/JunkRowEdit.jsx'
// import {loader as AppLoader} from './App.jsx'
import Template from './pages/template.jsx'
import Index from './pages/index.jsx';
import ErrorPage from './pages/ErrorPage.jsx'
import Test from './pages/test.jsx'
import Admin from './pages/Admin.jsx'

import './index.css'

import '@aws-amplify/ui-react/styles.css'
import config from './aws-exports.js'
import { Amplify } from 'aws-amplify'
import { getCurrentUser } from 'aws-amplify/auth';
import { ThemeProvider, createTheme } from '@aws-amplify/ui-react'

import { ProtectedLayout } from './components/ProtectedLayout.jsx'

Amplify.configure(config)

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: AppLoader,
    children: [
      { index: true, element: <Index /> },
      { path: '/junk', element: <Junk /> },
      { path: '/about', element: <Contact /> },
      { path: '/contact', element: <Contact /> },
      { path: '/junkcreate', element: <JunkNew /> },
      { path: '/junkitemshow/:id', element: <JunkItemShow />, loader: JunkItemShowLoader},
      { path: '/template', element: <Template /> },      
      { path: '/admin', element: <Admin />},
      { path: '/admin', element: <Admin />},
      { path: '/rowedit/:id', 
          element: <JunkRowEdit />, 
          loader: JunkRowEditLoader 
      },

      { path: '*', element: < ErrorPage />}
    ],
  },
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>,
)
