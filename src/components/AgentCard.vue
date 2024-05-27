<script setup lang="ts">
import { Collections, type AgentsResponse } from '@/pocketbase-types';
const props = defineProps<AgentsResponse>()
</script>
<template>
    <article class="border border-teal-500 rounded-lg w-fit p-4 m-2">
        <div class="flex gap-1">
            <h3>{{ prenomAgent }}</h3>
            <p>{{ nomAgent }}</p>
        </div>
        <div>
            <p>{{ telephoneAgent }}</p>
            <p>{{ emailAgent }}</p>
        </div>
    </article>
</template>