<template>
  <div class="child">
    <h4>子组件</h4>
    <p>msg：{{ msg }}</p>
    <p>count：{{ count }}</p>
    <p>用户姓名：{{ userInfo.name }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  msg: string
  count?: number
  userInfo?: { name: string }
}
const props = withDefaults(defineProps<Props>(), {
  count: 0,
  userInfo: () => ({ name: '默认名字' })
})
</script>