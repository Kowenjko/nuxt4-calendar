<script setup lang="ts">
import middlewareAuth from '@/middleware/auth.global'

definePageMeta({
	middleware: middlewareAuth,
})
</script>

<template>
	<div>
		<p class="font-bold text-center py-5">Calendar app</p>
	</div>
</template>

<style scoped></style>
