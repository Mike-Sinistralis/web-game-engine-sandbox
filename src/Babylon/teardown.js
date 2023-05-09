import { setEngine, getEngine } from './engine';
import { onResize } from './const';

export const teardown = () => {
  const engine = getEngine();
  engine.dispose();

  window.removeEventListener('resize', onResize);
  setEngine(null);
};
