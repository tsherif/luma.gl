export {toLowPrecision} from './utils/precision';
export {default as gl} from './utils/setup-gl';
export {diffImagePixels} from './diff-images';

// Basic utility for rendering multiple scenes (could go into "deck.gl/core")
export {default as SceneRenderer} from './scene-renderer';

// A utility that renders a list of scenes and compares against golden images
export {default as RenderTest} from './render-test';
