
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./capital-dex-sdk.cjs.production.min.js')
} else {
  module.exports = require('./capital-dex-sdk.cjs.development.js')
}
