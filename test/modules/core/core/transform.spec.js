import {Buffer, Transform, _Attribute as Attribute} from 'luma.gl';
import test from 'tape-catch';
import {fixture} from 'luma.gl/test/setup';

const VS = `\
precision highp float;
attribute float inValue;

varying float outValue;

void main()
{
  outValue = 2.0 * inValue;
  vec2 pos = transform_getPos();
  gl_Position = vec4(pos, 0, 1.);
}
`;

const VS_CONSTANT_ATTRIBUTE = `\
#version 300 es
in float inValue;
in float multiplier;
out float outValue;

void main()
{
  outValue = multiplier * inValue;
}
`;

const VS2 = `\
#version 300 es
in float inValue1;
in float inValue2;
out float doubleValue;
out float halfValue;

void main()
{
  doubleValue = 2.0 * inValue1;
  halfValue = 0.5 * inValue2;
}
`;

// test('WebGL#Transform constructor/delete', t => {
//   const {gl} = fixture;
//
//   t.throws(
//     () => new Transform(),
//     /.*Requires WebGL2.*/,
//     'Buffer throws on missing gl context');
//
//   t.throws(
//     () => new Transform(gl),
//     /.*Requires WebGL2.*/,
//     'Buffer throws on missing gl context');
//
//   if (!gl2) {
//     t.comment('WebGL2 not available, skipping tests');
//     t.end();
//     return;
//   }
//   const gl2 = fixture.gl
//
//   if (!Transform.isSupported(gl2)) {
//     t.comment('WebGL2 not available, skipping tests');
//     t.end();
//     return;
//   }
//
//   const sourceData = new Float32Array([10, 20, 31, 0, -57]);
//   const sourceBuffer = new Buffer(gl2, {data: sourceData});
//
//   const transform = new Transform(gl2, {
//     sourceBuffers: {
//       inValue: sourceBuffer
//     },
//     vs: VS,
//     feedbackMap: {
//       inValue: 'outValue'
//     },
//     varyings: ['outValue'],
//     elementCount: 5
//   });
//
//   t.ok(transform instanceof Transform, 'Transform construction successful');
//
//   transform.delete();
//   t.ok(transform instanceof Transform, 'Transform delete successful');
//
//   transform.delete();
//   t.ok(transform instanceof Transform, 'Transform repeated delete successful');
//
//   t.end();
// });

test('WebGL#Transform run (Textures)', t => {
  // const {gl2} = fixture;
  const gl2 = fixture.gl; // fixture.gl2 || fixture.gl;
  // if (!Transform.isSupported(gl2)) {
  //   t.comment('WebGL2 not available, skipping tests');
  //   t.end();
  //   return;
  // }

  const sourceData = _getRandomSourceData();
  // const sourceBuffer = new Buffer(gl2, {data: sourceData});
  console.log(`Testing elementCount: ${sourceData.length}`);

  const transform = new Transform(gl2, {
    sourceBuffers: {
      inValue: sourceData
    },
    vs: VS,
    feedbackMap: {
      inValue: 'outValue'
    },
    varyings: ['outValue'],
    elementCount: sourceData.length
  });

  transform.run();

  transform.swapBuffers();

  transform.run();

  const expectedData = sourceData.map(x => x * 4);
  const outData = transform.getData('outValue');

  console.log(`Input:    ${sourceData}`);
  console.log(`Expected: ${expectedData}`);
  console.log(`Received: ${outData}`);

  t.deepEqual(outData, expectedData, 'Transform.getData: is successful');

  // t.ok((expectedData.length === outData.length), `Array should match, expected ${expectedData.length} actual ${outData.length}`);
  // expectedData.forEach((element, index) => {
  //   if (element !== outData[index]) {
  //     t.fail(`Incorrect value at index: ${index} expected: ${element} actual: ${outData[index]}`);
  //   }
  //   // t.equal(element, outData[index], `Incorrect value at index: ${index} expected: ${element} actual: ${outData[index]}`);
  // });
  t.end();
});

function _getRandomSourceData() {
  // return new Uint8Array([10, 20, 31, 0, 100]);
  const MAX_ELEMENT_COUNT = 10000;
  const VALUE_RANGE = 50;
  const elementCount = 16; // Math.floor(Math.random() * MAX_ELEMENT_COUNT);

  const sourceData = new Uint8Array(elementCount);
  sourceData.forEach((_, index, array) => {
    array[index] = Math.floor(Math.random() * VALUE_RANGE);
  });
  return sourceData;
}

