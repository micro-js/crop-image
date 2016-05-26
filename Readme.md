
# crop-image

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Crop an image using the browser&#x27;s canvas element

## Installation

    $ npm install @f/crop-image

## Usage

```js
var cropImage = require('@f/crop-image')

function cropAndUpload (img, x, y, width, height) {
  const blob = cropImage(img, x, y, width, height)
  return upload(blob)
}

```

## API

### cropImage(arg)

  * `img` an `<img>` element
  * `x` the distance along the x axis to begin cropping
  * `y` the distance along the y axis to begin cropping
  * `width` the width of the section you want to crop
  * `height` the height of the section you want to crop
  * `scaleWidth` scale the final image up/down to this width (optional - defaults to `width`)
  * `scaleHeight` scale the final image up/down to this height (optional - defaults to `height`)

**Returns:** A blob containing the cropped image data

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/crop-image.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/crop-image
[git-image]: https://img.shields.io/github/tag/micro-js/crop-image.svg?style=flat-square
[git-url]: https://github.com/micro-js/crop-image
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/crop-image.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/crop-image
