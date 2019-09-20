import { assert } from '../utils';
var pathPrefix = '';
export function setPathPrefix(prefix) {
  pathPrefix = prefix;
}
export function loadFile(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  assert(typeof url === 'string');
  url = pathPrefix + url;
  var dataType = options.dataType || 'text';
  return fetch(url, options).then(function (res) {
    return res[dataType]();
  });
}
export function loadImage(url, opts) {
  assert(typeof url === 'string');
  url = pathPrefix + url;
  return new Promise(function (resolve, reject) {
    try {
      var image = new Image();

      image.onload = function () {
        return resolve(image);
      };

      image.onerror = function () {
        return reject(new Error("Could not load image ".concat(url, ".")));
      };

      image.crossOrigin = opts && opts.crossOrigin || 'anonymous';
      image.src = url;
    } catch (error) {
      reject(error);
    }
  });
}
//# sourceMappingURL=load-file.js.map