import WEBGL_FEATURES from './webgl-features-table';
import { isWebGL2 } from '../webgl-utils';
import { assert } from '../utils';
export function hasFeature(gl, feature) {
  return hasFeatures(gl, feature);
}
export function hasFeatures(gl, features) {
  features = Array.isArray(features) ? features : [features];
  return features.every(feature => {
    return isFeatureSupported(gl, feature);
  });
}
export function getFeatures(gl) {
  gl.luma = gl.luma || {};

  if (!gl.luma.caps) {
    gl.luma.caps = {};
    gl.luma.caps.webgl2 = isWebGL2(gl);

    for (const cap in WEBGL_FEATURES) {
      gl.luma.caps[cap] = isFeatureSupported(gl, cap);
    }
  }

  return gl.luma.caps;
}

function isFeatureSupported(gl, cap) {
  const feature = WEBGL_FEATURES[cap];
  assert(feature, cap);
  const featureDefinition = isWebGL2(gl) ? feature[1] || feature[0] : feature[0];
  let isSupported;

  if (typeof featureDefinition === 'function') {
    isSupported = featureDefinition(gl);
  } else if (Array.isArray(featureDefinition)) {
    isSupported = true;

    for (const extension of featureDefinition) {
      isSupported = isSupported && Boolean(gl.getExtension(extension));
    }
  } else if (typeof featureDefinition === 'string') {
    isSupported = Boolean(gl.getExtension(featureDefinition));
  } else if (typeof featureDefinition === 'boolean') {
    isSupported = featureDefinition;
  } else {
    assert(false);
  }

  return isSupported;
}
//# sourceMappingURL=features.js.map