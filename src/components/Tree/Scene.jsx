import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Tree } from "./Tree";
import { Color } from "three";

export function Scene() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight
        color="white"
        position={[15, 15, 15]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <Tree
        position={[0, 0.5, 0]}
        colors={[
          new Color("#4a8d7e").convertLinearToSRGB(),
          new Color("#377f6a").convertLinearToSRGB(),
          new Color("#184f52").convertLinearToSRGB(),
          new Color("#143b36").convertLinearToSRGB(),
        ]}
      />
    </>
  );
}
