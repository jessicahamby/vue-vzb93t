<template>
  <div id="app">
    <div
      class="bn-tooltip-box css"
      style="
        position: absolute;
        left: 0px;
        top: 8px;
        transition: opacity 120ms ease-in-out 0s, transform 120ms ease-in-out 0s;
        opacity: 0;
        transform: translate3d(0px, 6px, 0px);
        visibility: hidden;
  "
    >
      When enabled, the Buy/Sell button will change with buy order or sell order
      selected in order book.<i class="gap-fill"></i>
    </div>

    </div>
      Technical Indicator
      <div
        class="bn-tooltip-arrow css"
        style="position: absolute; left: 61px"
      >kidda
        </div>
      <i class="gap-fill"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Homepage',
  props: {
    msg: String,
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
