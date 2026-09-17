import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import RootLayout from './components/layout/RootLayout'
import { routes, notFoundRoute } from './routesConfig'

// Plain path list, safe to import from a Node script post-build (no JSX left
// once Vite compiles this file for the SSR bundle).
export const routePaths = [...routes.map((r) => r.urlPath), notFoundRoute.urlPath]

export function render(urlPath) {
  const matched = routes.find((r) => r.urlPath === urlPath) || notFoundRoute
  const helmetContext = {}

  const appHtml = renderToString(
    <StaticRouter location={urlPath}>
      <HelmetProvider context={helmetContext}>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            {matched.path === '' ? (
              <Route index element={matched.element} />
            ) : (
              <Route path={matched.path} element={matched.element} />
            )}
          </Route>
        </Routes>
      </HelmetProvider>
    </StaticRouter>
  )

  const { helmet } = helmetContext
  const head = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ]
    .filter(Boolean)
    .join('\n  ')

  return { appHtml, head }
}
