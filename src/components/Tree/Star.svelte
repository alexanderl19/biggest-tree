<script>
  import { Group } from "three";
  import { T, forwardEventHandlers } from "@threlte/core";
  import { useGltf } from "@threlte/extras";

  export const ref = new Group();

  const gltf = useGltf("/star.glb");

  const component = forwardEventHandlers();
</script>

<T is={ref} dispose={false} {...$$restProps} bind:this={$component}>
  {#await gltf}
    <slot name="fallback" />
  {:then gltf}
    <T.Group position={[0, 0, 0]}>
      <T.Mesh
        geometry={gltf.nodes.star_02002_1.geometry}
        material={gltf.materials["star.003"]}
      />
      <T.Mesh
        geometry={gltf.nodes.star_02002_2.geometry}
        material={gltf.materials["star.004"]}
      />
    </T.Group>
  {:catch error}
    <slot name="error" {error} />
  {/await}

  <slot {ref} />
</T>
