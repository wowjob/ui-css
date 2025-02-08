import { build } from 'bun'

const outdir = './dist/css'
const banner = '/* Built by Marian Zburlea */'
const footer = '/* Built by Marian Zburlea */'

const atom = await build({
  entrypoints: ['./src/css/ui-atom.css'],
  outdir,
  banner,
  footer,
})

const molecule = await build({
  entrypoints: ['./src/css/ui-molecule.css'],
  outdir,
  banner,
  footer,
})

const organism = await build({
  entrypoints: ['./src/css/ui-organism.css'],
  outdir,
  banner,
  footer,
})

const ui = await build({
  entrypoints: ['./src/css/ui.css'],
  outdir,
  banner,
  footer,
})
