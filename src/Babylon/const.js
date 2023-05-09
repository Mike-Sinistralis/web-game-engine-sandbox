import { getEngine } from './engine';

export const onResize = () => {
  const engine = getEngine();

  if (engine) {
    engine.resize();
  }
};
