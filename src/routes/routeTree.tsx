import { createRootRoute, Outlet } from '@tanstack/react-router'
import { loginRoute } from '@/modules/login'
import { homeRoute } from '@/modules/home'
import { aboutRoute } from '@/modules/about'

export const rootRoute = createRootRoute({
  component: () => (
    <main className="min-h-screen">
      <Outlet />
    </main>
  ),
})

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute, loginRoute])

export { routeTree }
