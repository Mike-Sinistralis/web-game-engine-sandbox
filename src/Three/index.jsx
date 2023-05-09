/* eslint-disable no-unused-vars */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useRef } from 'react';
import { init, teardown } from './game';

const styles = {
  canvas: css({
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  })
};

function Three() {
  const reactCanvas = useRef(null);

  useEffect(() => {
    if (reactCanvas.current) {
      init(reactCanvas.current);
    }

    return () => {
      teardown();
    };
  }, [reactCanvas]);

  return (
    <canvas ref={reactCanvas} css={styles.canvas} />
  );
}

export default Three;
