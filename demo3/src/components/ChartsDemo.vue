<script setup lang="ts">
import * as echarts from 'echarts/core'
import { BarChart } from 'echarts/charts'
import { GridComponent, TooltipComponent, TitleComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { onMounted, onBeforeUnmount, ref } from 'vue'
import type {ECharts, EChartsCoreOption } from 'echarts/core'

// ✅ 按需引入，减少打包体积（全量引入 echarts 约 1MB，按需可减至 200KB+）
echarts.use([BarChart, GridComponent, TooltipComponent, TitleComponent, CanvasRenderer])

// ✅ 使用 template ref 替代 getElementById
const chartRef = ref<HTMLDivElement>()
// ✅ shallowRef 避免深度响应式（ECharts 实例无需被 Vue 追踪）
let chartInstance: ECharts | null = null

const getOption = (): EChartsCoreOption => ({
  title: { text: 'ECharts 入门示例' },
  tooltip: {},
  xAxis: { data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'] },
  yAxis: {},
  series: [{ name: '销量', type: 'bar', data: [5, 20, 36, 10, 10, 20] }]
})

const initChart = () => {
  if (!chartRef.value) return
  chartInstance = echarts.init(chartRef.value)
  chartInstance.setOption(getOption())
}

const handleResize = () => chartInstance?.resize()

onMounted(() => {
  initChart()
  window.addEventListener('resize', handleResize)
})

// ✅ 组件卸载时彻底清理
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  chartInstance?.dispose()
  chartInstance = null
})
</script>

<template>
  <div ref="chartRef" class="chart-container" />
</template>

<style scoped>
.chart-container {
  width: 100%;
  height: 80vh;
  min-height: 300px; /* 防止初始高度为 0 导致渲染异常 */
}
</style>