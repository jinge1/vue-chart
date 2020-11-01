<template>
  <div :id="id"></div>
</template>

<script>
import { Chart } from '@antv/g2'
// import { uuid } from '../utils/utils'
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
      this.chart.coordinate('theta', {
        radius: 0.75,
      })

      this.chart
        .scale('percent', {
          formatter: (val) => val * 100 + '%',
        })
        .interval()
        .position('percent')
        .color('item')
        // .label('percent', {
        //   content: (data) => {
        //     return `${data.item}: ${data.percent * 100}%`;
        //   },
        // })
        .adjust('stack')

      this.chart.interaction('element-active')
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
