<script lang="ts" setup>
const route = useRoute()

definePageMeta({
	middleware: 'auth',
})
</script>

<template>
	<div>{{ route.params?.id }}</div>
</template>
