<script lang="ts">
  import { T } from "@threlte/core";
  import { OrbitControls } from "@threlte/extras";
  import Tree from "./Tree.svelte";
  import { Color } from "three";
</script>

<T.PerspectiveCamera
  makeDefault
  position={[10, 10, 10]}
  on:create={({ ref }) => {
    ref.lookAt(0, 1, 0);
  }}
  >sdq
  <OrbitControls enableDamping />
</T.PerspectiveCamera>

<T.DirectionalLight position={[15, 25, 15]} castShadow />

<T.Mesh position.y={0.2} castShadow>
  <Tree
    colors={[
      new Color("#4a8d7e").convertLinearToSRGB(),
      new Color("#377f6a").convertLinearToSRGB(),
      new Color("#184f52").convertLinearToSRGB(),
      new Color("#143b36").convertLinearToSRGB(),
    ]}
  />
</T.Mesh>

<T.Mesh rotation.x={-Math.PI / 2} receiveShadow>
  <T.PlaneGeometry args={[100, 100, 1, 1]} />
  <T.ShadowMaterial opacity={0.4} />
</T.Mesh>
