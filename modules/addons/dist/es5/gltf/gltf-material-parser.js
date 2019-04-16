"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _core = require("@luma.gl/core");

var GLTFMaterialParser = function () {
  function GLTFMaterialParser(gl, _ref) {
    var attributes = _ref.attributes,
        material = _ref.material,
        pbrDebug = _ref.pbrDebug,
        imageBasedLightingEnvironment = _ref.imageBasedLightingEnvironment,
        lights = _ref.lights;
    (0, _classCallCheck2["default"])(this, GLTFMaterialParser);
    this.gl = gl;
    this.defines = {
      USE_TEX_LOD: 1,
      MANUAL_SRGB: 1,
      SRGB_FAST_APPROXIMATION: 1
    };
    this.uniforms = {
      u_Camera: [0, 0, 0],
      u_MetallicRoughnessValues: [1, 1]
    };
    this.parameters = {};
    this.generatedTextures = [];

    if (imageBasedLightingEnvironment) {
      this.uniforms.u_DiffuseEnvSampler = imageBasedLightingEnvironment.getDiffuseEnvSampler();
      this.uniforms.u_SpecularEnvSampler = imageBasedLightingEnvironment.getSpecularEnvSampler();
      this.uniforms.u_brdfLUT = imageBasedLightingEnvironment.getBrdfTexture();
      this.uniforms.u_ScaleIBLAmbient = [1, 1];
    }

    if (pbrDebug) {
      this.uniforms.u_ScaleDiffBaseMR = [0, 0, 0, 0];
      this.uniforms.u_ScaleFGDSpec = [0, 0, 0, 0];
    }

    this.defineIfPresent(attributes.NORMAL, 'HAS_NORMALS');
    this.defineIfPresent(attributes.TANGENT, 'HAS_TANGENTS');
    this.defineIfPresent(attributes.TEXCOORD_0, 'HAS_UV');
    this.defineIfPresent(imageBasedLightingEnvironment, 'USE_IBL');
    this.defineIfPresent(lights, 'USE_LIGHTS');
    this.defineIfPresent(pbrDebug, 'PBR_DEBUG');

    if (material) {
      this.parseMaterial(material);
    }
  }

  (0, _createClass2["default"])(GLTFMaterialParser, [{
    key: "defineIfPresent",
    value: function defineIfPresent(value, name) {
      if (value) {
        this.defines[name] = 1;
      }
    }
  }, {
    key: "parseTexture",
    value: function parseTexture(gltfTexture, name) {
      var define = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var parameters = gltfTexture.texture && gltfTexture.texture.sampler && gltfTexture.texture.sampler.parameters || {};
      var texture = new _core.Texture2D(this.gl, {
        id: gltfTexture.name || gltfTexture.id,
        parameters: parameters,
        pixelStore: (0, _defineProperty2["default"])({}, this.gl.UNPACK_FLIP_Y_WEBGL, false),
        data: gltfTexture.texture.source.getImageAsync()
      });
      this.uniforms[name] = texture;
      this.defineIfPresent(define, define);
      this.generatedTextures.push(texture);
    }
  }, {
    key: "parsePbrMetallicRoughness",
    value: function parsePbrMetallicRoughness(pbrMetallicRoughness) {
      if (pbrMetallicRoughness.baseColorTexture) {
        this.parseTexture(pbrMetallicRoughness.baseColorTexture, 'u_BaseColorSampler', 'HAS_BASECOLORMAP');
      }

      this.uniforms.u_BaseColorFactor = pbrMetallicRoughness.baseColorFactor || [1, 1, 1, 1];

      if (pbrMetallicRoughness.metallicRoughnessTexture) {
        this.parseTexture(pbrMetallicRoughness.metallicRoughnessTexture, 'u_MetallicRoughnessSampler', 'HAS_METALROUGHNESSMAP');
      }

      var _pbrMetallicRoughness = pbrMetallicRoughness.metallicFactor,
          metallicFactor = _pbrMetallicRoughness === void 0 ? 1 : _pbrMetallicRoughness,
          _pbrMetallicRoughness2 = pbrMetallicRoughness.roughnessFactor,
          roughnessFactor = _pbrMetallicRoughness2 === void 0 ? 1 : _pbrMetallicRoughness2;
      this.uniforms.u_MetallicRoughnessValues = [metallicFactor, roughnessFactor];
    }
  }, {
    key: "parseMaterial",
    value: function parseMaterial(material) {
      if (material.pbrMetallicRoughness) {
        this.parsePbrMetallicRoughness(material.pbrMetallicRoughness);
      }

      if (material.normalTexture) {
        this.parseTexture(material.normalTexture, 'u_NormalSampler', 'HAS_NORMALMAP');
        var _material$normalTextu = material.normalTexture.scale,
            scale = _material$normalTextu === void 0 ? 1 : _material$normalTextu;
        this.uniforms.u_NormalScale = scale;
      }

      if (material.occlusionTexture) {
        this.parseTexture(material.occlusionTexture, 'u_OcclusionSampler', 'HAS_OCCLUSIONMAP');
        var _material$occlusionTe = material.occlusionTexture.strength,
            strength = _material$occlusionTe === void 0 ? 1 : _material$occlusionTe;
        this.uniforms.u_OcclusionStrength = strength;
      }

      if (material.emissiveTexture) {
        this.parseTexture(material.emissiveTexture, 'u_EmissiveSampler', 'HAS_EMISSIVEMAP');
        this.uniforms.u_EmissiveFactor = material.emissiveFactor || [0, 0, 0];
      }

      if (material.alphaMode === 'MASK') {
        var _material$alphaCutoff = material.alphaCutoff,
            alphaCutoff = _material$alphaCutoff === void 0 ? 0.5 : _material$alphaCutoff;
        this.defines.ALPHA_CUTOFF = 1;
        this.uniforms.u_AlphaCutoff = alphaCutoff;
      } else if (material.alphaMode === 'BLEND') {
        _core.log.warn('BLEND alphaMode might not work well because it requires mesh sorting')();

        Object.assign(this.parameters, {
          blend: true,
          blendEquation: this.gl.FUNC_ADD,
          blendFunc: [this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA, this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA]
        });
      }
    }
  }]);
  return GLTFMaterialParser;
}();

exports["default"] = GLTFMaterialParser;
//# sourceMappingURL=gltf-material-parser.js.map