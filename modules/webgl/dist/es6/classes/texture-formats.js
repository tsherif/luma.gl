import { isWebGL2 } from '../webgl-utils';
export const TEXTURE_FORMATS = {
  [6407]: {
    dataFormat: 6407,
    types: [5121, 33635]
  },
  [6408]: {
    dataFormat: 6408,
    types: [5121, 32819, 32820]
  },
  [6406]: {
    dataFormat: 6406,
    types: [5121]
  },
  [6409]: {
    dataFormat: 6409,
    types: [5121]
  },
  [6410]: {
    dataFormat: 6410,
    types: [5121]
  },
  [33326]: {
    dataFormat: 6403,
    types: [5126],
    gl2: true
  },
  [33328]: {
    dataFormat: 33319,
    types: [5126],
    gl2: true
  },
  [34837]: {
    dataFormat: 6407,
    types: [5126],
    gl2: true
  },
  [34836]: {
    dataFormat: 6408,
    types: [5126],
    gl2: true
  }
};
export const DATA_FORMAT_CHANNELS = {
  [6403]: 1,
  [36244]: 1,
  [33319]: 2,
  [33320]: 2,
  [6407]: 3,
  [36248]: 3,
  [6408]: 4,
  [36249]: 4,
  [6402]: 1,
  [34041]: 1,
  [6406]: 1,
  [6409]: 1,
  [6410]: 2
};
export const TYPE_SIZES = {
  [5126]: 4,
  [5125]: 4,
  [5124]: 4,
  [5123]: 2,
  [5122]: 2,
  [5131]: 2,
  [5120]: 1,
  [5121]: 1
};
export function isFormatSupported(gl, format) {
  const info = TEXTURE_FORMATS[format];

  if (!info) {
    return false;
  }

  if (info.gl1 === undefined && info.gl2 === undefined) {
    return true;
  }

  const value = isWebGL2(gl) ? info.gl2 || info.gl1 : info.gl1;
  return typeof value === 'string' ? gl.getExtension(value) : value;
}
export function isLinearFilteringSupported(gl, format) {
  const info = TEXTURE_FORMATS[format];

  switch (info && info.types[0]) {
    case 5126:
      return gl.getExtension('OES_texture_float_linear');

    case 5131:
      return gl.getExtension('OES_texture_half_float_linear');

    default:
      return true;
  }
}
//# sourceMappingURL=texture-formats.js.map