// test('WebGL#Transform run (Attribute)', t => {
//   const {gl2} = fixture;
//
//   if (!gl2) {
//     t.comment('WebGL2 not available, skipping tests');
//     t.end();
//     return;
//   }
//
//   const sourceData = new Float32Array([10, 20, 31, 0, -57]);
//   const sourceBuffer = new Attribute(gl2, {value: sourceData});
//   const feedbackBuffer = new Buffer(gl2, {data: sourceData});
//
//   const transform = new Transform(gl2, {
//     sourceBuffers: {
//       inValue: sourceBuffer
//     },
//     feedbackBuffers: {
//       outValue: feedbackBuffer
//     },
//     vs: VS,
//     varyings: ['outValue'],
//     elementCount: 5
//   });
//
//   transform.run();
//
//   const expectedData = sourceData.map(x => x * 2);
//   const outData = transform.getBuffer('outValue').getData();
//
//   t.deepEqual(outData, expectedData, 'Transform.getData: is successful');
//
//   t.end();
// });
//
// test('WebGL#Transform run (constant Attribute)', t => {
//   const {gl2} = fixture;
//
//   if (!gl2) {
//     t.comment('WebGL2 not available, skipping tests');
//     t.end();
//     return;
//   }
//
//   const MULTIPLIER = 5;
//   const sourceData = new Float32Array([10, 20, 31, 0, -57]);
//   const sourceBuffer = new Attribute(gl2, {value: sourceData});
//   const multiplier = new Attribute(gl2, {value: [MULTIPLIER], constant: true});
//   const feedbackBuffer = new Buffer(gl2, {data: sourceData});
//
//   const transform = new Transform(gl2, {
//     sourceBuffers: {
//       inValue: sourceBuffer,
//       multiplier
//     },
//     feedbackBuffers: {
//       outValue: feedbackBuffer
//     },
//     vs: VS_CONSTANT_ATTRIBUTE,
//     varyings: ['outValue'],
//     elementCount: 5
//   });
//
//   transform.run();
//
//   const expectedData = sourceData.map(x => x * MULTIPLIER);
//   const outData = transform.getBuffer('outValue').getData();
//
//   t.deepEqual(outData, expectedData, 'Transform.getData: is successful');
//
//   t.end();
// });
//
// test('WebGL#Transform swapBuffers', t => {
//   const {gl2} = fixture;
//
//   if (!gl2) {
//     t.comment('WebGL2 not available, skipping tests');
//     t.end();
//     return;
//   }
//
//   const sourceData = new Float32Array([10, 20, 31, 0, -57]);
//   const sourceBuffer = new Buffer(gl2, {data: sourceData});
//
//   const transform = new Transform(gl2, {
//     sourceBuffers: {
//       inValue: sourceBuffer
//     },
//     vs: VS,
//     feedbackMap: {
//       inValue: 'outValue'
//     },
//     varyings: ['outValue'],
//     elementCount: 5
//   });
//
//   transform.run();
//
//   transform.swapBuffers();
//   transform.run();
//
//   const expectedData = sourceData.map(x => x * 4);
//   const outData = transform.getBuffer('outValue').getData();
//
//   t.deepEqual(outData, expectedData, 'Transform.getData: is successful');
//
//   t.end();
// });
//
// test('WebGL#Transform swapBuffers + update', t => {
//   const {gl2} = fixture;
//
//   if (!gl2) {
//     t.comment('WebGL2 not available, skipping tests');
//     t.end();
//     return;
//   }
//
//   let sourceData = new Float32Array([10, 20, 31, 0, -57]);
//   let sourceBuffer = new Buffer(gl2, {data: sourceData});
//
//   const transform = new Transform(gl2, {
//     sourceBuffers: {
//       inValue: sourceBuffer
//     },
//     vs: VS,
//     feedbackMap: {
//       inValue: 'outValue'
//     },
//     varyings: ['outValue'],
//     elementCount: 5
//   });
//
//   transform.run();
//   transform.swapBuffers();
//
//   // Increase the buffer size
//   sourceData = new Float32Array([1, 2, 3, 4, 5, 6, 7]);
//   sourceBuffer = new Buffer(gl2, {data: sourceData});
//
//   transform.update({
//     sourceBuffers: {
//       inValue: sourceBuffer
//     },
//     elementCount: 7
//   });
//
//   transform.run();
//
//   let expectedData = sourceData.map(x => x * 2);
//   let outData = transform.getBuffer('outValue').getData();
//
//   transform.swapBuffers();
//   transform.run();
//
//   expectedData = sourceData.map(x => x * 4);
//   outData = transform.getBuffer('outValue').getData();
//
//   t.deepEqual(outData, expectedData, 'Transform.getData: is successful');
//
//   t.end();
// });
//
// test('WebGL#Transform swapBuffers without varyings', t => {
//   const {gl2} = fixture;
//
//   if (!gl2) {
//     t.comment('WebGL2 not available, skipping tests');
//     t.end();
//     return;
//   }
//
//   const sourceData1 = new Float32Array([10, 20, 30]);
//   const sourceBuffer1 = new Buffer(gl2, {data: sourceData1});
//   const sourceData2 = new Float32Array([10, 20, 30]);
//   const sourceBuffer2 = new Buffer(gl2, {data: sourceData2});
//
//   // varyings array is dedueced from feedbackMap.
//   const transform = new Transform(gl2, {
//     sourceBuffers: {
//       inValue1: sourceBuffer1,
//       inValue2: sourceBuffer2
//     },
//     vs: VS2,
//     feedbackMap: {
//       inValue2: 'halfValue',
//       inValue1: 'doubleValue'
//     },
//     elementCount: 3
//   });
//
//   transform.run();
//
//   transform.swapBuffers();
//   transform.run();
//
//   const expectedDoubleData = sourceData1.map(x => x * 4);
//   const expectedHalfData = sourceData2.map(x => x * 0.25);
//
//   const doubleData = transform.getBuffer('doubleValue').getData();
//   const halfData = transform.getBuffer('halfValue').getData();
//
//   t.deepEqual(doubleData, expectedDoubleData, 'Transform.getData: is successful');
//   t.deepEqual(halfData, expectedHalfData, 'Transform.getData: is successful');
//
//   t.end();
// });
//
// /* eslint-disable max-statements */
// test('WebGL#Transform update', t => {
//   const {gl2} = fixture;
//
//   if (!gl2) {
//     t.comment('WebGL2 not available, skipping tests');
//     t.end();
//     return;
//   }
//
//   let sourceData = new Float32Array([10, 20, 31, 0, -57]);
//   let sourceBuffer = new Buffer(gl2, {data: sourceData});
//   let expectedData;
//   let outData;
//
//   const transform = new Transform(gl2, {
//     sourceBuffers: {
//       inValue: sourceBuffer
//     },
//     vs: VS,
//     feedbackMap: {
//       inValue: 'outValue'
//     },
//     varyings: ['outValue'],
//     elementCount: 5
//   });
//
//   transform.run();
//
//   sourceData = new Float32Array([1, 2, 3, 0, -5]);
//   sourceBuffer.delete();
//   sourceBuffer = new Buffer(gl2, {data: sourceData});
//
//   transform.update({
//     sourceBuffers: {
//       inValue: sourceBuffer
//     }
//   });
//   t.is(transform.elementCount, 5, 'Transform has correct element count');
//   transform.run();
//
//   expectedData = sourceData.map(x => x * 2);
//   outData = transform.getBuffer('outValue').getData();
//   t.deepEqual(outData, expectedData, 'Transform.getData: is successful');
//
//   sourceData = new Float32Array([3, 4, 5, 2, -3, 0]);
//   sourceBuffer.delete();
//   sourceBuffer = new Buffer(gl2, {data: sourceData});
//
//   transform.update({
//     sourceBuffers: {
//       inValue: sourceBuffer
//     },
//     feedbackBuffers: {
//       outValue: new Buffer(gl2, {data: new Float32Array(6)})
//     },
//     elementCount: 6
//   });
//   t.is(transform.elementCount, 6, 'Element count is updated');
//   transform.run();
//
//   expectedData = sourceData.map(x => x * 2);
//   outData = transform.getBuffer('outValue').getData();
//
//   t.deepEqual(outData, expectedData, 'Transform.getData: is successful');
//
//   t.end();
// });
