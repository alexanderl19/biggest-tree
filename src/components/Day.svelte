<script lang="ts">
  import Wallpaper from "./wallpaper.png";
  const day = 1;
  const text = "mery crismas";
</script>

<div class="day-popup box">
  day {day}:
  {text}
  <!-- <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2dFq5Re86SoEE9ySsM89Du?utm_source=generator&theme=0" width="100%" height="250" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> -->
  <br>
  <div class="just-text">❤️ Block your situationship ❤️</div>
  <!-- <img src={Wallpaper} alt="Christmas Wallpaper" class="image"> -->
  <!-- <div class="just-text">
    <a href="https://www.jigsawexplorer.com/online-jigsaw-puzzle-player.html?puzzle_id=christmas-town" target="_blank">
      Try a fun Christmas puzzle!
    </a>
  </div> -->
</div>

<style>
  .day-popup {
    z-index: 2;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    padding: 20px;
    border-radius: 8px;
    min-height: 270px;
    min-width: 512px;
    box-shadow: 2px 3px 20px black, 0 0 60px #8a4d0f inset;
    background: #fffef0;
    filter: url(#wavy2);
    line-height: 50px;
  }

  :root {
  --border-size: 2px;
  --box-width: 512px;
  /* --box-height: 270px; */
  --dash-size: 1em;
}

.box,
.box::after {
  height: var(--box-height);
  width: var(--box-width);
  border: solid;
}

.box {
  border-image: repeating-linear-gradient( to right, red 0, red var(--dash-size), transparent var(--dash-size), transparent calc(var(--dash-size) * 2), blue calc(var(--dash-size) * 2), blue calc(var(--dash-size) * 3), transparent calc(var(--dash-size) * 3), transparent calc(var(--dash-size) * 4));
  border-image-slice: 16;
  border-image-width: var(--border-size) 0;
}

.box::after {
  content: "";
  top: 0;
  position: absolute;
  border-image: repeating-linear-gradient( to bottom, blue 0, blue  var(--dash-size), transparent var(--dash-size), transparent calc(var(--dash-size) * 2), red calc(var(--dash-size) * 2), red calc(var(--dash-size) * 3), transparent calc(var(--dash-size) * 3), transparent calc(var(--dash-size) * 4));
  border-image-slice: 16;
  border-image-width: 0 var(--border-size);
}

.just-text{
  font-size: 30px;
  font-weight: bold;
  color: black;
  text-shadow: 0 0 10px white;
  margin-top: 20px;
  margin-bottom: 20px;
}

/* .image{
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin-top: 20px;
  margin-bottom: 20px;
} */


</style>
