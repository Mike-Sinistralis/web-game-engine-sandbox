/* eslint-disable no-unused-vars */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react'
import { Canvas } from '@react-three/fiber'
import Box from "./Box.jsx";

const styles = {
  canvas: css({
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  })
};

function ReactThree() {
  return (
    <Canvas css={styles.canvas}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
}

export default ReactThree;
