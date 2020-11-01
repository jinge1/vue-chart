<template>
  <div>
    <div>title1</div>
    <div class="chart">
      <div class="chart-title" @click="show = !show">图标--{{ show }}</div>
      <!-- <div v-if="show"> -->
      <Pie v-show="show" :show="show" :source="source"></Pie>
      <!-- </div> -->
    </div>
    <div>table</div>
  </div>
</template>
<script>
import { ajax } from '../utils/utils'
import Pie from '../components/pie2'

export default {
  components: {
    Pie,
  },
  data() {
    return {
      show: true,
      source: [],
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      const res = await ajax()
      this.source = res
    },
  },
}
</script>