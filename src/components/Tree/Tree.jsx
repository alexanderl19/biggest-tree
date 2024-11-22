import { forwardRef, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { Vector3 } from "three";
import { GhibliShader } from "./GhibliShader";

export const Tree = forwardRef((props, ref) => {
  const { nodes } = useGLTF("/trees.glb");

  const uniforms = useMemo(
    () => ({
      colorMap: {
        value: props.colors,
      },
      brightnessThresholds: {
        value: [0.6, 0.35, 0.001],
      },
      lightPosition: { value: new Vector3(15, 15, 15) },
    }),
    [props.colors],
  );

  console.log(nodes);

  return (
    <group {...props} ref={ref} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Foliage.geometry}
        position={[-0.9, 2, 0.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[2, 4, 6]}
      >
        <shaderMaterial
          attach="material"
          {...GhibliShader}
          uniforms={uniforms}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Foliage.geometry}
        position={[1.1, 2, 0.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[2, 4, 6]}
      >
        <shaderMaterial
          attach="material"
          {...GhibliShader}
          uniforms={uniforms}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Foliage.geometry}
        position={[-0.8, 2, 0.2]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[2, 4, 6]}
      >
        <shaderMaterial
          attach="material"
          {...GhibliShader}
          uniforms={uniforms}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Foliage.geometry}
        position={[0.2, 2, -1.3]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[2, 4, 6]}
      >
        <shaderMaterial
          attach="material"
          {...GhibliShader}
          uniforms={uniforms}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Foliage.geometry}
        position={[-1, 2, -0.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[2, 4, 6]}
      >
        <shaderMaterial
          attach="material"
          {...GhibliShader}
          uniforms={uniforms}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Foliage.geometry}
        position={[1, 2, 0.6]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[2, 4, 6]}
      >
        <shaderMaterial
          attach="material"
          {...GhibliShader}
          uniforms={uniforms}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Foliage.geometry}
        position={[1, 2, 0.2]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[2, 4, 6]}
      >
        <shaderMaterial
          attach="material"
          {...GhibliShader}
          uniforms={uniforms}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Foliage.geometry}
        position={[0, 2.5, 0]}
      >
        <shaderMaterial
          attach="material"
          {...GhibliShader}
          uniforms={uniforms}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Foliage.geometry}
        position={[0, 4.5, 0]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[2, 4, 6]}
      >
        <shaderMaterial
          attach="material"
          {...GhibliShader}
          uniforms={uniforms}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Foliage.geometry}
        position={[0, 5, 0]}
        scale={[0.5, 0.5, 0.5]}
        rotation={[5, 3, 3]}
      >
        <shaderMaterial
          attach="material"
          {...GhibliShader}
          uniforms={uniforms}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Foliage.geometry}
        position={[0, 5, 0]}
        scale={[0.5, 0.5, 0.5]}
        rotation={[2, 4, 8]}
      >
        <shaderMaterial
          attach="material"
          {...GhibliShader}
          uniforms={uniforms}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Foliage.geometry}
        position={[0, 6, 0]}
        scale={[0.4, 0.4, 0.4]}
        rotation={[5, 2, 3]}
      >
        <shaderMaterial
          attach="material"
          {...GhibliShader}
          uniforms={uniforms}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Foliage.geometry}
        position={[0, 6.5, 0]}
        scale={[0.3, 0.3, 0.3]}
        rotation={[4, 6, 4]}
      >
        <shaderMaterial
          attach="material"
          {...GhibliShader}
          uniforms={uniforms}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Foliage.geometry}
        position={[0, 7, 0]}
        scale={[0.3, 0.3, 0.3]}
        rotation={[5, 2, 4]}
      >
        <shaderMaterial
          attach="material"
          {...GhibliShader}
          uniforms={uniforms}
        />
      </mesh>
    </group>
  );
});

useGLTF.preload("/trees.glb");
