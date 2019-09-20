"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateForTextures = updateForTextures;
exports.getSizeUniforms = getSizeUniforms;
exports.getVaryingType = getVaryingType;
exports.processAttributeDefinition = processAttributeDefinition;

var _utils = require("../utils");

var _shadertools = require("@luma.gl/shadertools");

var SAMPLER_UNIFORM_PREFIX = 'transform_uSampler_';
var SIZE_UNIFORM_PREFIX = 'transform_uSize_';
var VS_POS_VARIABLE = 'transform_position';

function updateForTextures(_ref) {
  var vs = _ref.vs,
      sourceTextureMap = _ref.sourceTextureMap,
      targetTextureVarying = _ref.targetTextureVarying,
      targetTexture = _ref.targetTexture;
  var texAttributeNames = Object.keys(sourceTextureMap);
  var sourceCount = texAttributeNames.length;
  var targetTextureType = null;
  var samplerTextureMap = {};
  var updatedVs = vs;
  var finalInject = {};

  if (sourceCount > 0 || targetTextureVarying) {
    var vsLines = updatedVs.split('\n');
    var updateVsLines = vsLines.slice();
    vsLines.forEach(function (line, index, lines) {
      if (sourceCount > 0) {
        var updated = processAttributeDefinition(line, sourceTextureMap);

        if (updated) {
          var updatedLine = updated.updatedLine,
              inject = updated.inject;
          updateVsLines[index] = updatedLine;
          finalInject = (0, _shadertools.combineInjects)([finalInject, inject]);
          Object.assign(samplerTextureMap, updated.samplerTextureMap);
          sourceCount--;
        }
      }

      if (targetTextureVarying && !targetTextureType) {
        targetTextureType = getVaryingType(line, targetTextureVarying);
      }
    });

    if (targetTextureVarying) {
      (0, _utils.assert)(targetTexture);
      var sizeName = "".concat(SIZE_UNIFORM_PREFIX).concat(targetTextureVarying);
      var uniformDeclaration = "uniform vec2 ".concat(sizeName, ";\n");
      var posInstructions = "     vec2 ".concat(VS_POS_VARIABLE, " = transform_getPos(").concat(sizeName, ");\n     gl_Position = vec4(").concat(VS_POS_VARIABLE, ", 0, 1.);\n");
      var inject = {
        'vs:#decl': uniformDeclaration,
        'vs:#main-start': posInstructions
      };
      finalInject = (0, _shadertools.combineInjects)([finalInject, inject]);
    }

    updatedVs = updateVsLines.join('\n');
  }

  return {
    vs: updatedVs,
    targetTextureType: targetTextureType,
    inject: finalInject,
    samplerTextureMap: samplerTextureMap
  };
}

function getSizeUniforms(_ref2) {
  var sourceTextureMap = _ref2.sourceTextureMap,
      targetTextureVarying = _ref2.targetTextureVarying,
      targetTexture = _ref2.targetTexture;
  var uniforms = {};
  var width;
  var height;

  if (targetTextureVarying) {
    width = targetTexture.width;
    height = targetTexture.height;
    uniforms["".concat(SIZE_UNIFORM_PREFIX).concat(targetTextureVarying)] = [width, height];
  }

  for (var textureName in sourceTextureMap) {
    var _sourceTextureMap$tex = sourceTextureMap[textureName];
    width = _sourceTextureMap$tex.width;
    height = _sourceTextureMap$tex.height;
    uniforms["".concat(SIZE_UNIFORM_PREFIX).concat(textureName)] = [width, height];
  }

  return uniforms;
}

function getAttributeDefinition(line) {
  return (0, _shadertools.getQualifierDetails)(line, ['attribute', 'in']);
}

function getSamplerDeclerations(textureName) {
  var samplerName = "".concat(SAMPLER_UNIFORM_PREFIX).concat(textureName);
  var sizeName = "".concat(SIZE_UNIFORM_PREFIX).concat(textureName);
  var uniformDeclerations = "  uniform sampler2D ".concat(samplerName, ";\n  uniform vec2 ").concat(sizeName, ";");
  return {
    samplerName: samplerName,
    sizeName: sizeName,
    uniformDeclerations: uniformDeclerations
  };
}

function getVaryingType(line, varying) {
  var qualaiferDetails = (0, _shadertools.getQualifierDetails)(line, ['varying', 'out']);

  if (!qualaiferDetails) {
    return null;
  }

  return qualaiferDetails.name === varying ? qualaiferDetails.type : null;
}

function processAttributeDefinition(line, textureMap) {
  var samplerTextureMap = {};
  var attributeData = getAttributeDefinition(line);

  if (!attributeData) {
    return null;
  }

  var type = attributeData.type,
      name = attributeData.name;

  if (name && textureMap[name]) {
    var updatedLine = "// ".concat(line, " => Replaced by Transform with a sampler");

    var _getSamplerDecleratio = getSamplerDeclerations(name),
        samplerName = _getSamplerDecleratio.samplerName,
        sizeName = _getSamplerDecleratio.sizeName,
        uniformDeclerations = _getSamplerDecleratio.uniformDeclerations;

    var channels = (0, _shadertools.typeToChannelSuffix)(type);
    var sampleInstruction = "  ".concat(type, " ").concat(name, " = transform_getInput(").concat(samplerName, ", ").concat(sizeName, ").").concat(channels, ";\n");
    samplerTextureMap[samplerName] = name;
    var inject = {
      'vs:#decl': uniformDeclerations,
      'vs:#main-start': sampleInstruction
    };
    return {
      updatedLine: updatedLine,
      inject: inject,
      samplerTextureMap: samplerTextureMap
    };
  }

  return null;
}
//# sourceMappingURL=transform-shader-utils.js.map