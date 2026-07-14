import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './components/layout/RootLayout'

const Home = lazy(() => import('./pages/Home'))
const Plumbing = lazy(() => import('./pages/Plumbing'))
const GasServices = lazy(() => import('./pages/GasServices'))
const AirConditioning = lazy(() => import('./pages/AirConditioning'))
const About = lazy(() => import('./pages/About'))
const Areas = lazy(() => import('./pages/Areas'))
const Testimonials = lazy(() => import('./pages/Testimonials'))
const Contact = lazy(() => import('./pages/Contact'))
const Privacy = lazy(() => import('./pages/Privacy'))
const NotFound = lazy(() => import('./pages/NotFound'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Suspense fallback={null}><Home /></Suspense> },
      { path: 'plumbing', element: <Suspense fallback={null}><Plumbing /></Suspense> },
      { path: 'gas-services', element: <Suspense fallback={null}><GasServices /></Suspense> },
      { path: 'air-conditioning', element: <Suspense fallback={null}><AirConditioning /></Suspense> },
      { path: 'about', element: <Suspense fallback={null}><About /></Suspense> },
      { path: 'areas', element: <Suspense fallback={null}><Areas /></Suspense> },
      { path: 'testimonials', element: <Suspense fallback={null}><Testimonials /></Suspense> },
      { path: 'contact', element: <Suspense fallback={null}><Contact /></Suspense> },
      { path: 'privacy', element: <Suspense fallback={null}><Privacy /></Suspense> },
      { path: '*', element: <Suspense fallback={null}><NotFound /></Suspense> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
