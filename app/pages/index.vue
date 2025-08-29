<script setup lang="ts">
definePageMeta({
	layout: 'auth',
})
</script>

<template>
	<section class="flex items-center gap-10">
		<div class="flex flex-col items-center">
			<img src="/assets/logo.svg" width="300" height="300" alt="Logo" />

			<h1 class="text-2xl font-black lg:text-3xl">Your time, perfectly planned</h1>

			<p class="font-extralight">Join millions of professionals who easily book meetings with the #1 scheduling tool</p>

			<img src="/assets/planning.svg" width="500" height="500" alt="Logo" />
		</div>

		<div class="mt-3">
			<SignIn routing="hash" />
		</div>
	</section>
</template>

<style scoped></style>
