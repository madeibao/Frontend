<script setup lang="ts">

import {ref} from "vue";
import { formatDate, formatCurrency } from '@/utils/format.ts'

const name = ref("Tom")
let res = formatDate('2026-08-28');
let currency =formatCurrency(23.23232);

</script>

<template>
<div>
  {{ name }}
  <br>
  {{ res }}
  <br>
  {{ currency }}
</div>
</template>
