<template>
  <div :id="id"></div>
</template>

<script>
import { Chart } from '@antv/g2'
import { uuid } from '../utils/utils'
import chartMixins from '../mixins/chart-mixins'
export default {
  name: 'pie',
  mixins: [chartMixins],
  props: {
    source: {
      type: Array,
      default: () => [],
    },
    show: {
      type: Boolean,
    },
  },
  // data() {
  //   return {
  //     k: 'hello'
  //   }
  // },
  methods: {
    setChartConfig() {
      this.chart.data(this.source)
      // this.chart.interval().position('name*value')
      this.chart
        .interval()
        .position('name*value')
        .color('type')
        .adjust('stack')

      this.chart.interaction('active-region')
    },
  },
}
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
