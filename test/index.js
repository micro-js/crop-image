/**
 * Imports
 */

var cropImage = require('..')
var test = require('tape')

/**
 * Test image
 */

var dataUrl = 'data:image/png;base64,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'

/**
 * Tests
 */

test('should work', function (t) {
  var img = document.createElement('img')
  img.setAttribute('src', dataUrl)

  var blob = cropImage(img, 0, 0, 10, 10)

  t.ok(blob instanceof Blob)
  t.end()
})