<script setup lang="ts"></script>

<template>
	<header>
		<SignedOut>
			<SignInButton />
		</SignedOut>
		<SignedIn>
			<UserButton />
		</SignedIn>
	</header>
	<main class="flex justify-center items-center p-10 gap-24 animate-fade-in max-md:flex-col">
		<slot />
	</main>
</template>

<style scoped></style>
