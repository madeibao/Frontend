<template>
  <div>鼠标位置：{{ x }} , {{ y }}</div>
</template>

<script setup>
import { useMouse } from './../basicts/hook.ts'

const { x, y } = useMouse()
</script>