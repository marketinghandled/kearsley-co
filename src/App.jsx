import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './components/layout/RootLayout'
import { routes, notFoundRoute } from './routesConfig'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      ...routes.map(({ path, element }) =>
        path === '' ? { index: true, element } : { path, element }
      ),
      { path: notFoundRoute.path, element: notFoundRoute.element },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
