import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const distDir = path.join(root, 'dist')

const { render, routePaths } = await import(
  path.join(root, 'dist-ssr', 'entry-server.js')
)

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')

for (const urlPath of routePaths) {
  const { appHtml, head } = render(urlPath)

  const html = template
    .replace(/<!--SEO:START-->[\s\S]*?<!--SEO:END-->/, head)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  const isRoot = urlPath === '/'
  const outDir = isRoot ? distDir : path.join(distDir, urlPath.replace(/^\//, ''))
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'index.html'), html)

  // Also emit a plain 404.html at the site root for hosts (Netlify, GitHub
  // Pages, S3, etc.) that serve it automatically on an unmatched path.
  if (urlPath === '/404') {
    fs.writeFileSync(path.join(distDir, '404.html'), html)
  }

  console.log(`prerendered ${outDir === distDir ? '/' : urlPath}`)
}

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
console.log(`\nDone. ${routePaths.length} routes prerendered into dist/`)
