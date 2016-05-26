/**
 * Modules
 */

var imgToCanvas = require('@f/img-to-canvas')
var toBlob = require('@f/dataurl-to-blob')

/**
 * Expose cropImage
 */

module.exports = cropImage

/**
 * cropImage
 */

function cropImage (img, x, y, width, height, scaleWidth, scaleHeight) {
  return toBlob(imgToCanvas(img, x, y, width, height, scaleWidth, scaleHeight).toDataURL('image/png'))
}
