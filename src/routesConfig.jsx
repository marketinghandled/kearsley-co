import Home from './pages/Home'
import Plumbing from './pages/Plumbing'
import GasServices from './pages/GasServices'
import AirConditioning from './pages/AirConditioning'
import About from './pages/About'
import Areas from './pages/Areas'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'

// Shared between the client router (App.jsx) and the prerender script
// (scripts/prerender.mjs) so both build from the same route table.
export const routes = [
  { path: '', urlPath: '/', element: <Home /> },
  { path: 'plumbing', urlPath: '/plumbing', element: <Plumbing /> },
  { path: 'gas-services', urlPath: '/gas-services', element: <GasServices /> },
  { path: 'air-conditioning', urlPath: '/air-conditioning', element: <AirConditioning /> },
  { path: 'about', urlPath: '/about', element: <About /> },
  { path: 'areas', urlPath: '/areas', element: <Areas /> },
  { path: 'contact', urlPath: '/contact', element: <Contact /> },
  { path: 'privacy', urlPath: '/privacy', element: <Privacy /> },
]

export const notFoundRoute = { path: '*', urlPath: '/404', element: <NotFound /> }
