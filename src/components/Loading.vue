<template>
  <div class="loading">
  <div class="loader book">
    <figure class="page"></figure>
    <figure class="page"></figure>
    <figure class="page"></figure>
  </div>
  </div>
</template>

<script>
export default {
  name: "loading",
};
</script>

<style lang="scss">
.loading {
  top: 0;
  z-index: 101;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center
}

.loader {
  margin: 5% auto 30px;
}

.book {
  border: 4px solid #FFFFFF;
  width: 60px;
  height: 45px;
  position: relative;
  perspective: 150px;
}

.page {
  display: block;
  width: 30px;
  height: 45px;
  border: 4px solid #FFFFFF;
  border-left: 1px solid transparent;
  margin: 0;
  position: absolute;
  right: -4px;
  top: -4px;
  overflow: hidden;
  background: transparent;
  transform-style: preserve-3d;
  -webkit-transform-origin: left center;
  transform-origin: left center;
}

.book .page:nth-child(1) {
  -webkit-animation: pageTurn 1.2s cubic-bezier(0, .39, 1, .68) 1.6s infinite;
  animation: pageTurn 1.2s cubic-bezier(0, .39, 1, .68) 1.6s infinite;
}

.book .page:nth-child(2) {
  -webkit-animation: pageTurn 1.2s cubic-bezier(0, .39, 1, .68) 1.45s infinite;
  animation: pageTurn 1.2s cubic-bezier(0, .39, 1, .68) 1.45s infinite;
}

.book .page:nth-child(3) {
  -webkit-animation: pageTurn 1.2s cubic-bezier(0, .39, 1, .68) 1.2s infinite;
  animation: pageTurn 1.2s cubic-bezier(0, .39, 1, .68) 1.2s infinite;
}


/* Page turn */

@-webkit-keyframes pageTurn {
  0% {
    -webkit-transform: rotateY( 0deg);
    transform: rotateY( 0deg);
  }
  20% {
    background: transparent;
  }
  40% {
    background: transparent;
    -webkit-transform: rotateY( -180deg);
    transform: rotateY( -180deg);
  }
  100% {
    background: transparent;
    -webkit-transform: rotateY( -180deg);
    transform: rotateY( -180deg);
  }
}

@keyframes pageTurn {
  0% {
    transform: rotateY( 0deg);
  }
  20% {
    background: transparent;
  }
  40% {
    background: transparent;
    transform: rotateY( -180deg);
  }
  100% {
    background: transparent;
    transform: rotateY( -180deg);
  }
}
</style>