<script lang="ts">
  import { Group } from "three";
  import { T, forwardEventHandlers } from "@threlte/core";
  import { useGltf } from "@threlte/extras";
  import { GhibliShader } from "./GhibliShader";
  import Star from "./Star.svelte";

  export const ref = new Group();

  const gltf = useGltf("/trees.glb");

  const component = forwardEventHandlers();

  const instances: {
    position: [number, number, number];
    scale: [number, number, number];
    rotation: [number, number, number];
  }[] = [
    { position: [-0.9, 2, 0.6], scale: [0.6, 0.6, 0.6], rotation: [2, 4, 6] },
    { position: [1.1, 2, 0.6], scale: [0.6, 0.6, 0.6], rotation: [2, 4, 6] },
    { position: [-0.8, 2, 0.2], scale: [0.6, 0.6, 0.6], rotation: [2, 4, 6] },
    { position: [0.2, 2, -1.3], scale: [0.6, 0.6, 0.6], rotation: [2, 4, 6] },
    { position: [-1, 2, -0.6], scale: [0.6, 0.6, 0.6], rotation: [2, 4, 6] },
    { position: [1, 2, 0.6], scale: [0.6, 0.6, 0.6], rotation: [2, 4, 6] },
    { position: [1, 2, 0.2], scale: [0.6, 0.6, 0.6], rotation: [2, 4, 6] },
    { position: [0, 2.5, 0], scale: [1, 1, 1], rotation: [0, 0, 0] },
    { position: [0, 4.5, 0], scale: [0.6, 0.6, 0.6], rotation: [2, 4, 6] },
    { position: [0, 5, 0], scale: [0.5, 0.5, 0.5], rotation: [5, 3, 3] },
    { position: [0, 5, 0], scale: [0.5, 0.5, 0.5], rotation: [2, 4, 8] },
    { position: [0, 6, 0], scale: [0.4, 0.4, 0.4], rotation: [5, 2, 3] },
    { position: [0, 6.5, 0], scale: [0.3, 0.3, 0.3], rotation: [4, 6, 4] },
    { position: [0, 7, 0], scale: [0.3, 0.3, 0.3], rotation: [5, 2, 4] },
  ];
</script>

{#if $gltf}
  <T is={ref} {...$$restProps} bind:this={$component}>
    <T.Group name="Scene">
      <T.Group rotation={[0, 0, 0]} scale={0.8}>
        <Star position={[0, 8, 0]} scale={5} />
        {#each instances as { position, scale, rotation }}
          <T.Mesh
            castShadow
            receiveShadow
            geometry={$gltf.nodes.Foliage.geometry}
            {position}
            {scale}
            {rotation}
          >
            <T.ShaderMaterial attach="material" {...GhibliShader} />
          </T.Mesh>
        {/each}
      </T.Group>
    </T.Group>

    <slot {ref} />
  </T>
{/if}
