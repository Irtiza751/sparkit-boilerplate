import { createRootRoute, createRoute, Outlet } from '@tanstack/react-router'
import { Home } from '@/modules/home'
import { About } from '@/modules/about'
import { RootLayout } from '../layouts/RootLayout'

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
  component: Home,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

// 3. Create a route tree
const routeTree = rootRoute.addChildren([homeRoute, aboutRoute])

export { routeTree }
