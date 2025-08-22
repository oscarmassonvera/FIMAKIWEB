
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/FIMAKIWEB/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/FIMAKIWEB"
  },
  {
    "renderMode": 2,
    "route": "/FIMAKIWEB/quienes-somos"
  },
  {
    "renderMode": 2,
    "route": "/FIMAKIWEB/programas-academicos"
  },
  {
    "renderMode": 2,
    "route": "/FIMAKIWEB/contacto"
  },
  {
    "renderMode": 2,
    "route": "/FIMAKIWEB/testimonios"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 14707, hash: 'e611648440dc1362fbc1b33bac3ede0750b27bc11e4d0fafcac9435310ee5226', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 10330, hash: '7945475450f3426e88f6975ab5e46006b2f3f72dc48d07e8551b33ea5ecf7629', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'quienes-somos/index.html': {size: 38718, hash: '2545ff9c0c54ead4752d55ee4c28b8348a91aac1fce2a08272d1e8b2e7f04e85', text: () => import('./assets-chunks/quienes-somos_index_html.mjs').then(m => m.default)},
    'programas-academicos/index.html': {size: 34029, hash: 'fe2746002ab5fbb209e0e4ecac31893dd021779757b08f23f1893810329f4f29', text: () => import('./assets-chunks/programas-academicos_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 30154, hash: '56edad4e96e9dca078c861468bd34f60c0762555c8d20b9826e322acf8d9c7f7', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'index.html': {size: 40435, hash: '0c4a75238eb552a5be531c78c1ef4414e63270af424fe7dba963fb84f02e391d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'testimonios/index.html': {size: 34504, hash: 'ead2fd534fa3740718569bd149f0df82929241b473eb8519992837ee778f401a', text: () => import('./assets-chunks/testimonios_index_html.mjs').then(m => m.default)},
    'styles-YPD7T5SI.css': {size: 226967, hash: 'TtSOtRXQAj8', text: () => import('./assets-chunks/styles-YPD7T5SI_css.mjs').then(m => m.default)}
  },
};
