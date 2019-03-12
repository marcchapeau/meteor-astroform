Package.describe({
  name: 'chap:astroform',
  version: '0.0.1',
  summary: 'Easily create forms with jagi:astronomy',
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('1.7')
  api.use([
    'ecmascript',
    'modules',
    'reactive-dict',
    'reactive-var',
    'templating',
    'jagi:astronomy'
  ], 'client')
  api.mainModule('index.js', 'client')
})
