import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './login'
import Home from './home'
import HomeLayout from '@/layouts/home.layout'
import AuthLayout from '@/layouts/auth.layout'

const router = createBrowserRouter([
  {
    path: '',
    Component: HomeLayout,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: 'auth',
    Component: AuthLayout,
    children: [
      {
        path: 'login',
        index: true,
        element: <Login />,
      },
    ],
  },
])

export default () => {
  return <RouterProvider router={router} />
}
