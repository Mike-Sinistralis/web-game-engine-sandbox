/* eslint-disable no-unused-vars */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {ArcRotateCamera, Engine, Scene, HemisphericLight } from "react-babylonjs";
import { Color3, Vector3 } from '@babylonjs/core';
import SpinningBox from "./spinning-box.jsx";

const styles = {
  canvas: css({
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  })
};

function Babylon() {

  return (
      <div>
        <Engine antialias adaptToDeviceRatio canvasId="babylonJS" css={styles.canvas}>
          <Scene>
            <ArcRotateCamera
                name="camera1"
                target={Vector3.Zero()}
                alpha={Math.PI / 2}
                beta={Math.PI / 4}
                radius={8}
            />
            <HemisphericLight
                name="light1"
                intensity={0.7}
                direction={Vector3.Up()}
            />
            <SpinningBox
                name="left"
                position={new Vector3(-2, 0, 0)}
                color={Color3.FromHexString('#EEB5EB')}
                hoveredColor={Color3.FromHexString('#C26DBC')}
            />
            <SpinningBox
                name="right"
                position={new Vector3(2, 0, 0)}
                color={Color3.FromHexString('#C8F4F9')}
                hoveredColor={Color3.FromHexString('#3CACAE')}
            />
          </Scene>
        </Engine>
      </div>
  );
}

export default Babylon;
