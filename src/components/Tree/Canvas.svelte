<script lang="ts">
  import { Canvas } from "@threlte/core";
  import Scene from "./Scene.svelte";
  import Day from "../Day.svelte";
</script>

<div>
  <Day />
  <Canvas>
    <Scene />
  </Canvas>
</div>

<style>
  div {
    position: fixed;
    inset: 0;
  }
</style>
