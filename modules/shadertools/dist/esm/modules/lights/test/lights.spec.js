import test from 'tape-catch';
import { lights } from '@luma.gl/shadertools';
test('shadertools#lights', function (t) {
  var uniforms = lights.getUniforms();
  t.ok(uniforms, 'Generated default uniforms');
  uniforms = lights.getUniforms({
    lights: [{
      type: 'ambient'
    }, {
      type: 'directional'
    }, {
      type: 'point'
    }]
  });
  t.ok(uniforms, 'Generated uniforms for empty lights');
  uniforms = lights.getUniforms({
    lights: [{
      type: 'non-existing'
    }]
  });
  t.ok(uniforms, 'Generated uniforms for non-supported light object');
  t.end();
});
//# sourceMappingURL=lights.spec.js.map