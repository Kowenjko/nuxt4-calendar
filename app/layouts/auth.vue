<script setup lang="ts"></script>

<template>
	<header>
		<PrivateNavBar />
	</header>
	<main class="flex flex-col items-center p-5 gap-10 animate-fade-in">
		<img src="/assets/logo.svg" width="100" height="100" alt="Logo" />
		<slot />
	</main>
</template>
