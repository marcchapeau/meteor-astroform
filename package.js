Package.describe({
  name: 'chap:astroform',
  version: '0.0.1',
  summary: 'Easily create forms with jagi:astronomy',
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('1.8.0.2')
  api.use([
    'ecmascript',
    'modules',
    'reactive-dict',
    'reactive-var',
    'templating@1.3.2',
    'jagi:astronomy@2.7.1'
  ], 'client')
  api.mainModule('index.js', 'client')
})
