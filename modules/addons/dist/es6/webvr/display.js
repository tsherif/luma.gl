import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import { withParameters } from '@luma.gl/core';
export default class Display {
  getViews(options) {
    const width = options.width,
          height = options.height;
    return [{
      params: {
        viewport: [0, 0, width, height],
        scissor: [0, 0, width, height],
        scissorTest: true
      }
    }];
  }

  submitFrame() {
    return true;
  }

  requestAnimationFrame(renderFrame) {
    return false;
  }

  delete() {}

  _renderFrame(options) {
    const views = this.getViews(options);

    if (!views) {
      return false;
    }

    const gl = this.animationLoop.gl;

    for (const view of views) {
      withParameters(gl, view.params, () => this.animationLoop.onRender(_objectSpread({}, options, view)));
    }

    this.submitFrame();
    return true;
  }

}
//# sourceMappingURL=display.js.map