import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import { log } from '@luma.gl/core';
import Display from './display';
import { createEnterVRButton } from './vr-button';
export default class VRDisplay extends Display {
  static isSupported() {
    return 'getVRDisplays' in navigator && 'VRFrameData' in window;
  }

  constructor(props) {
    super(props);
    this._vrSupported = VRDisplay.isSupported();

    if (this._vrSupported) {
      this.vrFrameData = new window.VRFrameData();
      this.vrPresenting = false;
      this.vrFrame = false;
      window.addEventListener('vrdisplaypresentchange', this._vrDisplayPresentChange.bind(this));
    }
  }

  delete() {
    super.delete();

    this._removeVRButton();
  }

  getViews(options) {
    if (this._vrSupported) {
      this._addVRButton();
    }

    if (this.vrPresenting && this.vrFrame) {
      this.vrDisplay.getFrameData(this.vrFrameData);
      const _this$vrFrameData = this.vrFrameData,
            leftProjectionMatrix = _this$vrFrameData.leftProjectionMatrix,
            leftViewMatrix = _this$vrFrameData.leftViewMatrix,
            rightProjectionMatrix = _this$vrFrameData.rightProjectionMatrix,
            rightViewMatrix = _this$vrFrameData.rightViewMatrix;
      const width = options.width,
            height = options.height;
      return [{
        displayEye: 'left',
        projectionMatrix: leftProjectionMatrix,
        viewMatrix: leftViewMatrix,
        params: {
          viewport: [0, 0, width * 0.5, height],
          scissor: [0, 0, width * 0.5, height],
          scissorTest: true
        }
      }, {
        displayEye: 'right',
        projectionMatrix: rightProjectionMatrix,
        viewMatrix: rightViewMatrix,
        params: {
          viewport: [width * 0.5, 0, width * 0.5, height],
          scissor: [width * 0.5, 0, width * 0.5, height],
          scissorTest: true
        }
      }];
    }

    return super.getViews(options);
  }

  submitFrame() {
    if (this.vrPresenting && this.vrFrame) {
      this.vrDisplay.submitFrame();
      return true;
    }

    return false;
  }

  requestAnimationFrame(renderFrame) {
    if (this.vrPresenting) {
      this.vrDisplay.requestAnimationFrame(() => {
        this.vrFrame = true;
        renderFrame();
        this.vrFrame = false;
      });
      return true;
    }

    return false;
  }

  _addVRButton() {
    var _this = this;

    return _asyncToGenerator(function* () {
      if (_this.vrButton) {
        return;
      }

      const canvas = _this._getCanvas();

      if (!canvas) {
        return;
      }

      const displays = yield navigator.getVRDisplays();

      if (displays && displays.length) {
        log.info(2, 'Found VR Displays', displays)();
        _this.vrDisplay = displays[0];
        _this.vrButton = createEnterVRButton({
          canvas,
          title: "Enter VR (".concat(_this.vrDisplay.displayName, ")")
        });

        _this.vrButton.onclick = () => _this._startDisplay();
      }
    })();
  }

  _getCanvas() {
    return this.animationLoop.canvas || this.animationLoop.gl && this.animationLoop.gl.canvas;
  }

  _removeVRButton() {
    if (this.vrButton) {}
  }

  _startDisplay() {
    this.vrDisplay.requestPresent([{
      source: this._getCanvas()
    }]);
  }

  _vrDisplayPresentChange() {
    if (this.vrDisplay.isPresenting) {
      log.info(2, 'Entering VR')();
      this.vrPresenting = true;
      this.vrButton.style.display = 'none';
    } else {
      log.info(2, 'Exiting VR')();
      this.vrPresenting = false;
      this.vrButton.style.display = 'block';
    }
  }

}
//# sourceMappingURL=vr-display.js.map