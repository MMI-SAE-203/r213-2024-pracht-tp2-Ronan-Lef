<script setup lang="ts">
import MaisonCard from '@/components/MaisonCard.vue'

import { useRoute } from 'vue-router/auto'

import { getOneMaison } from '@/backend'

const route = useRoute('/offres/[id]')
console.log('id :', route.params.id)

const oneMaison = await getOneMaison(route.params.id)
</script>

<template>
  <div>
    <h1 class="text-xl">Une maison</h1>
    <MaisonCard v-if="oneMaison" v-bind="oneMaison" />
    <p v-else class="text-red-900">Erreur pas de maison</p>
  </div>
</template>
