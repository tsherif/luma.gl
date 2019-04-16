"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _core = require("@luma.gl/core");

var _shadertools = require("@luma.gl/shadertools");

var _tapeCatch = _interopRequireDefault(require("tape-catch"));

var _setup = require("test/setup");

var gl = _setup.fixture.gl2;
var TEST_DATA = {
  vertexColorData: new Float32Array([0, 0, 0, 255, 100, 150, 50, 50, 50, 251, 103, 153, 150, 100, 255, 254.5, 100, 150, 100, 150, 255, 255, 255, 255, 255, 100, 149.5])
};
var TEST_CASES = [{
  pickingSelectedColor: null,
  isPicked: [0, 0, 0, 0, 0, 0, 0, 0, 0]
}, {
  pickingSelectedColor: [255, 255, 255],
  isPicked: [0, 0, 0, 0, 0, 0, 0, 1, 0]
}, {
  pickingSelectedColor: [255, 100, 150],
  isPicked: [0, 1, 0, 0, 0, 1, 0, 0, 1]
}, {
  pickingSelectedColor: [255, 100, 150],
  pickingThreshold: 5,
  isPicked: [0, 1, 0, 1, 0, 1, 0, 0, 1]
}];
(0, _tapeCatch["default"])('picking#isVertexPicked(pickingSelectedColor invalid)', function (t) {
  if (!_core.Transform.isSupported(gl)) {
    t.comment('Transform not available, skipping tests');
    t.end();
    return;
  }

  var VS = "  attribute vec3 vertexColor;\n  varying float isPicked;\n\n  void main()\n  {\n    isPicked = float(isVertexPicked(vertexColor));\n  }\n  ";
  var vertexColorData = TEST_DATA.vertexColorData;
  var elementCount = vertexColorData.length / 3;
  var vertexColor = new _core.Buffer(gl, vertexColorData);
  var isPicked = new _core.Buffer(gl, {
    byteLength: elementCount * 4
  });
  var transform = new _core.Transform(gl, {
    sourceBuffers: {
      vertexColor: vertexColor
    },
    feedbackBuffers: {
      isPicked: isPicked
    },
    vs: VS,
    varyings: ['isPicked'],
    modules: [_shadertools.picking],
    elementCount: elementCount
  });
  TEST_CASES.forEach(function (testCase) {
    var uniforms = _shadertools.picking.getUniforms({
      pickingSelectedColor: testCase.pickingSelectedColor,
      pickingThreshold: testCase.pickingThreshold
    });

    transform.run({
      uniforms: uniforms
    });
    var expectedData = testCase.isPicked;
    var outData = transform.getBuffer('isPicked').getData();
    t.deepEqual(outData, expectedData, 'Vertex should correctly get picked');
  });
  t.end();
});
(0, _tapeCatch["default"])('picking#picking_setPickingColor', function (t) {
  if (!_core.Transform.isSupported(gl)) {
    t.comment('Transform not available, skipping tests');
    t.end();
    return;
  }

  var VS = "  attribute vec3 vertexColor;\n  varying vec4 rgbColorASelected;\n\n  void main()\n  {\n    picking_setPickingColor(vertexColor);\n    rgbColorASelected = picking_vRGBcolor_Aselected;\n  }\n  ";
  var COLOR_SCALE = 1 / 255;
  var EPSILON = 0.00001;
  var vertexColorData = TEST_DATA.vertexColorData;
  var elementCount = vertexColorData.length / 3;
  var vertexColor = new _core.Buffer(gl, vertexColorData);
  var rgbColorASelected = new _core.Buffer(gl, {
    byteLength: elementCount * 4 * 4
  });
  var transform = new _core.Transform(gl, {
    sourceBuffers: {
      vertexColor: vertexColor
    },
    feedbackBuffers: {
      rgbColorASelected: rgbColorASelected
    },
    vs: VS,
    varyings: ['rgbColorASelected'],
    modules: [_shadertools.picking],
    elementCount: elementCount
  });
  TEST_CASES.forEach(function (testCase) {
    var uniforms = _shadertools.picking.getUniforms({
      pickingSelectedColor: testCase.pickingSelectedColor,
      pickingThreshold: testCase.pickingThreshold
    });

    transform.run({
      uniforms: uniforms
    });
    var expectedData = testCase.isPicked.reduce(function (result, element, index) {
      var pickingColor = TEST_DATA.vertexColorData.slice(index * 3, index * 3 + 3).map(function (e) {
        return e * COLOR_SCALE;
      });
      result.push(pickingColor[0], pickingColor[1], pickingColor[2], element);
      return result;
    }, []);
    var outData = transform.getBuffer('rgbColorASelected').getData();
    outData.forEach(function (out, index) {
      if (Math.abs(out - expectedData[index]) > EPSILON) {
        t.ok(false, 'Vertex should correctly get picked');
      }
    });
  });
  t.ok(true, 'picking_setPickingColor successful');
  t.end();
});
//# sourceMappingURL=picking.spec.js.map