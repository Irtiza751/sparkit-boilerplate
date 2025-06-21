import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './home'
import HomeLayout from '@/layouts/home.layout'
import AuthLayout from '@/layouts/auth.layout'
import Protected from '@/shared/components/protected'
import { loginRoutes } from './login/login.routing'

const router = createBrowserRouter([
  {
    path: '',
    Component: HomeLayout,
    children: [
      {
        index: true,
        element: (
          <Protected>
            <Home />
          </Protected>
        ),
      },
    ],
  },
  {
    path: 'auth',
    Component: AuthLayout,
    children: [
      loginRoutes,
    ],
  },
])

export default () => {
  return <RouterProvider router={router} />
}
