import { Chart } from '@antv/g2'

import { uuid } from '../utils/utils'
export default {
  data() {
    return {
      chart: null,
      id: uuid(),
    }
  },
  watch: {
    // 监控data，当发生变化时，重新绘制图表
    source() {
      this.drawChart()
    },
    show() {
      this.drawChart()
    },
  },
  methods: {
    // 构造图表实例
    constructChart() {
      // 销毁实例
      if (this.chart) {
        this.chart.destroy()
      }
      const dom = document.getElementById(this.id)
      if (dom && dom.innerHTML) {
        dom.innerHTML = ''
      }
      this.chart = new Chart({
        container: this.id,
        width: 400,
        height: 300,
        // padding: this.padding || ['auto', 'auto'],
      })
    },
    drawChart() {
      // 新建实例
      this.constructChart()

      // 配置图表
      this.setChartConfig()

      // 绘制
      this.chart.render()
      console.log(1)

      // 销毁实例
      this.$once('hook:beforeDestroy', () => {
        this.chart.destroy()
      })
    },
  }
}
