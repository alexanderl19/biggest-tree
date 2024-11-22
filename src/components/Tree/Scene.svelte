<script lang="ts">
  import { T } from "@threlte/core";
  import { OrbitControls } from "@threlte/extras";
  import Tree from "./Tree.svelte";
</script>

<T.PerspectiveCamera
  makeDefault
  position={[0, 15, 20]}
  on:create={({ ref }) => {
    ref.lookAt(-0.05, 0, 0);
  }}
  fov={20}
>
  <OrbitControls
    enableZoom={false}
    enableDamping
    minPolarAngle={Math.PI / 4}
    maxPolarAngle={Math.PI / 2}
  />
</T.PerspectiveCamera>

<T.DirectionalLight position={[15, 25, 15]} castShadow />

<T.Group position={[0, -3, 0]}>
  <T.Mesh position.y={0.2} castShadow>
    <Tree />
  </T.Mesh>

  <T.Mesh rotation.x={-Math.PI / 2} receiveShadow>
    <T.PlaneGeometry args={[100, 100, 1, 1]} />
    <T.ShadowMaterial opacity={0.4} />
  </T.Mesh>
</T.Group>
