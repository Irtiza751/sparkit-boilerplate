import { Outlet } from 'react-router'

export default function HomeLayout() {
  return (
    <main>
      <h1>Home layout</h1>
      <Outlet />
    </main>
  )
}
