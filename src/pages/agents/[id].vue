<script setup lang="ts">
  import { useRoute } from 'vue-router/auto'

  import { oneIDagent } from '@/backend'

  const route = useRoute('/agents/[id]')
  console.log('id :', route.params.id)

  const unAgent = await oneIDagent(route.params.id)
</script>

<template>
  <div>
    <h1 class="text-xl">Un Agent</h1>
  </div>
</template>