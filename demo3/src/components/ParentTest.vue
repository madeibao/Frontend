<template>
  <div class="parent">
    <h3>父组件</h3>
    <button @click="count++">修改传给子组件的count：{{ count }}</button>
    <!-- 父通过属性向子传数据 -->
    <ChildTest
        :msg="message"
        :count="count"
        :userInfo="user"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ChildTest from './ChildTest.vue'

const message = ref('父组件传递过来的消息')
const count = ref(0)
const user = ref({ name: '李四', height: 178 })
</script>
