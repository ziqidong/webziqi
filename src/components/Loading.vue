
<template>
  <div style="height: 60px; width: 100px">
    <div class="load"></div>
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style scoped >
  .load {
    width: 30px;
    height: 30px;
    background-color: #1e8fc6;
    margin: 10px auto;
    animation: rotateplane 1.2s infinite ease-in-out;
  }

  @keyframes rotateplane {
    0% {
      transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    } 50% {
        transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
      } 100% {
          transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
        }
  }
</style>
