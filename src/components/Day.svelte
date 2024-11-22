<script lang="ts">
  const day = 1;
  const text = "jenny is";
</script>

<div class="day-popup">
  {day}
  {text}
</div>

<style>
  .day-popup {
    z-index: 2;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    min-height: 512px;
  }
</style>
