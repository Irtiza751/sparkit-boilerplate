import { createRootRoute, createRoute, Outlet } from '@tanstack/react-router'
import Home from '@/modules/home'
import About from '@/modules/about'
import { RootLayout } from '../layouts/RootLayout'
import Login from '@/modules/login'
import { Header } from '@/shared/components/Header'
import { LoginLayout } from '@/layouts/LoginLayout'

// 1. Create a root route
const rootRoute = createRootRoute({
  component: () => (
    <RootLayout>
      <Outlet />
    </RootLayout>
  ),
})

// 2. Create child routes
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => (
    <>
      <Header />
      <Home />
    </>
  ),
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: () => (
    <>
      <Header />
      <About />
    </>
  ),
})

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: () => (
    <LoginLayout>
      <Login />
    </LoginLayout>
  ),
})

// 3. Create a route tree
const routeTree = rootRoute.addChildren([homeRoute, aboutRoute, loginRoute])

export { routeTree }
