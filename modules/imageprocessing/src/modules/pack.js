// Packing of floats into RGBA8
/* eslint-disable camelcase */
import assert from 'assert';

const fs = `\
const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );

const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );

const float ShiftRight8 = 1. / 256.;

vec4 pack_floatToRGBA8( const in float v ) {
  vec4 r = vec4( fract( v * PackFactors ), v );
  r.yzw -= (r.xyz * ShiftRight8); // tidy overflow
  return r * PackUpscale;
}

float pack_RGBA8ToFloat( const in vec4 v ) {
  return dot(v, UnpackFactors);
}
`;

// same as above GLSL `PackUpScale` except we don't diving by 255 to keep the value in Uint8 range.
const PACKUP_SCALE = 256;
const PACK_FACTORS = [256 * 256 * 256, 256 * 256, 256];
const UnpackDownscale = 1 / 256; // 255 / 256; // 0..1 -> fraction (excluding 1)
const UnpackFactors = PACK_FACTORS.concat(1).map(element => UnpackDownscale / element);
const ShiftRight8 = 1 / 256;

function pack_floatToRGBA8(value, castToUint8 = true) {
  const floatValue = parseFloat(value);
  assert(!isNaN(floatValue));
  let r = PACK_FACTORS.map(factor => {
    const v = floatValue * factor;
    return v - Math.floor(v);
  }).concat(floatValue); // - Math.floor(floatValue));

  // r.yzw -= r.xyz * ShiftRight8; // tidy overflow
  assert(r.length === 4);
  for (let index = 1; index < r.length; index++) {
    r[index] -= (r[index - 1] * ShiftRight8);
  }
  r = r.map(element => element * PACKUP_SCALE);
  if (castToUint8) {
    return new Uint8Array(r);
  } else {
    return r;
  }
}

function pack_RGBA8ToFloat(uintRGBAValue) {
  const r = UnpackFactors.reduce(
    (dotProduct, element, index) => dotProduct + (element * uintRGBAValue[index]),
  0);

  return r;

}

const PACK_FACTORS_V2 = [1, 256, 256 * 256, 256 * 256 * 256];
const UnpackFactors_V2 = PACK_FACTORS.map(element => UnpackDownscale / element);


function pack_floatToRGBA8_V2(value, castToUint8 = true) {
  const floatValue = parseFloat(value);
  assert(!isNaN(floatValue));
  let r = PACK_FACTORS_V2.map(factor => {
    const v = floatValue * factor;
    return v - Math.floor(v);
  }); // - Math.floor(floatValue));

  // r.yzw -= r.xyz * ShiftRight8; // tidy overflow
  assert(r.length === 4);
  for (let index = 1; index < r.length; index++) {
    r[index] -= (r[index - 1] * ShiftRight8);
  }
  r = r.map(element => element * PACKUP_SCALE);
  if (castToUint8) {
    return new Uint8Array(r);
  } else {
    return r;
  }
}

function pack_RGBA8ToFloat_V2(uintRGBAValue) {
  const r = UnpackFactors.reduce(
    (dotProduct, element, index) => dotProduct + (element * uintRGBAValue[index]),
  0);

  return r;

}

const DEFAULT_PROPS = {};

export default {
  name: 'pack',
  fs,
  vs: fs,
  DEFAULT_PROPS,
  getUniforms: props => props,
  pack_floatToRGBA8,
  pack_RGBA8ToFloat,

  pack_floatToRGBA8_V2,
  pack_RGBA8ToFloat_V2
};
