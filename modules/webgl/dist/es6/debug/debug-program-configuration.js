import { getCompositeGLType } from '../webgl-utils/attribute-utils';
export function getDebugTableForProgramConfiguration(config) {
  const table = {};
  const header = "Accessors for ".concat(config.id);

  for (const attributeInfo of config.attributeInfos) {
    if (attributeInfo) {
      const glslDeclaration = getGLSLDeclaration(attributeInfo);
      table["in ".concat(glslDeclaration)] = {
        [header]: JSON.stringify(attributeInfo.accessor)
      };
    }
  }

  for (const varyingInfo of config.varyingInfos) {
    if (varyingInfo) {
      const glslDeclaration = getGLSLDeclaration(varyingInfo);
      table["out ".concat(glslDeclaration)] = {
        [header]: JSON.stringify(varyingInfo.accessor)
      };
    }
  }

  return table;
}

function getGLSLDeclaration(attributeInfo) {
  const _attributeInfo$access = attributeInfo.accessor,
        type = _attributeInfo$access.type,
        size = _attributeInfo$access.size;
  const typeAndName = getCompositeGLType(type, size);

  if (typeAndName) {
    return "".concat(typeAndName.name, " ").concat(attributeInfo.name);
  }

  return attributeInfo.name;
}
//# sourceMappingURL=debug-program-configuration.js.map