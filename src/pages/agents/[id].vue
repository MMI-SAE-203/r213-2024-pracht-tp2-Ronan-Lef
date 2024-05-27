<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
  import { pb } from '@/backend';
import { useRoute } from 'vue-router/auto'

  //import { oneIDagent } from '@/backend'

  const route = useRoute('/agents/[id]')
  console.log('id :', route.params.id)

const unAgent = await pb.collection('Agents').getOne(route.params.id)
</script>

<template>
  <div>
    <h1 class="text-xl">Un Agent</h1>
    <p>Nom agent : {{ unAgent.nomAgent }}</p>
    <p>email : {{ unAgent.emailAgent }}</p>
  </div>
</template>