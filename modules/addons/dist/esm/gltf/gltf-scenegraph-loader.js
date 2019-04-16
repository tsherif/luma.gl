import _regeneratorRuntime from "@babel/runtime/regenerator";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import { assert } from '@luma.gl/core';
import { GLTFLoader } from '@loaders.gl/gltf';
import createGLTFObjects from './create-gltf-objects';

function parse(_x, _x2, _x3, _x4) {
  return _parse.apply(this, arguments);
}

function _parse() {
  _parse = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(data, options, uri, loader) {
    var gltf, gltfObjects;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            assert(options.gl);
            _context.next = 3;
            return GLTFLoader.parse(data, _objectSpread({}, options, {
              uri: uri,
              decompress: true
            }));

          case 3:
            gltf = _context.sent;
            gltfObjects = createGLTFObjects(options.gl, gltf, options);

            if (!options.waitForFullLoad) {
              _context.next = 8;
              break;
            }

            _context.next = 8;
            return waitForGLTFAssets(gltfObjects);

          case 8:
            return _context.abrupt("return", Object.assign({
              gltf: gltf
            }, gltfObjects));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _parse.apply(this, arguments);
}

function waitForGLTFAssets(_x5) {
  return _waitForGLTFAssets.apply(this, arguments);
}

function _waitForGLTFAssets() {
  _waitForGLTFAssets = _asyncToGenerator(_regeneratorRuntime.mark(function _callee2(gltfObjects) {
    var remaining;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            remaining = [];
            gltfObjects.scenes.forEach(function (scene) {
              scene.traverse(function (model) {
                Object.values(model.model.program.uniforms).forEach(function (uniform) {
                  if (uniform.loaded === false) {
                    remaining.push(uniform);
                  }
                });
              });
            });
            _context2.next = 4;
            return waitWhileCondition(function () {
              return remaining.some(function (uniform) {
                return !uniform.loaded;
              });
            });

          case 4:
            return _context2.abrupt("return", _context2.sent);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _waitForGLTFAssets.apply(this, arguments);
}

function waitWhileCondition(_x6) {
  return _waitWhileCondition.apply(this, arguments);
}

function _waitWhileCondition() {
  _waitWhileCondition = _asyncToGenerator(_regeneratorRuntime.mark(function _callee3(condition) {
    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!condition()) {
              _context3.next = 5;
              break;
            }

            _context3.next = 3;
            return new Promise(function (resolve) {
              return window.requestAnimationFrame(resolve);
            });

          case 3:
            _context3.next = 0;
            break;

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _waitWhileCondition.apply(this, arguments);
}

export default {
  name: 'GLTF Scenegraph Loader',
  extensions: ['gltf', 'glb'],
  parse: parse
};
//# sourceMappingURL=gltf-scenegraph-loader.js.map