
const vs = `\
uniform vec2 windowSize;
attribute float transform_instanceID;

vec2 transform_getTexCoord() {
  float yOffset =  1. / (2. * windowSize[0]);
  float xOffset =  1. / (2. * windowSize[0]);
  float yIndex = floor((transform_instanceID / windowSize[0]) + yOffset );
  float xIndex = transform_instanceID - (yIndex * windowSize[0]);
  xIndex = (xIndex / windowSize[0]) + xOffset;
  yIndex = (yIndex / windowSize[1]) + yOffset;
  return vec2(xIndex, yIndex);
}

vec2 transform_getPos() {
  vec2 texCoord = transform_getTexCoord();
  // Change from [0 1] range to [-1 1]
  vec2 pos = (texCoord * (2.0, 2.0)) - (1., 1.);
  return pos;
}

float transform_getInput(sampler2D transform_uSampler_inValue) {
  vec2 texCoord = transform_getTexCoord();
  vec4 textureColor = texture2D(transform_uSampler_inValue, texCoord);
  return textureColor.x;
}
`;

export default {
  name: 'transform',
  vs,
  fs: null
};

// TODO: getUniforms
