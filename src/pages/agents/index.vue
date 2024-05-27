<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">

import { pb } from '@/backend'

const agentsListe = await pb.collection('Agents').getFullList()
</script>

<template>
  <h1 class="text-2xl">TOUS LES AGENTS</h1>
  <ul>
  <li v-for="unAgent in agentsListe" :key="unAgent.id">
    <RouterLink
      :to="{
        name: '/agents/[id]',
        params: {
          id: unAgent.id
        }
      }"
      class="text-red-400 hover:text-red-600"
    >
      {{ unAgent.nomAgent }}
    </RouterLink>
  </li>
</ul>
</template>
