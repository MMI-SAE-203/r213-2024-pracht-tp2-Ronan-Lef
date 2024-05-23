<script setup lang="ts">
import { pb } from '@/backend';

import { oneIDagent } from '@/backend'

const agentsListe = await allAgentsSorted()
</script>

<template>
  <h1 class="text-2xl">TOUS LES AGENTS</h1>
  <ul>
  <li v-for="unAgent in agentsListe" :v-key="unAgent.id">
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
