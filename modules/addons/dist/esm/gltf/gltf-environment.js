import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import { Texture2D, TextureCube, loadImage } from '@luma.gl/core';

var GLTFEnvironment = function () {
  function GLTFEnvironment(gl, _ref) {
    var brdfLutUrl = _ref.brdfLutUrl,
        getTexUrl = _ref.getTexUrl;

    _classCallCheck(this, GLTFEnvironment);

    this.gl = gl;
    this.brdfLutUrl = brdfLutUrl;
    this.getTexUrl = getTexUrl;
  }

  _createClass(GLTFEnvironment, [{
    key: "makeCube",
    value: function makeCube(_ref2) {
      var id = _ref2.id,
          getTextureForFace = _ref2.getTextureForFace,
          parameters = _ref2.parameters;
      var pixels = {};
      TextureCube.FACES.forEach(function (face) {
        pixels[face] = getTextureForFace(face);
      });
      return new TextureCube(this.gl, {
        id: id,
        mipmaps: false,
        parameters: parameters,
        pixels: pixels
      });
    }
  }, {
    key: "getDiffuseEnvSampler",
    value: function getDiffuseEnvSampler() {
      var _this = this;

      if (!this._DiffuseEnvSampler) {
        var _parameters;

        this._DiffuseEnvSampler = this.makeCube({
          id: 'DiffuseEnvSampler',
          getTextureForFace: function getTextureForFace(dir) {
            return loadImage(_this.getTexUrl('diffuse', dir, 0));
          },
          parameters: (_parameters = {}, _defineProperty(_parameters, 10242, 33071), _defineProperty(_parameters, 10243, 33071), _defineProperty(_parameters, 10241, 9729), _defineProperty(_parameters, 10240, 9729), _parameters)
        });
      }

      return this._DiffuseEnvSampler;
    }
  }, {
    key: "getSpecularEnvSampler",
    value: function getSpecularEnvSampler() {
      var _this2 = this;

      if (!this._SpecularEnvSampler) {
        var _parameters2;

        this._SpecularEnvSampler = this.makeCube({
          id: 'SpecularEnvSampler',
          getTextureForFace: function getTextureForFace(dir) {
            var imageArray = [];

            for (var lod = 0; lod <= 9; lod++) {
              imageArray.push(loadImage(_this2.getTexUrl('specular', dir, lod)));
            }

            return imageArray;
          },
          parameters: (_parameters2 = {}, _defineProperty(_parameters2, 10242, 33071), _defineProperty(_parameters2, 10243, 33071), _defineProperty(_parameters2, 10241, 9987), _defineProperty(_parameters2, 10240, 9729), _parameters2)
        });
      }

      return this._SpecularEnvSampler;
    }
  }, {
    key: "getBrdfTexture",
    value: function getBrdfTexture() {
      if (!this._BrdfTexture) {
        var _parameters3;

        this._BrdfTexture = new Texture2D(this.gl, {
          id: 'brdfLUT',
          parameters: (_parameters3 = {}, _defineProperty(_parameters3, 10242, 33071), _defineProperty(_parameters3, 10243, 33071), _defineProperty(_parameters3, 10241, 9729), _defineProperty(_parameters3, 10240, 9729), _parameters3),
          pixelStore: _defineProperty({}, this.gl.UNPACK_FLIP_Y_WEBGL, false),
          data: loadImage(this.brdfLutUrl)
        });
      }

      return this._BrdfTexture;
    }
  }, {
    key: "delete",
    value: function _delete() {
      if (this._DiffuseEnvSampler) {
        this._DiffuseEnvSampler["delete"]();

        this._DiffuseEnvSampler = null;
      }

      if (this._SpecularEnvSampler) {
        this._SpecularEnvSampler["delete"]();

        this._SpecularEnvSampler = null;
      }

      if (this._BrdfTexture) {
        this._BrdfTexture["delete"]();

        this._BrdfTexture = null;
      }
    }
  }]);

  return GLTFEnvironment;
}();

export { GLTFEnvironment as default };
//# sourceMappingURL=gltf-environment.js.map