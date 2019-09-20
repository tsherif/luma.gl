"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = "#define SHADER_NAME luma-modular-fragment\n\nprecision highp float;\n\n// varyings\nvarying vec4 vColor;\n\nvoid main(){\n  gl_FragColor = vec4(1., 0., 1., 1.);\n\n#ifdef MODULE_DIFFUSE\n  gl_FragColor = diffuse_filterColor(gl_FragColor);\n#endif\n\n#ifdef MODULE_MATERIAL\n  gl_FragColor = material_filterColor(gl_FragColor);\n#endif\n\n#ifdef MODULE_LIGHTING\n  gl_FragColor = lighting_filterColor(gl_FragColor);\n#endif\n\n#ifdef MODULE_FOG\n  gl_FragColor = fog_filterColor(gl_FragColor);\n#endif\n\n#ifdef MODULE_PICKING\n  gl_FragColor = picking_filterHighlightColor(gl_FragColor);\n  gl_FragColor = picking_filterPickingColor(gl_FragColor);\n#endif\n\n#ifdef MODULE_LOGDEPTH\n  logdepth_setFragDepth(gl_Position);\n#endif\n}\n";
exports["default"] = _default;
//# sourceMappingURL=modular-fragment.glsl.js.map